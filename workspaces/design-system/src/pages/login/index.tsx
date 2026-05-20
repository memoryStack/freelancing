import { Navigate, useLocation, useNavigate } from "react-router";
import { Button } from "@freelancing/ui";
import { useAuth } from "../../auth/AuthContext";
import {
  AUTH_RECOVER_URL,
  AUTH_SIGN_UP_URL,
  AUTH_SOCIAL_GMAIL_URL,
} from "../../auth/config";
const APP_DISPLAY_NAME = import.meta.env.VITE_APP_DISPLAY_NAME ?? "Web App";

function GmailIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function AuthLinksFooter() {
  const linkClass =
    "font-medium text-[color:var(--md-sys-color-primary)] underline-offset-2 hover:underline";
  return (
    <div className="mt-8 space-y-3 text-center text-sm text-slate-600">
      <p>
        Don&apos;t have an account?{" "}
        <a className={linkClass} href={AUTH_SIGN_UP_URL}>
          Sign up
        </a>
      </p>
      <p>
        Don&apos;t have access to your account?{" "}
        <a className={linkClass} href={AUTH_RECOVER_URL}>
          Recover
        </a>
      </p>
    </div>
  );
}

export function LoginPage() {
  const { isReady, isAuthenticated, hasSession, needsProfileCompletion } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = (location.state as { from?: string } | null)?.from ?? "/";

  // if (!isReady) {
  //   return (
  //     <div className="flex min-h-screen items-center justify-center bg-slate-100 text-slate-600">
  //       Loading…
  //     </div>
  //   );
  // }

  if (isAuthenticated) {
    return <Navigate to={from === "/login" ? "/" : from} replace />;
  }
  if (hasSession && needsProfileCompletion) {
    return <Navigate to="/complete-profile" replace />;
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-100 px-4 py-12">
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full border border-dashed border-slate-300/50"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-1/4 h-48 w-48 rounded-full border border-dotted border-slate-200"
        aria-hidden
      />

      <div className="relative w-full max-w-md rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center">
          <div
            className="flex h-14 w-40 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-xs font-medium text-slate-500"
            aria-label="Application logo placeholder"
          >
            Logo
          </div>
          <h1 className="mt-6 text-center font-serif text-4xl font-semibold tracking-tight text-slate-900">
            Welcome
          </h1>
          <p className="mt-2 text-center text-slate-600">
            <span className="mr-1 inline-block h-3 w-12 rounded border border-dashed border-slate-300 align-middle" />{" "}
            <span className="text-slate-800">({APP_DISPLAY_NAME}).</span>
          </p>
        </div>

        <div className="mt-8 space-y-3">
          <Button
            href={AUTH_SOCIAL_GMAIL_URL}
            variant="filled"
            className="w-full"
            leadingIcon={<GmailIcon />}
            rel="noopener noreferrer"
          >
            Continue with Gmail
          </Button>
        </div>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center" aria-hidden>
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-3 text-xs font-semibold tracking-wide text-slate-500">
              OTHER LOGIN OPTIONS:
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            type="button"
            variant="outlined"
            className="w-full"
            onClick={() => navigate("/login/email")}
          >
            Email me a code
          </Button>
          <Button
            type="button"
            variant="outlined"
            className="w-full"
            onClick={() => navigate("/login/sms")}
          >
            Text me a code
          </Button>
        </div>

        <AuthLinksFooter />
      </div>
    </div>
  );
}
