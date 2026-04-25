import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import clsx from "clsx";
import { CheckIcon, MinusIcon } from "lucide-react";
import { type ReactNode, useId } from "react";
import "./checkbox.scss";

export interface CheckboxProps {
  id?: string;
  className?: string;
  label?: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  indeterminate?: boolean;
  name?: string;
  value?: string;
  uncheckedValue?: string;
  form?: string;
  parent?: boolean;
  nativeButton?: boolean;
  inputRef?: BaseCheckbox.Root.Props["inputRef"];
  onCheckedChange?: BaseCheckbox.Root.Props["onCheckedChange"];
  /** Visual + semantic error state (invalid) */
  error?: boolean;
}

/*
  todo: add checkboxes group as well that will manage the state internally and will tell
        of the selected options on toggling
*/

export const CHECKBOX_SUPPORTED_PROPS = [
  "checked",
  "defaultChecked",
  "disabled",
  "readOnly",
  "required",
  "indeterminate",
  "name",
  "value",
  "uncheckedValue",
  "form",
  "parent",
  "nativeButton",
  "inputRef",
  "onCheckedChange",
  "error",
] as const;

export function Checkbox({
  id,
  className,
  label,
  checked,
  defaultChecked,
  disabled,
  readOnly,
  required,
  indeterminate,
  name,
  value,
  uncheckedValue,
  form,
  parent,
  nativeButton,
  inputRef,
  onCheckedChange,
  error,
}: CheckboxProps) {
  const generatedId = useId();
  const resolvedId = id ?? `checkbox-${generatedId.replace(/:/g, "")}`;

  const root = (
    <BaseCheckbox.Root
      id={resolvedId}
      className={clsx("ui-checkbox", className)}
      aria-invalid={error || undefined}
      data-error={error ? "" : undefined}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      indeterminate={indeterminate}
      name={name}
      value={value}
      uncheckedValue={uncheckedValue}
      form={form}
      parent={parent}
      nativeButton={nativeButton}
      inputRef={inputRef}
      onCheckedChange={onCheckedChange}
    >
      <span className="ui-checkbox__surface">
        <BaseCheckbox.Indicator className="ui-checkbox__indicator" keepMounted>
          {indeterminate ? <MinusIcon className="ui-checkbox__icon" /> : <CheckIcon className="ui-checkbox__icon" />}
        </BaseCheckbox.Indicator>
      </span>
    </BaseCheckbox.Root>
  );

  if (!label) return root;

  return (
    <label className="ui-checkbox__label" htmlFor={resolvedId}>
      {root}
      <span>{label}</span>
    </label>
  );
}
