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
import { fetchSession, logout as logoutApi } from "./authApi";
import type { AuthUser, SessionState } from "./types";
import {
  getDisplayName,
  getUserAvatarUrl,
  getUserEmail,
  getUserInitial,
} from "./userDisplay";

type AuthContextValue = {
  user: AuthUser | null;
  displayName: string;
  userInitial: string;
  userEmail: string | undefined;
  userAvatarUrl: string | undefined;
  isAuthenticated: boolean;
  isReady: boolean;
  refreshSession: () => Promise<SessionState>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const applySession = useCallback((session: SessionState) => {
    if (session.kind === "authenticated") {
      setUser(session.user);
      setIsAuthenticated(true);
      return;
    }

    setUser(null);
    setIsAuthenticated(false);
  }, []);

  const refreshSession = useCallback(async () => {
    const session = await fetchSession();
    applySession(session);
    return session;
  }, [applySession]);

  useEffect(() => {
    let cancelled = false;

    void (async () => {
      try {
        await refreshSession();
      } finally {
        if (!cancelled) setIsReady(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [refreshSession]);

  const logout = useCallback(() => {
    void logoutApi()
      .then((data) => {
        if (data?.logout_url) {
          window.location.href = data.logout_url;
          return;
        }
        setUser(null);
        setIsAuthenticated(false);
      })
  }, []);

  const displayName = useMemo(() => getDisplayName(user), [user]);
  const userInitial = useMemo(() => getUserInitial(user), [user]);
  const userEmail = useMemo(() => getUserEmail(user), [user]);
  const userAvatarUrl = useMemo(() => getUserAvatarUrl(user), [user]);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      displayName,
      userInitial,
      userEmail,
      userAvatarUrl,
      isAuthenticated,
      isReady,
      refreshSession,
      logout,
    }),
    [
      user,
      displayName,
      userInitial,
      userEmail,
      userAvatarUrl,
      isAuthenticated,
      isReady,
      refreshSession,
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

export function RequireAuth() {
  const { isAuthenticated, isReady } = useAuth();
  const location = useLocation();

  if (!isReady) {
    return <AuthLoadingScreen />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}

function AuthLoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white text-[var(--md-sys-color-on-surface-variant)]">
      Loading…
    </div>
  );
}
