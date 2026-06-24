import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import {
  confirmOtp as confirmOtpApi,
  fetchProfileRequirements,
  fetchSession,
  requestOtp as requestOtpApi,
  saveProfile as saveProfileApi,
  type AuthMedium,
} from "./authApi";
import { AUTH_API_BASE } from "./config";
import { COUNTRY_CODES, type CountryCode } from "./countries";
import type { AuthUser, ProfilePayload, ProfileRequirementField, SessionState } from "./types";

type AuthContextValue = {
  user: AuthUser | null;
  /** Session cookie is valid (includes users who still need profile). */
  hasSession: boolean;
  /** Profile exists in DB with required fields. */
  isAuthenticated: boolean;
  needsProfileCompletion: boolean;
  requiredProfileFields: ProfileRequirementField[];
  isReady: boolean;
  countryCodes: CountryCode[];
  requestOtp: (params: {
    medium: AuthMedium;
    email?: string;
    phone_number?: string;
  }) => Promise<void>;
  confirmOtp: (params: { medium: AuthMedium; username: string; otp: string }) => Promise<void>;
  refreshSession: () => Promise<SessionState>;
  completeProfile: (payload: ProfilePayload) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [hasSession, setHasSession] = useState(false);
  const [needsProfileCompletion, setNeedsProfileCompletion] = useState(false);
  const [requiredProfileFields, setRequiredProfileFields] = useState<ProfileRequirementField[]>([]);
  const [isReady, setIsReady] = useState(false);

  const refreshSession = useCallback(async (accessToken?: string) => {
    console.log("refresh session", new Error("test"));
    const [session, requirements] = await Promise.all([
      fetchSession(),
      fetchProfileRequirements(accessToken).catch(() => ({ required_fields: [] as ProfileRequirementField[] })),
    ]);

    const required = requirements.required_fields;
    setRequiredProfileFields(required);

    setNeedsProfileCompletion(required.length > 0);
    setUser(session.user);
    setHasSession(session.kind !== "anonymous");
    return session;
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        await refreshSession();
      } finally {
        if (!cancelled) setIsReady(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const requestOtp = useCallback(
    (params: { medium: AuthMedium; email?: string; phone_number?: string }) =>
      requestOtpApi(params),
    [],
  );

  const confirmOtp = useCallback(
    async (params: { medium: AuthMedium; username: string; otp: string }) => {
      const accessToken = await confirmOtpApi(params);
      await refreshSession(accessToken);
    },
    [refreshSession],
  );

  const completeProfile = useCallback(
    async (payload: ProfilePayload) => {
      await saveProfileApi(payload);
      await refreshSession();
    },
    [refreshSession],
  );

  const logout = useCallback(() => {
    fetch(`${AUTH_API_BASE}/api/auth/logout`, { credentials: "include" })
      .then((res) => res.json())
      .then((data: { logout_url?: string }) => {
        if (data.logout_url) {
          window.location.href = data.logout_url;
        } else {
          setHasSession(false);
          setNeedsProfileCompletion(false);
          setRequiredProfileFields([]);
          setUser(null);
        }
      })
      .catch(() => {
        setHasSession(false);
        setNeedsProfileCompletion(false);
        setRequiredProfileFields([]);
        setUser(null);
      });
  }, []);

  const isAuthenticated = hasSession;

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      hasSession,
      isAuthenticated,
      needsProfileCompletion,
      requiredProfileFields,
      isReady,
      countryCodes: COUNTRY_CODES,
      requestOtp,
      confirmOtp,
      refreshSession,
      completeProfile,
      logout,
    }),
    [
      user,
      hasSession,
      isAuthenticated,
      needsProfileCompletion,
      requiredProfileFields,
      isReady,
      requestOtp,
      confirmOtp,
      refreshSession,
      completeProfile,
      logout,
    ],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

/** Requires a valid session (used for complete-profile). */
export function RequireSession() {
  const { hasSession, isReady, ...rest } = useAuth();

  console.log("@@@@@@ rest", hasSession, isReady, rest);

  const location = useLocation();

  // if (!isReady) {
  //   return (
  //     <div className="flex min-h-screen items-center justify-center bg-black text-slate-300">
  //       Loading…
  //     </div>
  //   );
  // }

  if (!hasSession) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}

/**
 * Renders child routes only when the user has a complete profile in the DB.
 */
export function RequireAuth() {
  const { isAuthenticated, needsProfileCompletion, isReady, hasSession } = useAuth();
  const location = useLocation();

  if (!isReady) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white text-gray-600">
        Loading…
      </div>
    );
  }

  // if (!hasSession) {
  //   return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  // }

  // if (needsProfileCompletion) {
  //   return <Navigate to="/complete-profile" replace state={{ from: location.pathname }} />;
  // }

  // if (!isAuthenticated) {
  //   return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  // }

  return <Outlet />;
}
