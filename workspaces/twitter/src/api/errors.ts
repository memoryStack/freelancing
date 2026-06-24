import axios from "axios";
import type { ApiErrorBody } from "./types";

export class ApiClientError extends Error {
  readonly status?: number;
  readonly code?: string;
  readonly errors?: Record<string, string[]>;
  readonly body?: ApiErrorBody;

  constructor(message: string, init?: Partial<ApiErrorBody> & { status?: number }) {
    super(message);
    this.name = "ApiClientError";
    this.status = init?.status;
    this.code = init?.code;
    this.errors = init?.errors;
    this.body = init?.message
      ? { message: init.message, code: init?.code, errors: init?.errors }
      : undefined;
  }
}

function isApiErrorBody(value: unknown): value is ApiErrorBody {
  return (
    typeof value === "object" &&
    value !== null &&
    "message" in value &&
    typeof (value as ApiErrorBody).message === "string"
  );
}

export function parseApiErrorBody(data: unknown): ApiErrorBody | undefined {
  if (isApiErrorBody(data)) return data;

  if (typeof data === "object" && data !== null) {
    const record = data as Record<string, unknown>;
    if (typeof record.error === "string") {
      return { message: record.error };
    }
  }

  return undefined;
}

export function defaultErrorTitle(status?: number): string {
  if (status === undefined) return "Network error";
  if (status >= 500) return "Server error";
  if (status === 401) return "Unauthorized";
  if (status === 403) return "Forbidden";
  if (status === 404) return "Not found";
  if (status === 422) return "Validation error";
  if (status >= 400) return "Request failed";
  if (status >= 300) return "Unexpected response";
  return "Something went wrong";
}

export function defaultErrorMessage(status?: number): string {
  if (status === undefined) {
    return "Unable to reach the server. Check your connection and try again.";
  }
  if (status >= 500) {
    return "The server encountered an error. Please try again later.";
  }
  if (status === 401) return "Please sign in to continue.";
  if (status === 403) return "You do not have permission to perform this action.";
  if (status === 404) return "The requested resource was not found.";
  if (status === 422) return "Please check your input and try again.";
  if (status >= 400) return "The request could not be completed.";
  if (status >= 300) return "The server returned an unexpected redirect.";
  return "An unexpected error occurred.";
}

export function toApiClientError(error: unknown): ApiClientError {
  if (error instanceof ApiClientError) return error;

  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    const body = parseApiErrorBody(error.response?.data);
    const message = body?.message ?? defaultErrorMessage(status);

    return new ApiClientError(message, {
      status,
      code: body?.code,
      errors: body?.errors,
      message,
    });
  }

  if (error instanceof Error) {
    return new ApiClientError(error.message);
  }

  return new ApiClientError("An unexpected error occurred.");
}
