import { Radio as BaseRadio } from "@base-ui/react/radio";
import clsx from "clsx";
import { type ReactNode, useId } from "react";
import "./radio.scss";

export interface RadioItemProps<Value = string> {
  value: Value;
  id?: string;
  className?: string;
  label?: ReactNode;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  nativeButton?: boolean;
  inputRef?: BaseRadio.Root.Props<Value>["inputRef"];
  render?: BaseRadio.Root.Props<Value>["render"];
}

export const RADIO_ITEM_SUPPORTED_PROPS = [
  "value",
  "id",
  "className",
  "label",
  "disabled",
  "readOnly",
  "required",
  "nativeButton",
  "inputRef",
  "render",
] as const;

/*
  TODO: the dot inside the radio item is not centered exactly
    __surface element's border is overflowing the space it should be in
*/

export function RadioItem<Value = string>({
  value,
  id,
  className,
  label,
  disabled,
  readOnly,
  required,
  nativeButton,
  inputRef,
  render,
}: RadioItemProps<Value>) {
  const generatedId = useId();
  const resolvedId = id ?? `radio-${String(value)}-${generatedId.replace(/:/g, "")}`;

  const root = (
    <BaseRadio.Root<Value>
      id={resolvedId}
      value={value}
      className={clsx("ui-radio", className)}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      nativeButton={nativeButton}
      inputRef={inputRef}
      render={render}
    >
      <span className="ui-radio__surface">
        <BaseRadio.Indicator className="ui-radio__indicator" keepMounted />
      </span>
    </BaseRadio.Root>
  );

  if (!label) return root;

  return (
    <label className="ui-radio__label" htmlFor={resolvedId}>
      {root}
      <span>{label}</span>
    </label>
  );
}
