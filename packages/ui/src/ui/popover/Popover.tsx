import { Tooltip, type TooltipProps } from "../tooltip";

export interface PopoverProps
  extends Omit<TooltipProps, "behavior"> {}

export function Popover(props: PopoverProps) {
  return <Tooltip {...props} behavior="popover" />;
}
