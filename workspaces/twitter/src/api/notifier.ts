import type { SnackbarOptions } from "@freelancing/ui";

type SnackbarNotifier = (options: SnackbarOptions) => string;

let notifier: SnackbarNotifier | null = null;

export function registerSnackbarNotifier(next: SnackbarNotifier): void {
  notifier = next;
}

export function unregisterSnackbarNotifier(): void {
  notifier = null;
}

export function notifySnackbar(options: SnackbarOptions): void {
  notifier?.(options);
}
