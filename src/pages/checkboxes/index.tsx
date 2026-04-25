import { useId, useState } from "react";
import { Checkbox, CheckboxGroup, CHECKBOX_GROUP_SUPPORTED_PROPS, CHECKBOX_SUPPORTED_PROPS } from "../../ui";

const GROUP_OPTIONS = ["fuji-apple", "gala-apple", "granny-smith-apple"] as const;

export function CheckboxShowcasePage() {
  const [controlled, setControlled] = useState(false);
  const [groupValue, setGroupValue] = useState<string[]>(["fuji-apple"]);
  const groupLegendId = useId();

  return (
    <main className="min-h-screen bg-white p-12">
      <a href="/" className="inline-block text-blue-600 underline">
        Back to Design System
      </a>

      <h1 className="mt-6 text-3xl font-semibold">Checkboxes</h1>
      <p className="mt-2 text-sm text-gray-600">
        Base UI behavior with Material Design token styling (container, icon, state layer, focus ring).
      </p>

      <p className="mt-4 text-sm">
        <strong>Checkbox props:</strong> {CHECKBOX_SUPPORTED_PROPS.join(", ")}
      </p>
      <p className="mt-2 text-sm">
        <strong>CheckboxGroup props:</strong> {CHECKBOX_GROUP_SUPPORTED_PROPS.join(", ")}
      </p>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">Checkbox group (uncontrolled)</h2>
        <p className="mt-1 text-sm text-gray-600">
          Group holds <code className="rounded bg-gray-100 px-1">string[]</code> selection; each{" "}
          <code className="rounded bg-gray-100 px-1">Checkbox</code> uses the same <code className="rounded bg-gray-100 px-1">name</code> and a distinct{" "}
          <code className="rounded bg-gray-100 px-1">value</code>.
        </p>
        <CheckboxGroup
          aria-labelledby={groupLegendId}
          defaultValue={["gala-apple"]}
          className="mt-3 flex flex-col gap-3"
        >
          <div className="text-sm font-medium text-gray-800" id={groupLegendId}>
            Apples (uncontrolled)
          </div>
          <Checkbox name="apples-uc" value="fuji-apple" label="Fuji" />
          <Checkbox name="apples-uc" value="gala-apple" label="Gala" />
          <Checkbox name="apples-uc" value="granny-smith-apple" label="Granny Smith" />
        </CheckboxGroup>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">Checkbox group (controlled + parent)</h2>
        <p className="mt-1 text-sm text-gray-600">
          Parent row uses <code className="rounded bg-gray-100 px-1">parent</code>; group uses{" "}
          <code className="rounded bg-gray-100 px-1">allValues</code> per{" "}
          <a
            href="https://base-ui.com/react/components/checkbox-group"
            className="text-blue-600 underline"
            target="_blank"
            rel="noreferrer"
          >
            Base UI
          </a>
          .
        </p>
        <CheckboxGroup
          aria-labelledby={`${groupLegendId}-parent`}
          value={groupValue}
          onValueChange={(next) => setGroupValue(next)}
          allValues={[...GROUP_OPTIONS]}
          className="mt-3 flex flex-col gap-3"
        >
          <div className="text-sm font-medium text-gray-800" id={`${groupLegendId}-parent`}>
            Apples (controlled)
          </div>
          <Checkbox name="apples-ctrl" parent label="Apples (select all)" />
          <Checkbox name="apples-ctrl" value="fuji-apple" label="Fuji" />
          <Checkbox name="apples-ctrl" value="gala-apple" label="Gala" />
          <Checkbox name="apples-ctrl" value="granny-smith-apple" label="Granny Smith" />
        </CheckboxGroup>
        <p className="mt-2 font-mono text-xs text-gray-600">value: {JSON.stringify(groupValue)}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">Standalone checkboxes</h2>
      </section>

      <div className="mt-4 grid grid-cols-1 gap-4">
        <Checkbox label="Default (uncontrolled)" />
        <Checkbox label="Default checked" defaultChecked />
        <Checkbox label="Controlled" checked={controlled} onCheckedChange={(next) => setControlled(next)} />
        <Checkbox label="Indeterminate" indeterminate />
        <Checkbox label="Disabled" disabled />
        <Checkbox label="Disabled checked" disabled defaultChecked />
        <Checkbox label="Read only checked" readOnly defaultChecked />
        <Checkbox label="Required" required />
        <Checkbox label="Error (unchecked)" error />
        <Checkbox label="Error (checked)" error defaultChecked />
        <Checkbox label="Error + disabled" error disabled />
        <Checkbox label="Error + disabled checked" error disabled defaultChecked />
      </div>
    </main>
  );
}
