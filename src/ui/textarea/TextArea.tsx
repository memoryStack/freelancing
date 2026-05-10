import clsx from "clsx";
import { useId, useMemo, useRef, useState, type MouseEvent, type TextareaHTMLAttributes } from "react";
import { Text, TYPOGRAPHY, TYPOGRAPHY_CLASSES } from "../text";
import "./textarea.scss";

type NativeTextAreaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "onChange" | "spellCheck" | "children" | "value" | "defaultValue" | "readOnly" | "rows"
>;

export interface TextAreaProps extends NativeTextAreaProps {
  id?: string;
  className?: string;
  labelClassName?: string;
  controlContainerClassName?: string;
  controlClassName?: string;
  descriptionClassName?: string;
  errorClassName?: string;
  label?: string;
  description?: string;
  error?: string;
  invalid?: boolean;
  readOnly?: boolean;
  rows?: number;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

export const TEXTAREA_SUPPORTED_PROPS = [
  "id",
  "name",
  "label",
  "description",
  "error",
  "invalid",
  "disabled",
  "required",
  "readOnly",
  "rows",
  "placeholder",
  "value",
  "defaultValue",
  "onValueChange",
] as const;

export function TextArea({
  id,
  className,
  labelClassName,
  controlContainerClassName,
  controlClassName,
  descriptionClassName,
  errorClassName,
  label,
  description,
  error,
  invalid,
  readOnly,
  rows = 4,
  value,
  defaultValue,
  onValueChange,
  disabled,
  name,
  required,
  placeholder,
  onBlur,
  onFocus,
  ...props
}: TextAreaProps) {
  const generatedId = useId();
  const resolvedId = id ?? `textarea-${generatedId.replace(/:/g, "")}`;
  const descriptionId = description ? `${resolvedId}-description` : undefined;
  const errorId = error ? `${resolvedId}-error` : undefined;
  const describedBy = [descriptionId, errorId].filter(Boolean).join(" ") || undefined;
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const isControlled = value !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue ?? "");
  const resolvedValue = useMemo(() => (isControlled ? value ?? "" : uncontrolledValue), [isControlled, value, uncontrolledValue]);

  const handleContainerMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === textareaRef.current) {
      return;
    }

    event.preventDefault();
    textareaRef.current?.focus();
  };

  return (
    <div
      className={clsx("ui-textarea", className)}
      data-focused={isFocused ? "" : undefined}
      data-invalid={invalid ? "" : undefined}
      data-disabled={disabled ? "" : undefined}
    >
      {label ? (
        <label
          htmlFor={resolvedId}
          className={clsx("ui-textarea__label", TYPOGRAPHY_CLASSES[TYPOGRAPHY.BODY_LARGE], labelClassName)}
        >
          {label}
          {required ? (
            <sup className="ui-textarea__required-indicator" aria-hidden="true">
              *
            </sup>
          ) : null}
        </label>
      ) : null}

      <div className={clsx("ui-textarea__control-container", controlContainerClassName)} onMouseDown={handleContainerMouseDown}>
        <textarea
          {...props}
          ref={textareaRef}
          id={resolvedId}
          name={name}
          disabled={disabled}
          required={required}
          readOnly={readOnly}
          rows={rows}
          placeholder={placeholder}
          spellCheck
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          className={clsx("ui-textarea__control", TYPOGRAPHY_CLASSES[TYPOGRAPHY.BODY_LARGE], controlClassName)}
          value={resolvedValue}
          onFocus={(event) => {
            setIsFocused(true);
            onFocus?.(event);
          }}
          onBlur={(event) => {
            setIsFocused(false);
            onBlur?.(event);
          }}
          onChange={(event) => {
            const nextValue = event.target.value;
            if (!isControlled) {
              setUncontrolledValue(nextValue);
            }
            onValueChange?.(nextValue);
          }}
        />
      </div>

      {description ? (
        <Text
          as="p"
          id={descriptionId}
          variant={TYPOGRAPHY.BODY_SMALL}
          className={clsx("ui-textarea__description", descriptionClassName)}
        >
          {description}
        </Text>
      ) : null}

      {error ? (
        <Text as="p" id={errorId} variant={TYPOGRAPHY.BODY_SMALL} className={clsx("ui-textarea__error", errorClassName)}>
          {error}
        </Text>
      ) : null}
    </div>
  );
}
