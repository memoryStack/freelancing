import { useState } from "react";
import { Switch } from "@freelancing/ui";

export function SwitchShowcasePage() {
  const [checked, setChecked] = useState(true);

  return (
    <main className="min-h-screen bg-white p-12">
      <a href="/" className="inline-block text-blue-600 underline">
        Back to Design System
      </a>

      <h1 className="mt-6 text-3xl font-semibold">Switches</h1>

      <div className="mt-8 grid grid-cols-1 gap-4">
        <Switch label="Default (uncontrolled)" />
        <Switch label="Default checked" defaultChecked />
        <Switch label="Controlled" checked={checked} onCheckedChange={(next) => setChecked(next)} />
        <Switch label="Disabled" disabled />
        <Switch label="Read only" defaultChecked readOnly />
        <Switch label="Required" required />
        <Switch />
      </div>
    </main>
  );
}
