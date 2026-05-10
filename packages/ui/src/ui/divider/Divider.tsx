import clsx from "clsx";
import type { CSSProperties, HTMLAttributes } from "react";
import "./divider.scss";

export type DividerOrientation = "horizontal" | "vertical";

export interface DividerProps extends Omit<HTMLAttributes<HTMLHRElement>, "color"> {
  className?: string;
  orientation?: DividerOrientation;
  thickness?: string;
  length?: string;
  color?: string;
}

export const DIVIDER_ORIENTATIONS: Record<Uppercase<DividerOrientation>, DividerOrientation> = {
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical",
};

export type DividerStrength = "light" | "strong";
export const DIVIDER_STRENGTHS: Record<Uppercase<DividerStrength>, DividerStrength> = {
  LIGHT: "light",
  STRONG: "strong",
};

export function Divider({
  className,
  orientation = DIVIDER_ORIENTATIONS.HORIZONTAL,
  thickness,
  length,
  color,
  strength = DIVIDER_STRENGTHS.LIGHT,
  style,
  ...props
}: DividerProps) {
  const dividerStyle = {
    ...(thickness ? { "--ui-divider-thickness": thickness } : null),
    ...(length ? { "--ui-divider-length": length } : null),
    ...(color ? { "--ui-divider-color": color } : null),
    ...style,
  } as CSSProperties;

  return (
    <hr
      {...props}
      className={clsx(
        "ui-divider",
        orientation === DIVIDER_ORIENTATIONS.VERTICAL && "ui-divider--vertical",
        strength === DIVIDER_STRENGTHS.STRONG && "ui-divider--strong",
        className,
      )}
      style={dividerStyle}
      role="separator"
      aria-orientation={orientation}
    />
  );
}
