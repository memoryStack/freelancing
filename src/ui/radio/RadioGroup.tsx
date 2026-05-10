import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import clsx from "clsx";
import type { ReactNode } from "react";
import { Text, TYPOGRAPHY } from "../text";
import "./radio.scss";

export interface RadioGroupProps<Value = string> extends BaseRadioGroup.Props<Value> {
  label?: ReactNode;
  required?: boolean;
  labelClassName?: string;
  description?: ReactNode;
  error?: ReactNode;
  descriptionClassName?: string;
  errorClassName?: string;
}

export const RADIO_GROUP_SUPPORTED_PROPS = [
  "name",
  "form",
  "value",
  "defaultValue",
  "onValueChange",
  "disabled",
  "readOnly",
  "required",
  "label",
  "labelClassName",
  "description",
  "error",
  "descriptionClassName",
  "errorClassName",
  "inputRef",
  "id",
  "render",
] as const;

export function RadioGroup<Value = string>({
  className,
  label,
  required,
  labelClassName,
  description,
  error,
  descriptionClassName,
  errorClassName,
  ...props
}: RadioGroupProps<Value>) {
  return (
    <div className="ui-radio-group-field">
      {label ? (
        <Text variant={TYPOGRAPHY.BODY_LARGE} className={clsx("ui-radio-group-field__label", labelClassName)}>
          {label}
          {required ? (
            <sup className="ui-radio-group-field__required-indicator" aria-hidden="true">
              *
            </sup>
          ) : null}
        </Text>
      ) : null}
      <BaseRadioGroup className={clsx("ui-radio-group", className)} {...props} />
      {description ? (
        <Text variant={TYPOGRAPHY.BODY_SMALL} className={clsx("ui-radio-group-field__description", descriptionClassName)}>
          {description}
        </Text>
      ) : null}
      {error ? (
        <Text variant={TYPOGRAPHY.BODY_SMALL} className={clsx("ui-radio-group-field__error", errorClassName)}>
          {error}
        </Text>
      ) : null}
    </div>
  );
}
