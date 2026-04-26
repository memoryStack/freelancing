import { Field as BaseField } from "@base-ui/react/field";
import clsx from "clsx";
import { useEffect, useMemo, useRef, useState, type MouseEvent, type ReactNode } from "react";
import "./field.scss";

export interface FieldProps {
  className?: string;
  labelClassName?: string;
  controlContainerClassName?: string;
  controlClassName?: string;
  descriptionClassName?: string;
  errorClassName?: string;
  name?: string;
  disabled?: boolean;
  invalid?: boolean;
  type?: "text" | "email" | "password" | "search" | "url" | "tel" | "number";
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  required?: boolean;
  readOnly?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  clearOnTrailingIconClick?: boolean;
  onTrailingIconClick?: () => void;
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  children?: ReactNode;
}

export const FIELD_SUPPORTED_PROPS = [
  "name",
  "disabled",
  "invalid",
  "type",
  "placeholder",
  "value",
  "defaultValue",
  "onValueChange",
  "required",
  "readOnly",
  "leadingIcon",
  "trailingIcon",
  "clearOnTrailingIconClick",
  "onTrailingIconClick",
  "label",
  "description",
  "error",
  "children",
] as const;

export function Field({
  className,
  labelClassName,
  controlContainerClassName,
  controlClassName,
  descriptionClassName,
  errorClassName,
  name,
  disabled,
  invalid,
  type = "text",
  placeholder,
  value,
  defaultValue,
  onValueChange,
  required,
  readOnly,
  leadingIcon,
  trailingIcon,
  clearOnTrailingIconClick = false,
  onTrailingIconClick,
  label,
  description,
  error,
  children,
}: FieldProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const isControlled = value !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue ?? "");

  useEffect(() => {
    if (isControlled) {
      setUncontrolledValue(value ?? "");
    }
  }, [isControlled, value]);

  const resolvedValue = useMemo(() => {
    return isControlled ? (value ?? "") : uncontrolledValue;
  }, [isControlled, uncontrolledValue, value]);

  const handleContainerMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    inputRef.current?.focus();
  };

  const handleTrailingIconClick = () => {
    if (clearOnTrailingIconClick && !readOnly && !disabled && !children) {
      if (!isControlled) {
        setUncontrolledValue("");
      } else {
        onValueChange?.("");
      }
    }

    onTrailingIconClick?.();
  };

  return (
    <BaseField.Root
      className={clsx("ui-field", className)}
      name={name}
      disabled={disabled}
      invalid={invalid}
      data-leading-icon={leadingIcon ? "" : undefined}
      data-trailing-icon={trailingIcon ? "" : undefined}
    >
      {label ? <BaseField.Label className={clsx("ui-field__label", labelClassName)}>{label}</BaseField.Label> : null}

      <div className={clsx("ui-field__control-container", controlContainerClassName)} onMouseDown={handleContainerMouseDown}>
        {leadingIcon ? <span className="ui-field__leading-icon">{leadingIcon}</span> : null}

        {children ?? (
          <BaseField.Control
            className={clsx("ui-field__control", controlClassName)}
            type={type}
            placeholder={placeholder}
            value={resolvedValue}
            onValueChange={(nextValue) => {
              if (!isControlled) {
                setUncontrolledValue(nextValue);
              }
              onValueChange?.(nextValue);
            }}
            required={required}
            readOnly={readOnly}
            render={(props) => <input {...props} ref={inputRef} />}
          />
        )}

        {trailingIcon ? (
          <button
            type="button"
            className="ui-field__trailing-icon-button"
            onClick={handleTrailingIconClick}
            aria-label={clearOnTrailingIconClick ? "Clear input value" : "Trailing action"}
            disabled={disabled}
            tabIndex={-1}
          >
            <span className="ui-field__trailing-icon">{trailingIcon}</span>
          </button>
        ) : null}
      </div>

      {description ? (
        <BaseField.Description className={clsx("ui-field__description", descriptionClassName)}>
          {description}
        </BaseField.Description>
      ) : null}

      {error ? <BaseField.Error className={clsx("ui-field__error", errorClassName)}>{error}</BaseField.Error> : null}
    </BaseField.Root>
  );
}
