import { Button as BaseButton } from "@base-ui/react/button";
import clsx from "clsx";
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";
import "./button.scss";

type BaseButtonProps = ComponentPropsWithoutRef<typeof BaseButton>;

export type ButtonVariant = "filled" | "filled-tonal" | "outlined" | "elevated" | "text";
export type ButtonSize = "sm" | "md" | "lg";

const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  filled: "ui-button--filled",
  "filled-tonal": "ui-button--filled-tonal",
  outlined: "ui-button--outlined",
  elevated: "ui-button--elevated",
  text: "ui-button--text",
};

const BUTTON_SIZES: Record<ButtonSize, string> = {
  sm: "ui-button--sm",
  md: "ui-button--md",
  lg: "ui-button--lg",
};

export interface ButtonProps extends Omit<BaseButtonProps, "className"> {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

const iconClassName = "ui-button__icon";

export const Button = forwardRef<HTMLElement, ButtonProps>(function Button(
  {
    children,
    className,
    disabled,
    leadingIcon,
    trailingIcon,
    size = "md",
    variant = "filled",
    ...props
  },
  ref,
) {
  return (
    <BaseButton
      {...props}
      ref={ref}
      disabled={disabled}
      className={clsx(
        "ui-button",
        BUTTON_VARIANTS[variant],
        BUTTON_SIZES[size],
        leadingIcon && "ui-button--with-leading-icon",
        trailingIcon && "ui-button--with-trailing-icon",
        className,
      )}
    >
      {leadingIcon ? <span className={clsx(iconClassName, `${iconClassName}--leading`)}>{leadingIcon}</span> : null}
      <span className="ui-button__label">{children}</span>
      {trailingIcon ? (
        <span className={clsx(iconClassName, `${iconClassName}--trailing`)}>{trailingIcon}</span>
      ) : null}
    </BaseButton>
  );
}) as <T extends ElementType = "button">(
  props: ButtonProps & ButtonHTMLAttributes<T>,
) => JSX.Element;
