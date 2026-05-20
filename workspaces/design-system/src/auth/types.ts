export type AuthUser = {
  email?: string;
  name?: string;
  first_name?: string;
  last_name?: string;
  firstName?: string;
  lastName?: string;
  image_url?: string;
  imageUrl?: string;
  /** Extra fields from your API */
  [key: string]: unknown;
};

export type ProfilePayload = {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
  image_url?: string;
  email_verified: boolean;
};

export type ProfileRequirementField =
  | "first_name"
  | "last_name"
  | "phone_number"
  | "email"
  | "image_url";

export type ProfileRequirementsResponse = {
  required_fields: ProfileRequirementField[];
};

export type SessionState =
  | { kind: "anonymous" }
  | { kind: "needs_profile" }
  | { kind: "complete"; user: AuthUser };

export type LoginSuccessPayload = {
  accessToken: string;
  refreshToken: string;
  user: AuthUser;
};
