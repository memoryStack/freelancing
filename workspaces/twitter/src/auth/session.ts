import type { AuthUser, SessionState } from "./types";

export function normalizeUser(raw: unknown): AuthUser | null {
  if (!raw || typeof raw !== "object") return null;
  return raw as AuthUser;
}

/**
 * Interprets `GET /api/auth/me`.
 * Expects a signed-in Gmail user with profile fields already populated by the backend.
 */
export function parseMeResponse(body: unknown, status: number): SessionState {
  if (status !== 200 || !body || typeof body !== "object") {
    return { kind: "anonymous" };
  }

  const { user } = body as { user?: unknown };

  if (user && typeof user === "object") {
    const normalized = normalizeUser(user);
    if (normalized) {
      return { kind: "authenticated", user: normalized };
    }
  }

  return { kind: "anonymous" };
}
