import clsx from "clsx";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";
import "./text.scss";

export const TYPOGRAPHY = {
  DISPLAY_LARGE: "DISPLAY_LARGE",
  DISPLAY_MEDIUM: "DISPLAY_MEDIUM",
  DISPLAY_SMALL: "DISPLAY_SMALL",
  HEADLINE_LARGE: "HEADLINE_LARGE",
  HEADLINE_MEDIUM: "HEADLINE_MEDIUM",
  HEADLINE_SMALL: "HEADLINE_SMALL",
  TITLE_LARGE: "TITLE_LARGE",
  TITLE_MEDIUM: "TITLE_MEDIUM",
  TITLE_SMALL: "TITLE_SMALL",
  LABEL_LARGE: "LABEL_LARGE",
  LABEL_MEDIUM: "LABEL_MEDIUM",
  LABEL_SMALL: "LABEL_SMALL",
  BODY_LARGE: "BODY_LARGE",
  BODY_MEDIUM: "BODY_MEDIUM",
  BODY_SMALL: "BODY_SMALL",
} as const;

export type TypographyVariant = (typeof TYPOGRAPHY)[keyof typeof TYPOGRAPHY];

export const TEXT_COLORS = {
  DEFAULT: "DEFAULT",
  SUBTLE: "SUBTLE",
} as const;

export type TextColorVariant = (typeof TEXT_COLORS)[keyof typeof TEXT_COLORS];

export const TYPOGRAPHY_CLASSES: Record<TypographyVariant, string> = {
  [TYPOGRAPHY.DISPLAY_LARGE]: "display-large",
  [TYPOGRAPHY.DISPLAY_MEDIUM]: "display-medium",
  [TYPOGRAPHY.DISPLAY_SMALL]: "display-small",
  [TYPOGRAPHY.HEADLINE_LARGE]: "headline-large",
  [TYPOGRAPHY.HEADLINE_MEDIUM]: "headline-medium",
  [TYPOGRAPHY.HEADLINE_SMALL]: "headline-small",
  [TYPOGRAPHY.TITLE_LARGE]: "title-large",
  [TYPOGRAPHY.TITLE_MEDIUM]: "title-medium",
  [TYPOGRAPHY.TITLE_SMALL]: "title-small",
  [TYPOGRAPHY.LABEL_LARGE]: "label-large",
  [TYPOGRAPHY.LABEL_MEDIUM]: "label-medium",
  [TYPOGRAPHY.LABEL_SMALL]: "label-small",
  [TYPOGRAPHY.BODY_LARGE]: "body-large",
  [TYPOGRAPHY.BODY_MEDIUM]: "body-medium",
  [TYPOGRAPHY.BODY_SMALL]: "body-small",
};

type BaseProps = {
  children?: ReactNode;
  className?: string;
  variant?: TypographyVariant;
  colorVariant?: TextColorVariant;
  inline?: boolean;
  as?: ElementType;
};

export type TextProps = BaseProps &
  Omit<ComponentPropsWithoutRef<"p">, keyof BaseProps>;

function getDefaultElement(variant: TypographyVariant): ElementType {
  if (variant === TYPOGRAPHY.HEADLINE_LARGE) return "h1";
  if (variant === TYPOGRAPHY.HEADLINE_MEDIUM) return "h2";
  if (variant === TYPOGRAPHY.HEADLINE_SMALL) return "h3";
  return "p";
}

export const Text = forwardRef<HTMLElement, TextProps>(function Text(
  {
    children,
    className,
    variant = TYPOGRAPHY.BODY_MEDIUM,
    colorVariant = TEXT_COLORS.DEFAULT,
    inline = false,
    as,
    ...props
  },
  ref,
) {
  const Component = inline ? "span" : as ?? getDefaultElement(variant);

  return (
    <Component
      {...props}
      ref={ref}
      className={clsx(
        "ui-text",
        TYPOGRAPHY_CLASSES[variant],
        colorVariant === TEXT_COLORS.DEFAULT ? "ui-text--default" : "ui-text--subtle",
        className,
      )}
    >
      {children}
    </Component>
  );
});
