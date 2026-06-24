import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../auth/AuthContext";
import { LoginCard } from "../../auth/LoginCard";

export function LoginPage() {
  const { isReady, isAuthenticated } = useAuth();
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from ?? "/";

  if (!isReady) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white text-[var(--md-sys-color-on-surface-variant)]">
        Loading…
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to={from === "/login" ? "/" : from} replace />;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--md-sys-color-surface-container-low)] px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-[var(--md-sys-color-outline-variant)] bg-white p-8 shadow-sm">
        <LoginCard />
      </div>
    </div>
  );
}
