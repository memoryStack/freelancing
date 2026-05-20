/** Base URL for auth API (no trailing slash). Override with Vite env in production. */
export const AUTH_API_BASE =
  import.meta.env.VITE_AUTH_API_URL?.replace(/\/$/, "") ?? "http://localhost:3000";

/** Login entry points (hardcoded for local auth server). */
const AUTH_ORIGIN = "http://localhost:3000";

/** Google OAuth — existing authorize route. */
export const AUTH_SOCIAL_GMAIL_URL = `${AUTH_ORIGIN}/api/auth/login`;

/** Email passwordless login. */
export const AUTH_EMAIL_CODE_URL = `${AUTH_ORIGIN}/api/auth/login?medium=email`;

/** SMS passwordless login. */
export const AUTH_SMS_CODE_URL = `${AUTH_ORIGIN}/api/auth/login?medium=sms`;

export const AUTH_SIGN_UP_URL =
  import.meta.env.VITE_AUTH_SIGN_UP_URL ?? `${AUTH_API_BASE}/signup`;

export const AUTH_RECOVER_URL =
  import.meta.env.VITE_AUTH_RECOVER_URL ?? `${AUTH_API_BASE}/recover`;
