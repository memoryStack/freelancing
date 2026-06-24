import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";
import { API_BASE_URL } from "./config";
import {
  ApiClientError,
  defaultErrorMessage,
  defaultErrorTitle,
  toApiClientError,
} from "./errors";
import { apiClientEvents } from "./events";
import { notifySnackbar } from "./notifier";
import type { ApiRequestConfig, ApiRequestOptions } from "./types";

const DEFAULT_REQUEST_OPTIONS: Required<
  Pick<ApiRequestOptions, "showError" | "showSuccess">
> = {
  showError: true,
  showSuccess: false,
};

function resolveOptions(options?: ApiRequestOptions): ApiRequestOptions {
  return { ...DEFAULT_REQUEST_OPTIONS, ...options };
}

function showErrorSnackbar(error: ApiClientError, options: ApiRequestOptions): void {
  notifySnackbar({
    title: options.errorTitle ?? defaultErrorTitle(error.status),
    description: options.errorMessage ?? error.message ?? defaultErrorMessage(error.status),
  });
}

function showSuccessSnackbar(options: ApiRequestOptions): void {
  notifySnackbar({
    title: options.successTitle ?? "Success",
    description: options.successMessage,
  });
}

function splitConfig(config?: ApiRequestConfig): {
  axiosConfig: AxiosRequestConfig;
  apiOptions?: ApiRequestOptions;
} {
  if (!config) return { axiosConfig: {} };

  const { apiOptions, ...axiosConfig } = config;
  return { axiosConfig, apiOptions };
}

// const AUTH_EVENT_SKIP_PATHS = ["/api/auth/me", "/api/auth/logout"];
const AUTH_EVENT_SKIP_PATHS = ["/api/auth/me"];

function shouldPublishSessionExpired(url: string | undefined, options: ApiRequestOptions): boolean {
  if (options.skipAuthEvent) return false;

  const path = (url ?? "").split("?")[0];
  return !AUTH_EVENT_SKIP_PATHS.some((skipPath) => path.endsWith(skipPath));
}

/**
 * Axios proxy that centralizes API calls and optional snackbar feedback.
 * Per-request `apiOptions` control whether errors/successes are surfaced automatically.
 */
export class ApiClient {
  private readonly http: AxiosInstance;

  constructor(baseURL: string = API_BASE_URL) {
    this.http = axios.create({
      baseURL,
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    });
  }

  /** Access the underlying axios instance for advanced customization. */
  get axios(): AxiosInstance {
    return this.http;
  }

  async request<T>(config: ApiRequestConfig): Promise<T> {
    const { axiosConfig, apiOptions } = splitConfig(config);
    const options = resolveOptions(apiOptions);
    const requestConfig: ApiRequestConfig = { ...axiosConfig, apiOptions: options };

    try {
      const response: AxiosResponse<T> = await this.http.request<T>(axiosConfig);

      if (options.showSuccess) {
        showSuccessSnackbar(options);
      }

      return response.data;
    } catch (error) {
      const apiError = toApiClientError(error);
      const isSessionExpired = apiError.status === 401;
      if (isSessionExpired && shouldPublishSessionExpired(axiosConfig.url, options)) {
        apiClientEvents.emit("auth:session-expired", {
          retry: () => this.request<T>(requestConfig),
        });
      } else if (options.showError) {
        showErrorSnackbar(apiError, options);
      }

      throw apiError;
    }
  }

  get<T>(url: string, config?: ApiRequestConfig): Promise<T> {
    const { axiosConfig, apiOptions } = splitConfig(config);
    return this.request<T>({ ...axiosConfig, method: "GET", url, apiOptions });
  }

  post<T>(url: string, data?: unknown, config?: ApiRequestConfig): Promise<T> {
    const { axiosConfig, apiOptions } = splitConfig(config);
    return this.request<T>({ ...axiosConfig, method: "POST", url, data, apiOptions });
  }

  put<T>(url: string, data?: unknown, config?: ApiRequestConfig): Promise<T> {
    const { axiosConfig, apiOptions } = splitConfig(config);
    return this.request<T>({ ...axiosConfig, method: "PUT", url, data, apiOptions });
  }

  patch<T>(url: string, data?: unknown, config?: ApiRequestConfig): Promise<T> {
    const { axiosConfig, apiOptions } = splitConfig(config);
    return this.request<T>({ ...axiosConfig, method: "PATCH", url, data, apiOptions });
  }

  delete<T>(url: string, config?: ApiRequestConfig): Promise<T> {
    const { axiosConfig, apiOptions } = splitConfig(config);
    return this.request<T>({ ...axiosConfig, method: "DELETE", url, apiOptions });
  }
}

export const apiClient = new ApiClient();
