import { useId, useState } from "react";
import { RadioGroup, RadioItem, RADIO_GROUP_SUPPORTED_PROPS, RADIO_ITEM_SUPPORTED_PROPS } from "@freelancing/ui";

export function RadioShowcasePage() {
  const legendId = useId();
  const [value, setValue] = useState<"a" | "b">("a");

  return (
    <main className="min-h-screen bg-white p-12">
      <a href="/" className="inline-block text-blue-600 underline">
        Back to Design System
      </a>

      <h1 className="mt-6 text-3xl font-semibold">Radios</h1>
      <p className="mt-2 text-sm text-gray-600">
        Base UI <code className="rounded bg-gray-100 px-1">RadioGroup</code> +{" "}
        <code className="rounded bg-gray-100 px-1">Radio.Root</code> /{" "}
        <code className="rounded bg-gray-100 px-1">Radio.Indicator</code> with simple default styling for exploration.
      </p>

      <p className="mt-4 text-xs text-gray-600">
        <strong>RadioGroup props:</strong> {RADIO_GROUP_SUPPORTED_PROPS.join(", ")}
      </p>
      <p className="mt-1 text-xs text-gray-600">
        <strong>RadioItem props:</strong> {RADIO_ITEM_SUPPORTED_PROPS.join(", ")}
      </p>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">Uncontrolled (defaultValue)</h2>
        <RadioGroup name="fruit-uncontrolled" defaultValue="b" className="mt-3">
          <RadioItem value="a" label="Option A" />
          <RadioItem value="b" label="Option B" />
          <RadioItem value="c" label="Option C" />
        </RadioGroup>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">Controlled (value + onValueChange)</h2>
        <RadioGroup name="fruit-controlled" value={value} onValueChange={(v) => setValue(v as "a" | "b")} className="mt-3">
          <RadioItem value="a" label="Option A" />
          <RadioItem value="b" label="Option B" />
        </RadioGroup>
        <p className="mt-2 text-sm text-gray-600">Current value: {value}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold" id={legendId}>
          Group labeled with aria-labelledby
        </h2>
        <RadioGroup name="fruit-aria" defaultValue="gala" aria-labelledby={legendId} className="mt-3">
          <RadioItem value="fuji" label="Fuji" />
          <RadioItem value="gala" label="Gala" />
          <RadioItem value="granny" label="Granny Smith" />
        </RadioGroup>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">Group disabled</h2>
        <RadioGroup name="fruit-disabled" defaultValue="x" disabled className="mt-3">
          <RadioItem value="x" label="X" />
          <RadioItem value="y" label="Y" />
        </RadioGroup>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">One item disabled</h2>
        <RadioGroup name="fruit-partial" defaultValue="on">
          <RadioItem value="on" label="On" />
          <RadioItem value="off" label="Off (disabled)" disabled />
        </RadioGroup>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">Read-only group</h2>
        <RadioGroup name="fruit-ro" defaultValue="one" readOnly className="mt-3">
          <RadioItem value="one" label="One" />
          <RadioItem value="two" label="Two" />
        </RadioGroup>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">Required group</h2>
        <RadioGroup name="fruit-req" required className="mt-3">
          <RadioItem value="p" label="Pears" />
          <RadioItem value="q" label="Quince" />
        </RadioGroup>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">Without labels (bare controls)</h2>
        <RadioGroup name="bare" defaultValue="1" className="mt-3 flex flex-row flex-wrap gap-4">
          <RadioItem value="1" />
          <RadioItem value="2" />
          <RadioItem value="3" />
        </RadioGroup>
      </section>
    </main>
  );
}
