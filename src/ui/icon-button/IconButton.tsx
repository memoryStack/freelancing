import { Button as BaseButton } from "@base-ui/react/button";
import clsx from "clsx";
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";
import "./icon-button.scss";

type BaseButtonProps = ComponentPropsWithoutRef<typeof BaseButton>;

export type IconButtonVariant = "filled" | "tonal" | "outlined" | "standard";

const ICON_BUTTON_VARIANTS: Record<IconButtonVariant, string> = {
  filled: "ui-icon-button--filled",
  tonal: "ui-icon-button--tonal",
  outlined: "ui-icon-button--outlined",
  standard: "ui-icon-button--standard",
};

export interface IconButtonProps extends Omit<BaseButtonProps, "className" | "children"> {
  className?: string;
  variant?: IconButtonVariant;
  icon: ReactNode;
  selected?: boolean;
  isToggle?: boolean;
}

export const IconButton = forwardRef<HTMLElement, IconButtonProps>(function IconButton(
  { className, disabled, icon, selected = false, variant = "filled", isToggle = false, ...props },
  ref,
) {

  const getToggleClass = () => {
    if (!isToggle) return "";
    return selected ? "ui-icon-button--selected" : "ui-icon-button--unselected";
  }

  return (
    <BaseButton
      {...props}
      ref={ref}
      disabled={disabled}
      aria-pressed={selected}
      className={
        clsx(
          "ui-icon-button",
          ICON_BUTTON_VARIANTS[variant],
          getToggleClass(),
          className
        )
      }
    >
      <span className="ui-icon-button__icon">{icon}</span>
    </BaseButton>
  );
}) as <T extends ElementType = "button">(
  props: IconButtonProps & ButtonHTMLAttributes<T>,
) => JSX.Element;
