import clsx from "clsx";
import { forwardRef, type CSSProperties, type HTMLAttributes, type ReactNode } from "react";
import "./icon.scss";

export type IconVariant = "OUTLINED" | "OUTLINED_WITH_BACKGROUND" | "FILLED" | "FILLED_WITH_BACKGROUND";
export type IconShape = "ROUND" | "SQUARE";
export type IconSize = "XSMALL" | "SMALL" | "MEDIUM" | "LARGE" | "XLARGE";
export type IconColorScheme = "PRIMARY" | "SECONDARY" | "ERROR" | "TERTIARY" | "NEUTRAL";

export const ICON_VARIANTS: Record<IconVariant, IconVariant> = {
  OUTLINED: "OUTLINED",
  OUTLINED_WITH_BACKGROUND: "OUTLINED_WITH_BACKGROUND",
  FILLED: "FILLED",
  FILLED_WITH_BACKGROUND: "FILLED_WITH_BACKGROUND",
};

export const ICON_SHAPES: Record<IconShape, IconShape> = {
  ROUND: "ROUND",
  SQUARE: "SQUARE",
};

export const ICON_SIZES: Record<IconSize, IconSize> = {
  XSMALL: "XSMALL",
  SMALL: "SMALL",
  MEDIUM: "MEDIUM",
  LARGE: "LARGE",
  XLARGE: "XLARGE",
};

export const ICON_COLOR_SCHEMES: Record<IconColorScheme, IconColorScheme> = {
  PRIMARY: "PRIMARY",
  SECONDARY: "SECONDARY",
  ERROR: "ERROR",
  TERTIARY: "TERTIARY",
  NEUTRAL: "NEUTRAL",
};

export interface IconProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  className?: string;
  icon: ReactNode;
  variant?: IconVariant;
  colorScheme?: IconColorScheme;
  size?: IconSize;
  iconSize?: number | string;
  containerSize?: number | string;
  shape?: IconShape;
}

const CLASSES = {
  base: "ui-icon",
  variant: {
    [ICON_VARIANTS.OUTLINED]: "ui-icon--outlined",
    [ICON_VARIANTS.OUTLINED_WITH_BACKGROUND]: "ui-icon--outlined-with-background",
    [ICON_VARIANTS.FILLED]: "ui-icon--filled",
    [ICON_VARIANTS.FILLED_WITH_BACKGROUND]: "ui-icon--filled-with-background",
  },
  colorScheme: {
    [ICON_COLOR_SCHEMES.PRIMARY]: "ui-icon--primary",
    [ICON_COLOR_SCHEMES.SECONDARY]: "ui-icon--secondary",
    [ICON_COLOR_SCHEMES.ERROR]: "ui-icon--error",
    [ICON_COLOR_SCHEMES.TERTIARY]: "ui-icon--tertiary",
    [ICON_COLOR_SCHEMES.NEUTRAL]: "ui-icon--neutral",
  },
  size: {
    [ICON_SIZES.XSMALL]: "ui-icon--xsmall",
    [ICON_SIZES.SMALL]: "ui-icon--small",
    [ICON_SIZES.MEDIUM]: "ui-icon--medium",
    [ICON_SIZES.LARGE]: "ui-icon--large",
    [ICON_SIZES.XLARGE]: "ui-icon--xlarge",
  },
  shape: {
    [ICON_SHAPES.ROUND]: "ui-icon--round",
    [ICON_SHAPES.SQUARE]: "ui-icon--square",
  },
};

export const Icon = forwardRef<HTMLSpanElement, IconProps>(function Icon(
  {
    className,
    icon,
    variant = ICON_VARIANTS.OUTLINED,
    colorScheme = ICON_COLOR_SCHEMES.PRIMARY,
    size = ICON_SIZES.SMALL,
    iconSize,
    containerSize,
    shape = ICON_SHAPES.ROUND,
    style,
    ...props
  },
  ref,
) {
  const resolvedIconSize = typeof iconSize === "number" ? `${iconSize}px` : iconSize;
  const resolvedContainerSize = typeof containerSize === "number" ? `${containerSize}px` : containerSize;
  const mergedStyle = {
    ...style,
    ...(resolvedIconSize ? { "--_icon-size": resolvedIconSize } : {}),
    ...(resolvedContainerSize ? { "--_container-size": resolvedContainerSize } : {}),
  } as CSSProperties;

  return (
    <span
      {...props}
      ref={ref}
      style={mergedStyle}
      className={clsx(
        CLASSES.base,
        CLASSES.variant[variant],
        CLASSES.colorScheme[colorScheme],
        CLASSES.size[size],
        CLASSES.shape[shape],
        className,
      )}
    >
      <span className="ui-icon__glyph">{icon}</span>
    </span>
  );
});
