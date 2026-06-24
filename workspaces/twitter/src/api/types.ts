import type { AxiosRequestConfig } from "axios";

/**
 * Standard error body returned by the backend.
 * All API error responses (4xx, 5xx) should follow this contract.
 */
export interface ApiErrorBody {
  message: string;
  code?: string;
  errors?: Record<string, string[]>;
}

export type ApiRequestOptions = {
  /** Show an error snackbar when the request fails. Default: true */
  showError?: boolean;
  /** Show a success snackbar when the request succeeds. Default: false */
  showSuccess?: boolean;
  /** Snackbar title on error. Falls back to a status-based default. */
  errorTitle?: string;
  /** Snackbar description on error. Falls back to the API error message. */
  errorMessage?: string;
  /** Snackbar title on success. Default: "Success" */
  successTitle?: string;
  /** Snackbar description on success. */
  successMessage?: string;
  /** Skip publishing auth events (e.g. session check endpoints). Default: false */
  skipAuthEvent?: boolean;
};

export type ApiRequestConfig = AxiosRequestConfig & {
  apiOptions?: ApiRequestOptions;
};
