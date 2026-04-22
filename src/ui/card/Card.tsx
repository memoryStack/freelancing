import clsx from "clsx";
import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import "./card.scss";

export type CardVariant = "ELEVATED" | "FILLED" | "OUTLINED";

export const CARD_VARIANTS: Record<CardVariant, CardVariant> = {
  ELEVATED: "ELEVATED",
  FILLED: "FILLED",
  OUTLINED: "OUTLINED",
};

/*
  TODO: the look and feel doesn't match what's on material-design website. WTF?
*/

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  className?: string;
  children?: ReactNode;
  variant?: CardVariant;
  disabled?: boolean;
}

const CLASSES = {
  base: "ui-card",
  variant: {
    [CARD_VARIANTS.ELEVATED]: "ui-card--elevated",
    [CARD_VARIANTS.FILLED]: "ui-card--filled",
    [CARD_VARIANTS.OUTLINED]: "ui-card--outlined",
  },
};

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, children, variant = CARD_VARIANTS.ELEVATED, disabled = false, tabIndex, ...props },
  ref,
) {
  return (
    <div
      {...props}
      ref={ref}
      tabIndex={disabled ? -1 : (tabIndex ?? 0)}
      aria-disabled={disabled}
      className={clsx(CLASSES.base, CLASSES.variant[variant], className)}
    >
      {children}
    </div>
  );
});
