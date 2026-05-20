const DEFAULT_PATH = "/";
const DEFAULT_SAMESITE = "Lax" as const;

function escapeRegExp(name: string) {
  return name.replace(/[$()*+.?[\\\]^{|}]/g, "\\$&");
}

export function getCookie(name: string): string | undefined {
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${escapeRegExp(name)}=([^;]*)`),
  );
  return match ? decodeURIComponent(match[1]) : undefined;
}

export function setCookie(
  name: string,
  value: string,
  options?: { maxAgeSeconds?: number; path?: string },
) {
  const path = options?.path ?? DEFAULT_PATH;
  let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; Path=${path}; SameSite=${DEFAULT_SAMESITE}`;
  if (options?.maxAgeSeconds != null) {
    cookie += `; Max-Age=${options.maxAgeSeconds}`;
  }
  document.cookie = cookie;
}

export function deleteCookie(name: string, path = DEFAULT_PATH) {
  document.cookie = `${encodeURIComponent(name)}=; Path=${path}; Max-Age=0; SameSite=${DEFAULT_SAMESITE}`;
}

export const ACCESS_TOKEN_COOKIE = "access_token";
export const REFRESH_TOKEN_COOKIE = "refresh_token";
export const AUTH_USER_STORAGE_KEY = "design-system-auth-user";
