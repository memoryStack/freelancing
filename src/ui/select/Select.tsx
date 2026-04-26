import { Select as BaseSelect } from "@base-ui/react/select";
import clsx from "clsx";
import { Check, ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import { Text, TYPOGRAPHY, TYPOGRAPHY_CLASSES } from "../text";
import "./select.scss";

export interface SelectItemData {
  value: string;
  label: ReactNode;
  disabled?: boolean;
  leadingIcon?: ReactNode;
  trailingText?: ReactNode;
  trailingIcon?: ReactNode;
}

export interface SelectProps {
  className?: string;
  labelClassName?: string;
  triggerClassName?: string;
  valueClassName?: string;
  descriptionClassName?: string;
  errorClassName?: string;
  popupClassName?: string;
  itemClassName?: string;
  name?: string;
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  placeholder?: ReactNode;
  items: SelectItemData[];
  value?: string | null;
  defaultValue?: string | null;
  onValueChange?: (value: string | null) => void;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  invalid?: boolean;
}

export const SELECT_SUPPORTED_PROPS = [
  "name",
  "label",
  "description",
  "error",
  "placeholder",
  "items",
  "value",
  "defaultValue",
  "onValueChange",
  "disabled",
  "readOnly",
  "required",
  "invalid",
] as const;

export function Select({
  className,
  labelClassName,
  triggerClassName,
  valueClassName,
  descriptionClassName,
  errorClassName,
  popupClassName,
  itemClassName,
  name,
  label,
  description,
  error,
  placeholder = "Select an option",
  items,
  value,
  defaultValue,
  onValueChange,
  disabled,
  readOnly,
  required,
  invalid,
}: SelectProps) {
  return (
    <BaseSelect.Root
      name={name}
      items={items}
      value={value}
      defaultValue={defaultValue}
      onValueChange={(nextValue) => onValueChange?.((nextValue as string | null) ?? null)}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      data-invalid={invalid ? "" : undefined}
      aria-invalid={invalid || undefined}
    >
      {label ? (
        <Text
          as={BaseSelect.Label}
          variant={TYPOGRAPHY.BODY_LARGE}
          className={clsx("ui-select", "ui-select__label", labelClassName)}
        >
          {label}
        </Text>
      ) : null}

      <BaseSelect.Trigger className={clsx("ui-select", "ui-select__trigger", className)}>
        <BaseSelect.Value
          placeholder={placeholder}
          className={clsx("ui-select__value", TYPOGRAPHY_CLASSES[TYPOGRAPHY.BODY_LARGE], valueClassName)}
        />
        <BaseSelect.Icon className="ui-select__icon">
          <ChevronDown size={20} />
        </BaseSelect.Icon>
      </BaseSelect.Trigger>

      {description ? (
        <Text as="p" variant={TYPOGRAPHY.BODY_SMALL} className={clsx("ui-select__description", descriptionClassName)}>
          {description}
        </Text>
      ) : null}

      {error ? (
        <Text as="p" variant={TYPOGRAPHY.BODY_SMALL} className={clsx("ui-select__error", errorClassName)}>
          {error}
        </Text>
      ) : null}

      <BaseSelect.Portal>
        <BaseSelect.Positioner className="ui-select__positioner" sideOffset={8} alignItemWithTrigger={false}>
          <BaseSelect.Popup className={clsx("ui-select__popup", "ui-list-popup", popupClassName)}>
            <BaseSelect.List className="ui-select__list">
              {items.map((item) => (
                <BaseSelect.Item
                  key={item.value}
                  value={item.value}
                  disabled={item.disabled}
                  className={clsx("ui-select__item", "ui-list-item", itemClassName)}
                >
                  {item.leadingIcon ? <span className="ui-list-item__leading-icon">{item.leadingIcon}</span> : null}
                  <Text as={BaseSelect.ItemText} variant={TYPOGRAPHY.BODY_MEDIUM} className="ui-list-item__label">
                    {item.label}
                  </Text>
                  <span className="ui-list-item__spacer" />
                  {item.trailingText ? <span className="ui-list-item__trailing-text">{item.trailingText}</span> : null}
                  {item.trailingIcon ? <span className="ui-list-item__trailing-icon">{item.trailingIcon}</span> : null}
                  <BaseSelect.ItemIndicator className="ui-select__item-indicator">
                    <Check size={16} />
                  </BaseSelect.ItemIndicator>
                </BaseSelect.Item>
              ))}
            </BaseSelect.List>
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    </BaseSelect.Root>
  );
}
