import { Switch as BaseSwitch } from "@base-ui/react/switch";
import clsx from "clsx";
import { CheckIcon } from "lucide-react";
import type { ReactNode } from "react";
import "./switch.scss";

export interface SwitchProps {
  id?: string;
  className?: string;
  label?: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  uncheckedValue?: string;
  form?: string;
  nativeButton?: boolean;
  onCheckedChange?: BaseSwitch.Root.Props["onCheckedChange"];
}

// TODO: challenge yourself to write the code of switch from scratch

export function Switch({
  id,
  className,
  label,
  checked,
  defaultChecked,
  disabled,
  readOnly,
  required,
  name,
  value,
  uncheckedValue,
  form,
  nativeButton,
  onCheckedChange,
}: SwitchProps) {
  const root = (
    <BaseSwitch.Root
      id={id}
      className={clsx("ui-switch", className)}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      name={name}
      value={value}
      uncheckedValue={uncheckedValue}
      form={form}
      nativeButton={nativeButton}
      onCheckedChange={onCheckedChange}
    >
      <BaseSwitch.Thumb className="ui-switch__thumb">
        <CheckIcon className="ui-switch__thumb-check" />
      </BaseSwitch.Thumb>
    </BaseSwitch.Root>
  );

  if (!label) return root;

  return (
    <label className="ui-switch__label" htmlFor={id}>
      {root}
      <span>{label}</span>
    </label>
  );
}
