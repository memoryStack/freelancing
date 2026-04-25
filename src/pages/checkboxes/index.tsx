import { useState } from "react";
import { Checkbox, CHECKBOX_SUPPORTED_PROPS } from "../../ui";

export function CheckboxShowcasePage() {
  const [controlled, setControlled] = useState(false);

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
        <strong>Supported props:</strong> {CHECKBOX_SUPPORTED_PROPS.join(", ")}
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4">
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
