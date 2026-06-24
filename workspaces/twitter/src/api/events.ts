/**
 * Typed observer bus for API client events.
 * ApiClient publishes; app layers (e.g. AuthProvider) subscribe.
 */
export type SessionExpiredEvent = {
  /** Re-run the request that failed after the user signs in again. */
  retry: () => Promise<unknown>;
};

export type ApiClientEventMap = {
  "auth:session-expired": SessionExpiredEvent;
};

export type ApiClientEventName = keyof ApiClientEventMap;

type ApiClientEventListener<K extends ApiClientEventName> = (
  payload: ApiClientEventMap[K],
) => void;

class ApiClientEvents {
  private readonly listeners = new Map<ApiClientEventName, Set<ApiClientEventListener<ApiClientEventName>>>();

  on<K extends ApiClientEventName>(event: K, listener: ApiClientEventListener<K>): () => void {
    const bucket = this.listeners.get(event) ?? new Set<ApiClientEventListener<ApiClientEventName>>();
    bucket.add(listener as ApiClientEventListener<ApiClientEventName>);
    this.listeners.set(event, bucket);

    return () => {
      bucket.delete(listener as ApiClientEventListener<ApiClientEventName>);
    };
  }

  emit<K extends ApiClientEventName>(event: K, payload: ApiClientEventMap[K]): void {
    const bucket = this.listeners.get(event);
    if (!bucket) return;

    for (const listener of bucket) {
      listener(payload);
    }
  }
}

export const apiClientEvents = new ApiClientEvents();
