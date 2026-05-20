import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { Button, Field } from "@freelancing/ui";
import { AuthApiError } from "../../auth/authApi";
import { useAuth } from "../../auth/AuthContext";
import { AuthLoginShell } from "../../components/auth/AuthLoginShell";
import { isValidOtp, OtpField } from "../../components/auth/OtpField";
import { SlideSteps } from "../../components/auth/SlideSteps";
import { UsernameSummary } from "../../components/auth/UsernameSummary";

const CONTINUE_CLASS =
  "w-full !bg-[#d4a85c] !text-slate-900 hover:!bg-[#c99a4d] disabled:opacity-60";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function EmailLoginPage() {
  const navigate = useNavigate();
  const { isReady, isAuthenticated, hasSession, needsProfileCompletion, requestOtp, confirmOtp } = useAuth();

  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // if (!isReady) {
  //   return (
  //     <div className="flex min-h-screen items-center justify-center bg-black text-slate-300">
  //       Loading…
  //     </div>
  //   );
  // }

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  if (hasSession && needsProfileCompletion) {
    return <Navigate to="/complete-profile" replace />;
  }
  if (hasSession) {
    return <Navigate to="/" replace />;
  }

  const trimmedEmail = email.trim();

  const handleRequestOtp = async () => {
    setError(null);
    if (!isValidEmail(trimmedEmail)) {
      setError("Enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      await requestOtp({ medium: "email", email: trimmedEmail });
      setStep(1);
    } catch (err) {
      setError(err instanceof AuthApiError ? err.message : "Could not send the code. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmOtp = async () => {
    setError(null);
    if (!isValidOtp(otp)) {
      setError("Enter the 6-digit code.");
      return;
    }
    setLoading(true);
    try {
      await confirmOtp({ medium: "email", username: trimmedEmail, otp });
      navigate("/complete-profile", { replace: true });
    } catch (err) {
      setError(err instanceof AuthApiError ? err.message : "Invalid code. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setError(null);
    setLoading(true);
    try {
      await requestOtp({ medium: "email", email: trimmedEmail });
    } catch (err) {
      setError(err instanceof AuthApiError ? err.message : "Could not resend the code.");
    } finally {
      setLoading(false);
    }
  };

  const goBack = () => {
    if (step === 0) {
      navigate("/login");
      return;
    }
    setError(null);
    setOtp("");
    setStep(0);
  };

  return (
    <AuthLoginShell
      title={step === 0 ? "Welcome" : "Verify Your Identity"}
      subtitle={
        step === 0
          ? undefined
          : `We've sent an email with your code to ${trimmedEmail || "your email"}.`
      }
      showSignUpFooter={step === 0}
      onBack={goBack}
    >
      <SlideSteps step={step}>
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            void handleRequestOtp();
          }}
        >
          <Field
            type="email"
            label="Email address"
            name="email"
            autoComplete="email"
            value={email}
            onValueChange={setEmail}
            required
            disabled={loading}
            invalid={Boolean(error && step === 0)}
            error={step === 0 ? error : undefined}
          />
          <Button
            type="submit"
            variant="filled"
            className={CONTINUE_CLASS}
            loading={loading}
            disabled={!trimmedEmail}
          >
            Continue
          </Button>
        </form>

        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            void handleConfirmOtp();
          }}
        >
          <UsernameSummary value={trimmedEmail} onEdit={() => setStep(0)} />
          <OtpField
            value={otp}
            onValueChange={setOtp}
            label="Enter the code"
            disabled={loading}
            error={step === 1 ? error ?? undefined : undefined}
          />
          <Button
            type="submit"
            variant="filled"
            className={CONTINUE_CLASS}
            loading={loading}
            disabled={!isValidOtp(otp)}
          >
            Continue
          </Button>
          <p className="text-center text-sm text-slate-600">
            Didn&apos;t receive an email?{" "}
            <button
              type="button"
              className="font-medium text-[color:var(--md-sys-color-primary,#2563eb)] hover:underline"
              onClick={() => void handleResend()}
              disabled={loading}
            >
              Resend
            </button>
          </p>
        </form>
      </SlideSteps>
    </AuthLoginShell>
  );
}
