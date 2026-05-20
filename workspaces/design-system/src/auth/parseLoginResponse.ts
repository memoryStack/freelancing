import type { AuthUser, LoginSuccessPayload } from "./types";

function pickString(obj: Record<string, unknown>, keys: string[]): string | undefined {
  for (const key of keys) {
    const v = obj[key];
    if (typeof v === "string" && v.length > 0) return v;
  }
  return undefined;
}

function pickUser(obj: Record<string, unknown>, fallbackEmail: string): AuthUser {
  const userRaw = obj.user ?? obj.profile;
  if (userRaw && typeof userRaw === "object" && userRaw !== null) {
    const u = userRaw as Record<string, unknown>;
    const email =
      (typeof u.email === "string" && u.email) ||
      (typeof u.mail === "string" && u.mail) ||
      fallbackEmail;
    const name = typeof u.name === "string" ? u.name : undefined;
    return { ...u, email, name } as AuthUser;
  }
  return { email: fallbackEmail };
}

/**
 * Accepts JSON or plain-text token from POST /login.
 */
export function parseLoginResponse(
  bodyText: string,
  email: string,
): LoginSuccessPayload | null {
  const trimmed = bodyText.trim();
  if (!trimmed) return null;

  try {
    const parsed = JSON.parse(trimmed) as Record<string, unknown>;
    const accessToken =
      pickString(parsed, ["accessToken", "access_token", "token", "jwt"]) ?? "";
    const refreshToken =
      pickString(parsed, ["refreshToken", "refresh_token"]) ?? "";
    if (!accessToken) return null;
    const user = pickUser(parsed, email);
    return {
      accessToken,
      refreshToken: refreshToken || accessToken,
      user,
    };
  } catch {
    return {
      accessToken: trimmed,
      refreshToken: trimmed,
      user: { email },
    };
  }
}
