import { apiClient } from "../api";
import { ApiClientError } from "../api/errors";
import { parseMeResponse } from "./session";
import type { SessionState } from "./types";

/** Auth session checks surface errors via route guards, not snackbars. */
const silent = { apiOptions: { showError: true } } as const;

export { ApiClientError as AuthApiError };

export async function fetchSession(): Promise<SessionState> {
  try {
    const body = await apiClient.get<unknown>("/api/auth/me", silent);
    return parseMeResponse(body, 200);
  } catch (error) {
    const status = error instanceof ApiClientError ? error.status : 0;
    return parseMeResponse(null, status ?? 0);
  }
}

export async function logout(): Promise<{ logout_url?: string } | undefined> {
  try {
    return await apiClient.post<{ logout_url?: string }>("/api/auth/logout", undefined, silent);
  } catch {
    return undefined;
  }
}
