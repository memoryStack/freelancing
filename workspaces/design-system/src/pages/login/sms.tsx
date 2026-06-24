import { useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { Button, Field, Select, type SelectItemData } from "@freelancing/ui";
import { AuthApiError } from "../../auth/authApi";
import { useAuth } from "../../auth/AuthContext";
import {
  DEFAULT_COUNTRY_ISO2,
  findCountryByIso2,
  formatE164Phone,
} from "../../auth/countries";
import { AuthLoginShell } from "../../components/auth/AuthLoginShell";
import { isValidOtp, OtpField } from "../../components/auth/OtpField";
import { SlideSteps } from "../../components/auth/SlideSteps";
import { UsernameSummary } from "../../components/auth/UsernameSummary";

const CONTINUE_CLASS =
  "w-full !bg-[#d4a85c] !text-slate-900 hover:!bg-[#c99a4d] disabled:opacity-60";

function formatDisplayPhone(e164: string, dialCode: string): string {
  const local = e164.startsWith(dialCode) ? e164.slice(dialCode.length) : e164.replace(/^\+\d+/, "");
  return `${dialCode} ${local}`.trim();
}

export function SmsLoginPage() {
  const navigate = useNavigate();
  const { isReady, isAuthenticated, hasSession, needsProfileCompletion, countryCodes, requestOtp, confirmOtp } =
    useAuth();

  const [step, setStep] = useState(0);
  const [countryIso, setCountryIso] = useState(DEFAULT_COUNTRY_ISO2);
  const [phoneLocal, setPhoneLocal] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const country = findCountryByIso2(countryIso) ?? countryCodes[0];
  const phoneE164 = country ? formatE164Phone(country.dialCode, phoneLocal) : "";
  const displayPhone = country ? formatDisplayPhone(phoneE164, country.dialCode) : phoneE164;

  const countrySelectItems: SelectItemData[] = useMemo(
    () =>
      countryCodes.map((c) => ({
        value: c.iso2,
        label: (
          <span className="inline-flex items-center gap-2">
            {`${c.name}, ${c.iso2}, ${c.dialCode}`}
          </span>
        ),
        leadingIcon: <img src={c.flagUrl} alt="" className="h-4 w-6 object-cover" />,
      })),
    [countryCodes],
  );

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

  const localDigits = phoneLocal.replace(/\D/g, "");
  const isPhoneValid = localDigits.length >= 6;

  const handlePhoneChange = (value: string) => {
    setPhoneLocal(value.replace(/\D/g, ""));
  };

  const handleRequestOtp = async () => {
    setError(null);
    if (!isPhoneValid || !country) {
      setError("Enter a valid phone number.");
      return;
    }
    setLoading(true);
    try {
      await requestOtp({ medium: "sms", phone_number: phoneE164 });
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
      await confirmOtp({ medium: "sms", username: phoneE164, otp });
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
      await requestOtp({ medium: "sms", phone_number: phoneE164 });
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
        step === 0 ? undefined : "We've sent a text message to:"
      }
      showSignUpFooter={step === 0}
      onBack={goBack}
    >
      <SlideSteps step={step}>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            void handleRequestOtp();
          }}
        >
          <Select
            items={countrySelectItems}
            value={countryIso}
            onValueChange={(v) => v && setCountryIso(v)}
            disabled={loading}
          />
          <Field
            type="tel"
            label="Phone number"
            name="phone"
            autoComplete="tel-national"
            value={phoneLocal}
            onValueChange={handlePhoneChange}
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
            disabled={!isPhoneValid}
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
          <UsernameSummary value={displayPhone} onEdit={() => setStep(0)} />
          <OtpField
            value={otp}
            onValueChange={setOtp}
            label="Enter the 6-digit code"
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
            Didn&apos;t receive a code?{" "}
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
