import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import clsx from "clsx";
import { XIcon } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import { Button } from "../button";
import { Divider } from "../divider";
import { IconButton, ICON_BUTTON_SIZES, ICON_BUTTON_VARIANTS } from "../icon-button";
import { Text, TYPOGRAPHY } from "../text";
import "./dialog.scss";

export type DialogAction = {
  text: string;
  onClick?: () => void;
};

export interface DialogProps {
  className?: string;
  trigger?: ReactNode;
  icon?: ReactNode;
  title?: ReactNode;
  description: ReactNode;
  showDivider?: boolean;
  showCloseIcon?: boolean;
  cancelLabel?: string;
  onCancel?: () => void;
  primaryAction?: DialogAction;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Dialog({
  className,
  trigger,
  icon,
  title,
  description,
  showDivider = true,
  showCloseIcon = false,
  cancelLabel = "Cancel",
  onCancel,
  primaryAction,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
}: DialogProps) {
  const isControlled = controlledOpen !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen = useMemo(
    () => (nextOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(nextOpen);
      }
      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange],
  );

  const handleCancel = () => {
    onCancel?.();
    setOpen(false);
  };

  const handlePrimaryAction = () => {
    primaryAction?.onClick?.();
    setOpen(false);
  };

  return (
    <BaseDialog.Root open={open} defaultOpen={defaultOpen} onOpenChange={(nextOpen) => setOpen(nextOpen)}>
      {trigger ? <BaseDialog.Trigger className="ui-dialog__trigger">{trigger}</BaseDialog.Trigger> : null}

      <BaseDialog.Portal>
        <BaseDialog.Backdrop className="ui-dialog__backdrop" />
        <BaseDialog.Popup className={clsx("ui-dialog__popup", className)}>
          {showCloseIcon ? (
            <BaseDialog.Close
              aria-label="Close dialog"
              render={
                <IconButton
                  variant={ICON_BUTTON_VARIANTS.STANDARD}
                  size={ICON_BUTTON_SIZES.XSMALL}
                  icon={<XIcon />}
                  className="ui-dialog__close"
                />
              }
            />
          ) : null}

          {icon ? <div className="ui-dialog__icon">{icon}</div> : null}

          {title ? (
            <BaseDialog.Title
              render={
                <Text
                  variant={TYPOGRAPHY.HEADLINE_SMALL}
                  colorVariant="DEFAULT"
                  className={clsx("ui-dialog__title", icon ? "ui-dialog__title--centered" : "ui-dialog__title--start")}
                />
              }
            >
              {title}
            </BaseDialog.Title>
          ) : null}

          <BaseDialog.Description
            render={
              <Text
                variant={TYPOGRAPHY.BODY_MEDIUM}
                colorVariant="SUBTLE"
                className={clsx(
                  "ui-dialog__description",
                  icon ? "ui-dialog__description--centered" : "ui-dialog__description--start",
                )}
              />
            }
          >
            {description}
          </BaseDialog.Description>

          {showDivider ? <Divider className="ui-dialog__divider" /> : null}

          <div className="ui-dialog__actions">
            <BaseDialog.Close
              render={
                <Button variant="text" className="label-large" onClick={handleCancel}>
                  {cancelLabel}
                </Button>
              }
            />
            {primaryAction ? (
              <Button variant="text" className="label-large" onClick={handlePrimaryAction}>
                {primaryAction.text}
              </Button>
            ) : null}
          </div>
        </BaseDialog.Popup>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
}
