/** Base URL for the backend API (no trailing slash). */
export const API_BASE_URL =
  import.meta.env.VITE_API_URL?.replace(/\/$/, "") ?? "http://localhost:3000";
