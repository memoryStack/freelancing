import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui/react/checkbox-group";
import { forwardRef } from "react";
import type { ComponentPropsWithRef } from "react";

/**
 * Wraps Base UI {@link https://base-ui.com/react/components/checkbox-group CheckboxGroup}:
 * shared `string[]` value for child checkboxes, optional `allValues` + parent checkbox pattern.
 * No layout or visual styles — pass `className` / `style` from the caller if needed.
 */
export type CheckboxGroupProps = ComponentPropsWithRef<typeof BaseCheckboxGroup>;

export const CHECKBOX_GROUP_SUPPORTED_PROPS = [
  "value",
  "defaultValue",
  "onValueChange",
  "allValues",
  "disabled",
  "id",
  "className",
  "style",
  "render",
  "aria-labelledby",
  "aria-describedby",
  "aria-label",
] as const;

export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(function CheckboxGroup(
  props,
  ref,
) {
  return <BaseCheckboxGroup ref={ref} {...props} />;
});
