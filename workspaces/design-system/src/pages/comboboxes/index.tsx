import { useState } from "react";
import { Combobox } from "@freelancing/ui";

const FRUIT_ITEMS = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
  { value: "grape", label: "Grape" },
  { value: "mango", label: "Mango" },
  { value: "strawberry", label: "Strawberry" },
];

export function ComboboxShowcasePage() {
  const [controlledFruit, setControlledFruit] = useState<string | null>("banana");

  return (
    <main className="min-h-screen bg-white p-12">
      <a href="/" className="inline-block text-blue-600 underline">
        Back to Design System
      </a>

      <h1 className="mt-6 text-3xl font-semibold">Comboboxes</h1>
      <p className="mt-2 text-sm text-gray-600">Outlined combobox examples with filterable dropdown list items.</p>

      <div className="mt-8 max-w-xl rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8">
        <Combobox
          label="Fruit (controlled)"
          placeholder="Type to filter fruits"
          description={`Selected: ${controlledFruit ?? "None"}`}
          value={controlledFruit}
          onValueChange={setControlledFruit}
          items={FRUIT_ITEMS}
        />
      </div>

      <div className="mt-6 max-w-xl rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8">
        <Combobox
          label="Fruit (uncontrolled)"
          placeholder="Type to filter fruits"
          description="Supporting text"
          defaultValue="apple"
          items={FRUIT_ITEMS}
        />
      </div>

      <div className="mt-6 max-w-xl rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8">
        <Combobox label="Fruit" placeholder="Type to filter fruits" description="Supporting text" items={FRUIT_ITEMS} />
      </div>

      <div className="mt-6 max-w-xl rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8">
        <Combobox
          label="Fruit (pre-selected)"
          description="Supporting text"
          defaultValue="banana"
          items={FRUIT_ITEMS}
        />
      </div>

      <div className="mt-6 max-w-xl rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8">
        <Combobox
          label="Fruit (error)"
          placeholder="Type to filter fruits"
          description="Supporting text"
          error="Please choose a fruit"
          invalid
          items={FRUIT_ITEMS}
        />
      </div>

      <div className="mt-6 max-w-xl rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8">
        <Combobox
          label="Disabled empty"
          placeholder="Type to filter fruits"
          description="Supporting text"
          disabled
          items={FRUIT_ITEMS}
        />
      </div>

      <div className="mt-6 max-w-xl rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8">
        <Combobox
          label="Disabled selected"
          description="Supporting text"
          disabled
          defaultValue="orange"
          items={FRUIT_ITEMS}
        />
      </div>

      <div className="mt-6 max-w-xl rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8">
        <Combobox
          label="Read only"
          description="Supporting text"
          readOnly
          defaultValue="mango"
          items={FRUIT_ITEMS}
        />
      </div>
    </main>
  );
}
