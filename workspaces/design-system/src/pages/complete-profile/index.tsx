import { useEffect, useState, type FormEvent } from "react";
import { Navigate, useLocation, useNavigate } from "react-router";
import { Button, Field } from "@freelancing/ui";
import { AuthApiError } from "../../auth/authApi";
import { useAuth } from "../../auth/AuthContext";
import { DEFAULT_COUNTRY_ISO2, findCountryByIso2, formatE164Phone } from "../../auth/countries";
import type { ProfileRequirementField } from "../../auth/types";
import { AuthLoginShell } from "../../components/auth/AuthLoginShell";

const APP_DISPLAY_NAME = "Web App";

const CONTINUE_CLASS =
  "w-full !bg-[#d4a85c] !text-slate-900 hover:!bg-[#c99a4d] disabled:opacity-60";

type PagePhase = "checking" | "success" | "form";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export function CompleteProfilePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from ?? "/";
  const {
    isReady,
    hasSession,
    needsProfileCompletion,
    requiredProfileFields,
    countryCodes,
    isAuthenticated,
    refreshSession,
    completeProfile,
  } = useAuth();


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryIso, setCountryIso] = useState(DEFAULT_COUNTRY_ISO2);
  const [phoneLocal, setPhoneLocal] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const country = findCountryByIso2(countryIso) ?? countryCodes[0];
  const phoneE164 = country ? formatE164Phone(country.dialCode, phoneLocal) : "";

  // useEffect(() => {
  //   if (!isReady || !hasSession) return;

  //   let cancelled = false;
  //   let successTimer: number | undefined;

  //   void (async () => {
  //     setPhase("checking");
  //     const session = await refreshSession();
  //     if (cancelled) return;

  //     if (session.kind === "complete") {
  //       navigate(from === "/complete-profile" ? "/" : from, { replace: true });
  //       return;
  //     }

  //     setPhase("success");
  //     successTimer = window.setTimeout(() => {
  //       if (!cancelled) setPhase("form");
  //     }, 1200);
  //   })();

  //   return () => {
  //     cancelled = true;
  //     if (successTimer) window.clearTimeout(successTimer);
  //   };
  // }, [isReady, hasSession, refreshSession, navigate, from]);

  // if (!isReady) {
  //   return (
  //     <div className="flex min-h-screen items-center justify-center bg-black text-slate-300">
  //       Loading…
  //     </div>
  //   );
  // }

  if (!hasSession) {
    return <Navigate to="/login" replace />;
  }

  if (isAuthenticated && !needsProfileCompletion) {
    return <Navigate to={from === "/complete-profile" ? "/" : from} replace />;
  }

  const requiredSet = new Set<ProfileRequirementField>(requiredProfileFields);
  const askFirstName = requiredSet.has("first_name");
  const askLastName = requiredSet.has("last_name");
  const askEmail = requiredSet.has("email");
  const askPhone = requiredSet.has("phone_number");
  const askImageUrl = requiredSet.has("image_url");

  const canSubmit =
    (!askFirstName || firstName.trim().length > 0) &&
    (!askLastName || lastName.trim().length > 0) &&
    (!askEmail || isValidEmail(email)) &&
    (!askPhone || phoneLocal.replace(/\D/g, "").length >= 6) &&
    (!askImageUrl || !imageUrl.trim() || isValidUrl(imageUrl));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (askFirstName && !firstName.trim()) {
      setError("First name is required.");
      return;
    }
    if (askLastName && !lastName.trim()) {
      setError("Last name is required.");
      return;
    }
    if (askEmail && !isValidEmail(email)) {
      setError("Enter a valid email address.");
      return;
    }
    if (askPhone && phoneLocal.replace(/\D/g, "").length < 6) {
      setError("Enter a valid phone number.");
      return;
    }
    if (askImageUrl && imageUrl.trim() && !isValidUrl(imageUrl)) {
      setError("Enter a valid image URL or leave it blank.");
      return;
    }

    setLoading(true);
    try {
      await completeProfile({
        ...(askFirstName ? { first_name: firstName.trim() } : {}),
        ...(askLastName ? { last_name: lastName.trim() } : {}),
        ...(askEmail ? { email: email.trim() } : {}),
        ...(askPhone ? { phone_number: phoneE164 } : {}),
        ...(askImageUrl ? { image_url: imageUrl.trim() || "" } : {}),
      });
      navigate(from === "/complete-profile" ? "/" : from, { replace: true });
    } catch (err) {
      setError(err instanceof AuthApiError ? err.message : "Could not save your profile. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const showForm = true;

  return (
    <AuthLoginShell
      title={showForm ? "Complete your profile" : "Login successful"}
      subtitle={
        showForm
          ? `Add a few details to finish setting up your account for ${APP_DISPLAY_NAME}.`
          : "You’re signed in. One more step."
      }
      showSignUpFooter={false}
    >
      <form className="space-y-5" onSubmit={(e) => void handleSubmit(e)}>
        {askFirstName ? (
          <Field
            type="text"
            label="First name"
            name="firstName"
            value={firstName}
            onValueChange={setFirstName}
            required
            disabled={loading}
            placeholder="Jane"
          />
        ) : null}
        {askLastName ? (
          <Field
            type="text"
            label="Last name"
            name="lastName"
            value={lastName}
            onValueChange={setLastName}
            required
            disabled={loading}
            placeholder="Doe"
          />
        ) : null}
        {askEmail ? (
          <Field
            type="email"
            label="Email"
            name="email"
            value={email}
            onValueChange={setEmail}
            required
            disabled={loading}
            placeholder="you@example.com"
          />
        ) : null}
        {askPhone ? (
          <div className="space-y-3">
            <label className="block text-sm font-medium text-slate-700">Country Code</label>
            <select
              className="w-full rounded border border-slate-300 px-3 py-2 text-sm"
              value={countryIso}
              onChange={(e) => setCountryIso(e.target.value)}
              disabled={loading}
            >
              {countryCodes.map((c) => (
                <option key={c.iso2} value={c.iso2}>
                  {`${c.name} (${c.dialCode})`}
                </option>
              ))}
            </select>
            <Field
              type="tel"
              label="Phone number"
              name="phoneNumber"
              value={phoneLocal}
              onValueChange={(value) => setPhoneLocal(value.replace(/\D/g, ""))}
              required
              disabled={loading}
              placeholder="9876543210"
            />
          </div>
        ) : null}
        {askImageUrl ? (
          <Field
            type="url"
            label="Image URL"
            name="imageUrl"
            value={imageUrl}
            onValueChange={setImageUrl}
            disabled={loading}
            placeholder="https://example.com/avatar.jpg"
          />
        ) : null}
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          <Button
            type="submit"
            variant="filled"
            className={CONTINUE_CLASS}
            loading={loading}
            disabled={!canSubmit}
          >
            Save and continue
          </Button>
      </form>
    </AuthLoginShell>
  );
}
