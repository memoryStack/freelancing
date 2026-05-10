import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui/react/checkbox-group";
import clsx from "clsx";
import { forwardRef } from "react";
import type { ComponentPropsWithRef, ReactNode } from "react";
import { Text, TYPOGRAPHY } from "../text";
import "./checkbox-group.scss";

/**
 * Wraps Base UI {@link https://base-ui.com/react/components/checkbox-group CheckboxGroup}:
 * shared `string[]` value for child checkboxes, optional `allValues` + parent checkbox pattern.
 * No layout or visual styles — pass `className` / `style` from the caller if needed.
 */
type BaseCheckboxGroupProps = ComponentPropsWithRef<typeof BaseCheckboxGroup>;

export interface CheckboxGroupProps extends BaseCheckboxGroupProps {
  label?: ReactNode;
  required?: boolean;
  labelClassName?: string;
  description?: ReactNode;
  error?: ReactNode;
  descriptionClassName?: string;
  errorClassName?: string;
}

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
  "label",
  "required",
  "labelClassName",
  "description",
  "error",
  "descriptionClassName",
  "errorClassName",
] as const;

export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(function CheckboxGroup(
  { className, label, required, labelClassName, description, error, descriptionClassName, errorClassName, ...props },
  ref,
) {
  return (
    <div className="ui-checkbox-group-field">
      {label ? (
        <Text variant={TYPOGRAPHY.BODY_LARGE} className={clsx("ui-checkbox-group-field__label", labelClassName)}>
          {label}
          {required ? (
            <sup className="ui-checkbox-group-field__required-indicator" aria-hidden="true">
              *
            </sup>
          ) : null}
        </Text>
      ) : null}
      <BaseCheckboxGroup ref={ref} className={className} {...props} />
      {description ? (
        <Text variant={TYPOGRAPHY.BODY_SMALL} className={clsx("ui-checkbox-group-field__description", descriptionClassName)}>
          {description}
        </Text>
      ) : null}
      {error ? (
        <Text variant={TYPOGRAPHY.BODY_SMALL} className={clsx("ui-checkbox-group-field__error", errorClassName)}>
          {error}
        </Text>
      ) : null}
    </div>
  );
});
