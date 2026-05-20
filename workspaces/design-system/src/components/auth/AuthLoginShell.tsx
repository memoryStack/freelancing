import type { ReactNode } from "react";
import { AUTH_SIGN_UP_URL } from "../../auth/config";

const APP_DISPLAY_NAME = import.meta.env.VITE_APP_DISPLAY_NAME ?? "Password Less App";

type AuthLoginShellProps = {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  showSignUpFooter?: boolean;
  onBack?: () => void;
  backLabel?: string;
};

export function AuthLoginShell({
  children,
  title = "Welcome",
  subtitle,
  showSignUpFooter = true,
  onBack,
  backLabel = "Back",
}: AuthLoginShellProps) {
  const resolvedSubtitle = subtitle ?? `Log in to ${APP_DISPLAY_NAME}.`;

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-4 py-12">
      <div className="relative w-full max-w-md rounded-lg border border-slate-200/80 bg-white p-8 shadow-sm">
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--md-sys-color-primary,#2563eb)] hover:underline"
          >
            <span aria-hidden>←</span>
            {backLabel}
          </button>
        ) : null}

        <div className="flex flex-col items-center">
          <div className="h-16 w-28 overflow-hidden rounded bg-slate-100" aria-hidden>
            <img
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=120&fit=crop"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <h1 className="mt-6 text-center text-2xl font-normal tracking-tight text-slate-800">
            {title}
          </h1>
          <p className="mt-2 text-center text-sm text-slate-600">{resolvedSubtitle}</p>
        </div>

        <div className="mt-8">{children}</div>
      </div>

      {showSignUpFooter ? (
        <p className="mt-6 text-center text-sm text-slate-400">
          Don&apos;t have an account?{" "}
          <a
            className="font-medium text-[color:var(--md-sys-color-primary,#2563eb)] hover:underline"
            href={AUTH_SIGN_UP_URL}
          >
            Sign up
          </a>
        </p>
      ) : null}

      <div className="mt-8 text-slate-500" aria-hidden>
        <svg className="mx-auto h-5 w-5 opacity-40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v5.7c0 4.54-3.07 8.83-7 9.93-3.93-1.1-7-5.39-7-9.93V6.3l7-3.12z" />
        </svg>
      </div>
    </div>
  );
}
