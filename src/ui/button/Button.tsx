import { Button as BaseButton } from "@base-ui/react/button";
import clsx from "clsx";
import { Loader } from "../loader";
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactElement,
  type ReactNode,
} from "react";
import "./button.scss";

type BaseButtonProps = ComponentPropsWithoutRef<typeof BaseButton>;

export type ButtonVariant = "filled" | "filled-tonal" | "outlined" | "elevated" | "text";
export type ButtonSize = "sm" | "md" | "lg";

export const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  filled: "ui-button--filled",
  "filled-tonal": "ui-button--filled-tonal",
  outlined: "ui-button--outlined",
  elevated: "ui-button--elevated",
  text: "ui-button--text",
};

export const BUTTON_SIZES: Record<ButtonSize, string> = {
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
  loading?: boolean;
}

const iconClassName = "ui-button__icon";

export const Button = forwardRef<HTMLElement, ButtonProps>(function Button(
  {
    children,
    className,
    disabled,
    leadingIcon,
    loading = false,
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
      aria-busy={loading || undefined}
      data-loading={loading ? "" : undefined}
      className={clsx(
        "ui-button",
        BUTTON_VARIANTS[variant],
        BUTTON_SIZES[size],
        leadingIcon && "ui-button--with-leading-icon",
        trailingIcon && "ui-button--with-trailing-icon",
        loading && "ui-button--loading",
        className,
      )}
    >
      {loading ? (
        <span className="ui-button__loader" role="status" aria-live="polite" aria-label="Loading">
          <Loader className="ui-button__loader-spinner" />
        </span>
      ) : (
        <>
          {leadingIcon ? <span className={clsx(iconClassName, `${iconClassName}--leading`)}>{leadingIcon}</span> : null}
          <span className="ui-button__label">{children}</span>
          {trailingIcon ? (
            <span className={clsx(iconClassName, `${iconClassName}--trailing`)}>{trailingIcon}</span>
          ) : null}
        </>
      )}
    </BaseButton>
  );
}) as <T extends ElementType = "button">(
  props: ButtonProps & ButtonHTMLAttributes<T>,
) => ReactElement;
