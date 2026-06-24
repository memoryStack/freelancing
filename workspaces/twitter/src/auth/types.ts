export type AuthUser = {
  email?: string;
  name?: string;
  first_name?: string;
  last_name?: string;
  firstName?: string;
  lastName?: string;
  image_url?: string;
  imageUrl?: string;
  [key: string]: unknown;
};

export type SessionState =
  | { kind: "anonymous" }
  | { kind: "authenticated"; user: AuthUser };
