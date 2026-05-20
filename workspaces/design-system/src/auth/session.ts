import type { AuthUser, SessionState } from "./types";

export function normalizeUser(raw: unknown): AuthUser | null {
  if (!raw || typeof raw !== "object") return null;
  return raw as AuthUser;
}

/**
 * Interprets `GET /api/auth/me`.
 * - 200 + `{ user: null }` → session exists, profile must be completed
 * - 200 + `{ user: { ... } }` → session + profile in DB
 * - otherwise → not signed in
 */
export function parseMeResponse(body: unknown, status: number): SessionState {
  if (status !== 200 || !body || typeof body !== "object") {
    return { kind: "anonymous" };
  }

  const { user } = body as { user?: unknown };

  if (user === null) {
    return { kind: "needs_profile" };
  }

  if (user && typeof user === "object") {
    const normalized = normalizeUser(user);
    if (normalized) {
      return { kind: "complete", user: normalized };
    }
  }

  return { kind: "anonymous" };
}
