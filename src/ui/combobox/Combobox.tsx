import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import clsx from "clsx";
import { Check, ChevronDown, X } from "lucide-react";
import { useId, useMemo, type ReactNode } from "react";
import { Text, TYPOGRAPHY, TYPOGRAPHY_CLASSES } from "../text";
import "./combobox.scss";

export interface ComboboxItemData {
  value: string;
  label: ReactNode;
  disabled?: boolean;
  leadingIcon?: ReactNode;
  trailingText?: ReactNode;
  trailingIcon?: ReactNode;
}

export interface ComboboxProps {
  className?: string;
  labelClassName?: string;
  inputGroupClassName?: string;
  inputClassName?: string;
  descriptionClassName?: string;
  errorClassName?: string;
  popupClassName?: string;
  itemClassName?: string;
  name?: string;
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  placeholder?: string;
  items: ComboboxItemData[];
  value?: string | null;
  defaultValue?: string | null;
  onValueChange?: (value: string | null) => void;
  inputValue?: string;
  onInputValueChange?: (inputValue: string) => void;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  invalid?: boolean;
  id?: string;
}

export const COMBOBOX_SUPPORTED_PROPS = [
  "name",
  "label",
  "description",
  "error",
  "placeholder",
  "items",
  "value",
  "defaultValue",
  "onValueChange",
  "inputValue",
  "onInputValueChange",
  "disabled",
  "readOnly",
  "required",
  "invalid",
] as const;

export function Combobox({
  className,
  labelClassName,
  inputGroupClassName,
  inputClassName,
  descriptionClassName,
  errorClassName,
  popupClassName,
  itemClassName,
  name,
  label,
  description,
  error,
  placeholder = "Type to filter...",
  items,
  value,
  defaultValue,
  onValueChange,
  inputValue,
  onInputValueChange,
  disabled,
  readOnly,
  required,
  invalid,
  id,
}: ComboboxProps) {

  const generatedId = useId();
  const resolvedId = id ?? `combobox-${generatedId.replace(/:/g, "")}`;

  const isValueControlled = value !== undefined;
  const isInputValueControlled = inputValue !== undefined;

  const selectedValue = useMemo(
    () => items.find((item) => item.value === value) ?? null,
    [items, value],
  );
  const defaultSelectedValue = useMemo(
    () => items.find((item) => item.value === defaultValue) ?? null,
    [items, defaultValue],
  );

  const rootValueProps = isValueControlled
    ? { value: selectedValue }
    : defaultSelectedValue
      ? { defaultValue: defaultSelectedValue }
      : {};
  const rootInputValueProps = isInputValueControlled ? { inputValue } : {};

  return (
    <BaseCombobox.Root
      items={items}
      name={name}
      onValueChange={(nextValue) => {
        const resolved = (nextValue as ComboboxItemData | null)?.value ?? null;
        onValueChange?.(resolved);
      }}
      onInputValueChange={(nextInputValue) => onInputValueChange?.(nextInputValue)}
      itemToStringLabel={(item) =>
        typeof item.label === "string" ? item.label : String(item.value)
      }
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      data-invalid={invalid ? "" : undefined}
      aria-invalid={invalid || undefined}
      {...rootValueProps}
      {...rootInputValueProps}
    >
      <div
        className={clsx("ui-combobox", className)}
        data-disabled={disabled ? "" : undefined}
        data-invalid={invalid ? "" : undefined}
        data-readonly={readOnly ? "" : undefined}
      >
        {label ? (
          <Text
            htmlFor={resolvedId}
            as="label"
            variant={TYPOGRAPHY.BODY_LARGE}
            className={clsx("ui-combobox__label", labelClassName)}
          >
            {label}
          </Text>
        ) : null}

        <BaseCombobox.InputGroup 
          className={clsx("ui-combobox__input-group", inputGroupClassName)}
          data-invalid={error ? "" : undefined}
          data-empty={!inputValue}
        >
          <BaseCombobox.Input
            id={resolvedId}
            placeholder={placeholder}
            className={clsx("ui-combobox__input", TYPOGRAPHY_CLASSES[TYPOGRAPHY.BODY_LARGE], inputClassName)}
          />

          <div className="ui-combobox__actions">
          {!readOnly ? (
            <BaseCombobox.Clear className="ui-combobox__action-button" aria-label="Clear value">
              <X size={18} />
            </BaseCombobox.Clear>
          ) : null}
            <BaseCombobox.Trigger className="ui-combobox__action-button" aria-label="Open options">
              <ChevronDown size={20} />
            </BaseCombobox.Trigger>
          </div>
        </BaseCombobox.InputGroup>

        {description ? (
          <Text as="p" variant={TYPOGRAPHY.BODY_SMALL} className={clsx("ui-combobox__description", descriptionClassName)}>
            {description}
          </Text>
        ) : null}

        {error ? (
          <Text as="p" variant={TYPOGRAPHY.BODY_SMALL} className={clsx("ui-combobox__error", errorClassName)}>
            {error}
          </Text>
        ) : null}

        <BaseCombobox.Portal>
          <BaseCombobox.Positioner className="ui-combobox__positioner" sideOffset={8}>
            <BaseCombobox.Popup className={clsx("ui-combobox__popup", "ui-list-popup", popupClassName)}>
              <BaseCombobox.Empty className="ui-combobox__empty">No results found.</BaseCombobox.Empty>

              <BaseCombobox.List className="ui-combobox__list">
                {(item: ComboboxItemData) => (
                  <BaseCombobox.Item
                    key={item.value}
                    value={item}
                    disabled={item.disabled}
                    className={clsx("ui-combobox__item", "ui-list-item", itemClassName)}
                  >
                    {item.leadingIcon ? <span className="ui-list-item__leading-icon">{item.leadingIcon}</span> : null}
                    <Text as="span" variant={TYPOGRAPHY.BODY_MEDIUM} className="ui-list-item__label">
                      {item.label}
                    </Text>
                    <span className="ui-list-item__spacer" />
                    {item.trailingText ? <span className="ui-list-item__trailing-text">{item.trailingText}</span> : null}
                    {item.trailingIcon ? <span className="ui-list-item__trailing-icon">{item.trailingIcon}</span> : null}
                    <BaseCombobox.ItemIndicator className="ui-combobox__item-indicator">
                      <Check size={16} />
                    </BaseCombobox.ItemIndicator>
                  </BaseCombobox.Item>
                )}
              </BaseCombobox.List>
            </BaseCombobox.Popup>
          </BaseCombobox.Positioner>
        </BaseCombobox.Portal>
      </div>
    </BaseCombobox.Root>
  );
}
