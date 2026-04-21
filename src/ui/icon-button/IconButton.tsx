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

export type IconButtonVariant = "FILLED" | "TONAL" | "OUTLINED" | "STANDARD";

export const ICON_BUTTON_VARIANTS: Record<IconButtonVariant, string> = {
  FILLED: "FILLED",
  TONAL: "TONAL",
  OUTLINED: "OUTLINED",
  STANDARD: "STANDARD"
};

export interface IconButtonProps extends Omit<BaseButtonProps, "className" | "children"> {
  className?: string;
  variant?: IconButtonVariant;
  icon: ReactNode;
  selected?: boolean;
  isToggle?: boolean;
}

const CLASSES = {
  base: "ui-icon-button",
  appearance: {
    [ICON_BUTTON_VARIANTS.FILLED]: "ui-icon-button--filled",
    [ICON_BUTTON_VARIANTS.TONAL]: "ui-icon-button--tonal",
    [ICON_BUTTON_VARIANTS.OUTLINED]: "ui-icon-button--outlined",
    [ICON_BUTTON_VARIANTS.STANDARD]: "ui-icon-button--standard",
  },
  toggle: {
    [ICON_BUTTON_VARIANTS.FILLED]: {
      selected: "ui-icon-button--filled--selected",
      unselected: "ui-icon-button--filled--unselected",
    },
    [ICON_BUTTON_VARIANTS.TONAL]: {
      selected: "ui-icon-button--tonal--selected",
      unselected: "ui-icon-button--tonal--unselected",
    },
    [ICON_BUTTON_VARIANTS.OUTLINED]: {
      selected: "ui-icon-button--outlined--selected",
      unselected: "ui-icon-button--outlined--unselected",
    },
    [ICON_BUTTON_VARIANTS.STANDARD]: {
      selected: "ui-icon-button--standard--selected",
      unselected: "ui-icon-button--standard--unselected",
    },
  }
}

export const IconButton = forwardRef<HTMLElement, IconButtonProps>(function IconButton(
  { className, disabled, icon, selected = false, variant = ICON_BUTTON_VARIANTS.FILLED, isToggle = false, ...props },
  ref,
) {

  const getMergeClassName = () => {
    return clsx(
      CLASSES.base,
      CLASSES.appearance[variant],
      isToggle && CLASSES.toggle[variant][selected ? "selected" : "unselected"],
      className
    )
  }

  return (  
    <BaseButton
      {...props}
      ref={ref}
      disabled={disabled}
      aria-pressed={selected}
      className={ getMergeClassName()}
    >
      <span className="ui-icon-button__icon">{icon}</span>
    </BaseButton>
  );
}) as <T extends ElementType = "button">(
  props: IconButtonProps & ButtonHTMLAttributes<T>,
) => JSX.Element;
