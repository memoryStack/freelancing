import { Popover as BasePopover } from "@base-ui/react/popover";
import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import clsx from "clsx";
import isTouchDevice from "is-touch-device";
import { isValidElement, useMemo, type ComponentProps, type ReactNode } from "react";
import type { ButtonVariant } from "../button";
import { Button } from "../button";
import "./tooltip.scss";

export type TooltipVariant = "PLAIN" | "RICH";

export const TOOLTIP_VARIANTS: Record<TooltipVariant, TooltipVariant> = {
  PLAIN: "PLAIN",
  RICH: "RICH",
};

export type TooltipAction = {
  text: string;
  onClick: () => void;
  variant?: ButtonVariant;
};

export interface TooltipProps {
  className?: string;
  trigger: ReactNode;
  variant?: TooltipVariant;
  behavior?: "auto" | "tooltip" | "popover";
  content: ReactNode | string;
  subhead?: ReactNode;
  action?: TooltipAction;
  showArrow?: boolean;
  side?: "top" | "right" | "bottom" | "left";
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

function TooltipContent({
  variant,
  content,
  subhead,
  action,
}: Pick<TooltipProps, "variant" | "content" | "subhead" | "action">) {
  if (variant === TOOLTIP_VARIANTS.PLAIN) {
    return <p className="ui-tooltip__plain-text">{content}</p>;
  }

  return (
    <div className="ui-tooltip__rich-content">
      {subhead ? <p className="ui-tooltip__rich-subhead">{subhead}</p> : null}
      <p className="ui-tooltip__rich-supporting-text">{content}</p>
      {action ? (
        <div className="ui-tooltip__rich-action">
          <Button variant={action.variant ?? "text"} onClick={action.onClick}>
            {action.text}
          </Button>
        </div>
      ) : null}
    </div>
  );
}

function ArrowSvg(props: ComponentProps<"svg">) {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className="ui-tooltip__arrow-fill"
      />
      <path
        d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
        className="ui-tooltip__arrow-outer-stroke"
      />
      <path
        d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
        className="ui-tooltip__arrow-inner-stroke"
      />
    </svg>
  );
}

export function Tooltip({
  className,
  trigger,
  variant = TOOLTIP_VARIANTS.PLAIN,
  behavior = "auto",
  content,
  subhead,
  action,
  showArrow = true,
  side = "top",
  open,
  defaultOpen,
  onOpenChange,
}: TooltipProps) {
  const hasHoverPointer = !isTouchDevice();
  const useTooltip =
    behavior === "tooltip" || (behavior === "auto" && hasHoverPointer);
  const shouldRenderArrow = showArrow && variant !== TOOLTIP_VARIANTS.RICH;

  const triggerProps = useMemo(() => {
    if (isValidElement(trigger)) {
      return { render: trigger };
    }
    return { children: trigger };
  }, [trigger]);

  const popupClassName = clsx(
    "ui-tooltip__popup",
    variant === TOOLTIP_VARIANTS.PLAIN ? "ui-tooltip__popup--plain" : "ui-tooltip__popup--rich",
    className,
  );

  if (useTooltip) {
    // TODO: these delays doesn't seem to be working
    return (
      <BaseTooltip.Provider openDelay={100} closeDelay={100}>
        <BaseTooltip.Root open={open} defaultOpen={defaultOpen} onOpenChange={(nextOpen) => onOpenChange?.(nextOpen)}>
          <BaseTooltip.Trigger {...triggerProps} />
          <BaseTooltip.Portal>
            <BaseTooltip.Positioner className="ui-tooltip__positioner" side={side} sideOffset={8}>
              <BaseTooltip.Popup className={popupClassName}>
                <TooltipContent
                  variant={variant}
                  content={content}
                  subhead={subhead}
                  action={action}
                />
                {shouldRenderArrow ? (
                  <BaseTooltip.Arrow className="ui-tooltip__arrow">
                    <ArrowSvg />
                  </BaseTooltip.Arrow>
                ) : null}
              </BaseTooltip.Popup>
            </BaseTooltip.Positioner>
          </BaseTooltip.Portal>
        </BaseTooltip.Root>
      </BaseTooltip.Provider>
    );
  }

  return (
    <BasePopover.Root open={open} defaultOpen={defaultOpen} onOpenChange={(nextOpen) => onOpenChange?.(nextOpen)}>
      <BasePopover.Trigger {...triggerProps} openOnHover={true} />
      <BasePopover.Portal>
        <BasePopover.Positioner className="ui-tooltip__positioner" side={side} sideOffset={8}>
          <BasePopover.Popup className={popupClassName}>
            <TooltipContent
              variant={variant}
              content={content}
              subhead={subhead}
              action={action}
            />
            {shouldRenderArrow ? (
              <BasePopover.Arrow className="ui-tooltip__arrow">
                <ArrowSvg />
              </BasePopover.Arrow>
            ) : null}
          </BasePopover.Popup>
        </BasePopover.Positioner>
      </BasePopover.Portal>
    </BasePopover.Root>
  );
}
