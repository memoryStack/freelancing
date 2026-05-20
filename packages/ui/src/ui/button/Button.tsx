import { Button as BaseButton } from "@base-ui/react/button";
import clsx from "clsx";
import { Loader } from "../loader";
import {
  type AnchorHTMLAttributes,
  forwardRef,
  type ButtonHTMLAttributes,
  type ComponentPropsWithoutRef,
  type ElementType,
  type MouseEvent,
  type Ref,
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
  sm: "sm",
  md: "md",
  lg: "lg",
};

export interface ButtonProps extends Omit<BaseButtonProps, "className"> {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  loading?: boolean;
  href?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  rel?: AnchorHTMLAttributes<HTMLAnchorElement>["rel"];
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
  const { href, onClick, rel, target, ...restProps } = props;
  const isLink = Boolean(href);
  const isInactive = Boolean(disabled || loading);
  const computedRel = target === "_blank" ? rel ?? "noopener noreferrer" : rel;
  const classNames = clsx(
    "ui-button",
    BUTTON_VARIANTS[variant],
    `ui-button--${size}`,
    leadingIcon && "ui-button--with-leading-icon",
    trailingIcon && "ui-button--with-trailing-icon",
    loading && "ui-button--loading",
    className,
  );

  const content = loading ? (
    <span className="ui-button__loader" role="status" aria-live="polite" aria-label="Loading">
      <Loader className="ui-button__loader-spinner" />
    </span>
  ) : (
    <>
      {leadingIcon ? <span className={clsx(iconClassName, `${iconClassName}--leading`)}>{leadingIcon}</span> : null}
      <span className="ui-button__label">{children}</span>
      {trailingIcon ? <span className={clsx(iconClassName, `${iconClassName}--trailing`)}>{trailingIcon}</span> : null}
    </>
  );

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (isInactive) {
      event.preventDefault();
      return;
    }

    (onClick as unknown as AnchorHTMLAttributes<HTMLAnchorElement>["onClick"] | undefined)?.(event);
  };

  if (isLink) {
    return (
      <a
        {...(restProps as unknown as AnchorHTMLAttributes<HTMLAnchorElement>)}
        ref={ref as Ref<HTMLAnchorElement>}
        href={isInactive ? undefined : href}
        target={target}
        rel={computedRel}
        aria-disabled={isInactive || undefined}
        aria-busy={loading || undefined}
        data-loading={loading ? "" : undefined}
        tabIndex={isInactive ? -1 : restProps.tabIndex}
        className={classNames}
        onClick={handleLinkClick}
      >
        {content}
      </a>
    );
  }

  return (
    <BaseButton
      {...restProps}
      ref={ref}
      onClick={onClick}
      disabled={disabled}
      aria-busy={loading || undefined}
      data-loading={loading ? "" : undefined}
      className={classNames}
    >
      {content}
    </BaseButton>
  );
}) as <T extends ElementType = "button">(
  props: ButtonProps & ButtonHTMLAttributes<T>,
) => ReactElement;
