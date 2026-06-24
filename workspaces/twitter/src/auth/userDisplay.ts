import type { AuthUser } from "./types";

export function getDisplayName(user: AuthUser | null, fallback = "User"): string {
  if (!user) return fallback;
  if (user.name) return String(user.name);
  const fullName = [user.first_name ?? user.firstName, user.last_name ?? user.lastName]
    .filter(Boolean)
    .join(" ");
  if (fullName) return fullName;
  if (user.email) return String(user.email);
  return fallback;
}

export function getUserInitial(user: AuthUser | null, fallback = "User"): string {
  return getDisplayName(user, fallback).charAt(0).toUpperCase();
}

export function getUserAvatarUrl(user: AuthUser | null): string | undefined {
  if (!user) return undefined;
  const url = user.image_url ?? user.imageUrl;
  return typeof url === "string" && url.length > 0 ? url : undefined;
}

export function getUserEmail(user: AuthUser | null): string | undefined {
  if (!user?.email) return undefined;
  return String(user.email);
}
