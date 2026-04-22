import { Button as BaseButton } from "@base-ui/react/button";
import clsx from "clsx";
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactElement,
  type ReactNode,
} from "react";
import "./icon-button.scss";

type BaseButtonProps = ComponentPropsWithoutRef<typeof BaseButton>;

/*
  TODO:
    https://m3.material.io/components/icon-buttons/guidelines#fc319c80-cdca-457a-bf78-eabb00016ef3
    this link has guidelines about when to use outlined and when to use filled button for all the variants during
    selected and unselected states. but to achieve this, a lot of customization on the icon markup is needed. i don't
    see it possible for now. so i am skipping it for now. right now all of my icons are outlined.
    And for material-web all of it's icons are filled always. this level of granular customization will be possible in future.
    UPDATE: the icons has to be different and each icon is supposed to have outlined and filled version. WTH was i thinking earlier.
  TODO: we just support round icons shape for now. square variant will come later.
    to support square icons, follow https://m3.material.io/components/icon-buttons/specs#1df8003e-8967-4e73-9b0f-233e20050bb1

  DONE: add touch support for small and icon-small variants for mobile.
    https://web.dev/articles/accessible-tap-targets


*/

export type IconButtonVariant = "FILLED" | "TONAL" | "OUTLINED" | "STANDARD";
export type IconButtonSize = "XSMALL" | "SMALL" | "MEDIUM" | "LARGE" | "XLARGE";
export type IconButtonWidthVariant = "NARROW" | "DEFAULT" | "WIDE";

export const ICON_BUTTON_VARIANTS: Record<IconButtonVariant, string> = {
  FILLED: "FILLED",
  TONAL: "TONAL",
  OUTLINED: "OUTLINED",
  STANDARD: "STANDARD"
};

export const ICON_BUTTON_SIZES: Record<IconButtonSize, string> = {
  XSMALL: "XSMALL",
  SMALL: "SMALL",
  MEDIUM: "MEDIUM",
  LARGE: "LARGE",
  XLARGE: "XLARGE",
};

export const ICON_BUTTON_WIDTH_VARIANTS: Record<IconButtonWidthVariant, string> = {
  NARROW: "NARROW",
  DEFAULT: "DEFAULT",
  WIDE: "WIDE",
};

export interface IconButtonProps extends Omit<BaseButtonProps, "className" | "children"> {
  className?: string;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  widthVariant?: IconButtonWidthVariant;
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
  size: {
    [ICON_BUTTON_SIZES.XSMALL]: "ui-icon-button--xsmall",
    [ICON_BUTTON_SIZES.SMALL]: "ui-icon-button--small",
    [ICON_BUTTON_SIZES.MEDIUM]: "ui-icon-button--medium",
    [ICON_BUTTON_SIZES.LARGE]: "ui-icon-button--large",
    [ICON_BUTTON_SIZES.XLARGE]: "ui-icon-button--xlarge",
  },
  width: {
    [ICON_BUTTON_WIDTH_VARIANTS.NARROW]: "narrow-width",
    [ICON_BUTTON_WIDTH_VARIANTS.DEFAULT]: "default-width",
    [ICON_BUTTON_WIDTH_VARIANTS.WIDE]: "wide-width",
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
  {
    className,
    disabled,
    icon,
    selected = false,
    variant = ICON_BUTTON_VARIANTS.FILLED,
    size = ICON_BUTTON_SIZES.SMALL,
    widthVariant = ICON_BUTTON_WIDTH_VARIANTS.DEFAULT,
    isToggle = false,
    ...props
  },
  ref,
) {

  const getMergeClassName = () => {
    const sizeClass = CLASSES.size[size];
    const widthClass = `${sizeClass}--${CLASSES.width[widthVariant]}`;

    return clsx(
      "ui-icon-button--temp",
      CLASSES.base,
      CLASSES.appearance[variant],
      sizeClass,
      widthClass,
      isToggle && CLASSES.toggle[variant][selected ? "selected" : "unselected"],
      className,
      
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
) => ReactElement;
