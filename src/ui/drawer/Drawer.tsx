import { Drawer as BaseDrawer } from "@base-ui/react/drawer";
import clsx from "clsx";
import { ChevronLeftIcon, XIcon } from "lucide-react";
import type { ButtonVariant } from "../button/Button";
import { useMemo, useState, type ReactNode } from "react";
import { Button, Divider, IconButton, ICON_BUTTON_VARIANTS } from "..";
import "./drawer.scss";

export type DrawerVariant = "SIDE" | "BOTTOM";

export const DRAWER_VARIANTS: Record<DrawerVariant, DrawerVariant> = {
  SIDE: "SIDE",
  BOTTOM: "BOTTOM",
};

export type DrawerSideSize = "SMALL" | "MEDIUM" | "LARGE" | "FULL";
export const DRAWER_SIDE_SIZES: Record<DrawerSideSize, DrawerSideSize> = {
  SMALL: "SMALL",
  MEDIUM: "MEDIUM",
  LARGE: "LARGE",
  FULL: "FULL",
};

export type DrawerAction = {
  text: string;
  onClick: () => void;
  variant?: ButtonVariant;
};

export interface DrawerProps {
  className?: string;
  variant?: DrawerVariant;
  sideSize?: DrawerSideSize;
  trigger?: ReactNode;
  title?: ReactNode;
  children?: ReactNode;
  actions?: DrawerAction[];
  showBackButton?: boolean;
  showCloseButton?: boolean;
  showDivider?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  onClose?: () => void;
}

/*
  TODO: let's inject close button in footer on our own, make it easier to use.

*/

export function Drawer({
  className,
  variant = DRAWER_VARIANTS.SIDE,
  sideSize = DRAWER_SIDE_SIZES.MEDIUM,
  trigger,
  title,
  children,
  actions = [],
  showBackButton = variant === DRAWER_VARIANTS.SIDE,
  showCloseButton = true,
  showDivider = variant === DRAWER_VARIANTS.SIDE,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  onClose,
}: DrawerProps) {
  const isControlled = controlledOpen !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen = useMemo(
    () => (nextOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(nextOpen);
      }
      onOpenChange?.(nextOpen);
      if (!nextOpen) {
        onClose?.();
      }
    },
    [isControlled, onClose, onOpenChange],
  );

  const handleClose = () => setOpen(false);

  const resolvedActions: DrawerAction[] =
    actions.length > 0
      ? actions
      : [
          {
            text: "Close",
            variant: "outlined",
            onClick: handleClose,
          },
        ];

  return (
    <BaseDrawer.Root
      open={open}
      onOpenChange={setOpen}
      swipeDirection={variant === DRAWER_VARIANTS.SIDE ? "right" : "down"}
    >
      {trigger ? <BaseDrawer.Trigger className="ui-drawer__trigger">{trigger}</BaseDrawer.Trigger> : null}

      <BaseDrawer.Portal>
        <BaseDrawer.Backdrop className="ui-drawer__backdrop" />
        <BaseDrawer.Viewport className="ui-drawer__viewport">
          <BaseDrawer.Popup
            className={clsx(
              "ui-drawer__popup",
              variant === DRAWER_VARIANTS.SIDE ? "ui-drawer__popup--side" : "ui-drawer__popup--bottom",
              variant === DRAWER_VARIANTS.SIDE && `ui-drawer__popup--side-${sideSize.toLowerCase()}`,
              className,
            )}
          >
            <BaseDrawer.Content className="ui-drawer__content">
              {variant === DRAWER_VARIANTS.BOTTOM ? (
                <div className="ui-drawer__drag-handle-wrapper">
                  <div className="ui-drawer__drag-handle" />
                </div>
              ) : null}

              {(showBackButton || title || showCloseButton) && (
                <header className="ui-drawer__header">
                  {showBackButton ? (
                    <IconButton
                      variant={ICON_BUTTON_VARIANTS.STANDARD}
                      icon={<ChevronLeftIcon />}
                      className="ui-drawer__icon-button"
                      aria-label="Close drawer"
                      onClick={handleClose}
                    />
                  ) : null}

                  {title ? <BaseDrawer.Title className="ui-drawer__title">{title}</BaseDrawer.Title> : null}

                  {showCloseButton ? (
                    <IconButton
                      variant={ICON_BUTTON_VARIANTS.STANDARD}
                      icon={<XIcon />}
                      className="ui-drawer__icon-button"
                      aria-label="Close drawer"
                      onClick={handleClose}
                    />
                  ) : null}
                </header>
              )}

              <div className="ui-drawer__body">{children}</div>
              
              {showDivider ? <Divider /> : null}

              <div className="ui-drawer__actions">
                {resolvedActions.map((action) => (
                  <Button
                    key={action.text}
                    variant={action.variant ?? "outlined"}
                    onClick={action.onClick}
                  >
                    {action.text}
                  </Button>
                ))}
              </div>
            </BaseDrawer.Content>
          </BaseDrawer.Popup>
        </BaseDrawer.Viewport>
      </BaseDrawer.Portal>
    </BaseDrawer.Root>
  );
}
