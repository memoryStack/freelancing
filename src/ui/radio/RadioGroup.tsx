import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import clsx from "clsx";
import "./radio.scss";

export type RadioGroupProps<Value = string> = BaseRadioGroup.Props<Value>;

export const RADIO_GROUP_SUPPORTED_PROPS = [
  "name",
  "form",
  "value",
  "defaultValue",
  "onValueChange",
  "disabled",
  "readOnly",
  "required",
  "inputRef",
  "id",
  "render",
] as const;

export function RadioGroup<Value = string>({ className, ...props }: RadioGroupProps<Value>) {
  return <BaseRadioGroup className={clsx("ui-radio-group", className)} {...props} />;
}
