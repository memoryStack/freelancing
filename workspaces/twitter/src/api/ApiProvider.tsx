import { useSnackbar } from "@freelancing/ui";
import { useEffect, type ReactNode } from "react";
import { registerSnackbarNotifier, unregisterSnackbarNotifier } from "./notifier";

export function ApiProvider({ children }: { children: ReactNode }) {
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    registerSnackbarNotifier(showSnackbar);
    return unregisterSnackbarNotifier;
  }, [showSnackbar]);

  return children;
}
