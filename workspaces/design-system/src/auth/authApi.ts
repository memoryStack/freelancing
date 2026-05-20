import { AUTH_API_BASE } from "./config";
import { parseMeResponse } from "./session";
import type { ProfilePayload, ProfileRequirementsResponse, SessionState } from "./types";

export type AuthMedium = "email" | "sms";

export class AuthApiError extends Error {
  constructor(
    message: string,
    readonly status?: number,
  ) {
    super(message);
    this.name = "AuthApiError";
  }
}

async function parseErrorMessage(res: Response): Promise<string> {
  try {
    const data = (await res.json()) as { message?: string; error?: string };
    if (typeof data.message === "string") return data.message;
    if (typeof data.error === "string") return data.error;
  } catch {
    /* ignore */
  }
  return res.statusText || "Request failed";
}

export async function requestOtp(params: {
  medium: AuthMedium;
  email?: string;
  phone_number?: string;
}): Promise<void> {
  const body =
    params.medium === "email"
      ? { email: params.email }
      : { phone_number: params.phone_number };

  const res = await fetch(`${AUTH_API_BASE}/api/auth/login/self-managed?medium=${params.medium}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new AuthApiError(await parseErrorMessage(res), res.status);
  }
}

export async function confirmOtp(params: {
  medium: AuthMedium;
  username: string;
  otp: string;
}): Promise<string | undefined> {
  const res = await fetch(
    `${AUTH_API_BASE}/api/auth/confirm-otp/self-managed?medium=${params.medium}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ username: params.username, otp: params.otp }),
    },
  );

  if (!res.ok) {
    throw new AuthApiError(await parseErrorMessage(res), res.status);
  }

  try {
    const data = (await res.json()) as { access_token?: string };
    return data.access_token;
  } catch {
    return undefined;
  }
}

export async function fetchSession(): Promise<SessionState> {
  const res = await fetch(`${AUTH_API_BASE}/api/auth/me`, { credentials: "include" });
  let body: unknown = null;
  try {
    body = await res.json();
  } catch {
    body = null;
  }
  return parseMeResponse(body, res.status);
}

export async function saveProfile(payload: ProfilePayload): Promise<void> {
  const res = await fetch(`${AUTH_API_BASE}/api/auth/profile`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new AuthApiError(await parseErrorMessage(res), res.status);
  }
}

export async function fetchProfileRequirements(accessToken?: string): Promise<ProfileRequirementsResponse> {

  const res = await fetch(`${AUTH_API_BASE}/api/auth/profile-requirements`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    throw new AuthApiError(await parseErrorMessage(res), res.status);
  }

  try {
    const data = (await res.json()) as ProfileRequirementsResponse;
    return {
      required_fields: Array.isArray(data.required_fields) ? data.required_fields : [],
    };
  } catch {
    return { required_fields: [] };
  }
}
