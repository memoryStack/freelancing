import { Toast } from "@base-ui/react/toast";
import clsx from "clsx";
import { XIcon } from "lucide-react";
import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import {
  ICON_BUTTON_SIZES,
  ICON_BUTTON_VARIANTS,
  IconButton,
} from "../icon-button";
import { Text, TYPOGRAPHY } from "../text";
import "./snackbar.scss";

export type SnackbarData = {
  showCloseIcon?: boolean;
  closeOnActionClick?: boolean;
};

export type SnackbarOptions = {
  title?: ReactNode;
  description?: ReactNode;
  timeout?: number;
  onClose?: () => void;
  onRemove?: () => void;
  actionProps?: Omit<
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    "ref"
  >;
  data?: SnackbarData;
};

export function SnackbarProvider({ children }: { children: ReactNode }) {
  return (
    <Toast.Provider>
      {children}
      <Toast.Portal>
        <Toast.Viewport className="ui-snackbar__viewport">
          <SnackbarList />
        </Toast.Viewport>
      </Toast.Portal>
    </Toast.Provider>
  );
}

function SnackbarList() {
  const { toasts } = Toast.useToastManager<SnackbarData>();

  return toasts.map((toast) => {
    const hasTitle = Boolean(toast.title);
    const hasAction = Boolean(toast.actionProps);
    const showCloseIcon = toast.data?.showCloseIcon !== false;

    return (
      <Toast.Root key={toast.id} toast={toast} className="ui-snackbar">
        <Toast.Content
          className={clsx(
            "ui-snackbar__content",
            hasTitle && "ui-snackbar__content--with-title",
            hasAction && "ui-snackbar__content--with-action",
            showCloseIcon && "ui-snackbar__content--with-close",
          )}
        >
          <div className="ui-snackbar__text-wrap">
            {hasTitle ? (
              <Toast.Title
                render={
                  <Text
                    variant={TYPOGRAPHY.TITLE_MEDIUM}
                    colorVariant="DEFAULT"
                    className="ui-snackbar__title"
                  />
                }
              />
            ) : null}
            <Toast.Description
              render={
                <Text
                  variant={TYPOGRAPHY.BODY_MEDIUM}
                  colorVariant="DEFAULT"
                  className="ui-snackbar__description"
                />
              }
            />
          </div>

          {hasAction ? (
            <Toast.Action
              {...toast.actionProps}
              className={clsx("ui-snackbar__action", toast.actionProps?.className)}
            />
          ) : null}

          {showCloseIcon ? (
            <Toast.Close
              aria-label="Close snackbar"
              render={
                <IconButton
                  variant={ICON_BUTTON_VARIANTS.STANDARD}
                  size={ICON_BUTTON_SIZES.XSMALL}
                  icon={<XIcon />}
                  className="ui-snackbar__close"
                />
              }
            />
          ) : null}
        </Toast.Content>
      </Toast.Root>
    );
  });
}

export function useSnackbar() {
  const toastManager = Toast.useToastManager<SnackbarData>();

  const showSnackbar = (options: SnackbarOptions) => {
    const closeManuallyOnActionClick = options.data?.closeOnActionClick === false;
    const userActionOnClick = options.actionProps?.onClick;

    let toastId = "";

    toastId = toastManager.add({
      title: options.title,
      description: options.description,
      timeout: options.timeout,
      onClose: options.onClose,
      onRemove: options.onRemove,
      actionProps: options.actionProps
        ? {
            ...options.actionProps,
            onClick: (event) => {
              userActionOnClick?.(event);
              if (!closeManuallyOnActionClick) {
                toastManager.close(toastId);
              }
            },
          }
        : undefined,
      data: options.data,
    });

    return toastId;
  };

  return {
    ...toastManager,
    showSnackbar,
  };
}
