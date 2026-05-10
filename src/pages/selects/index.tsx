import { Select } from "@freelancing/ui";

const PRIORITY_ITEMS = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
  { value: "urgent", label: "Urgent" },
];

export function SelectShowcasePage() {
  return (
    <main className="min-h-screen bg-white p-12">
      <a href="/" className="inline-block text-blue-600 underline">
        Back to Design System
      </a>

      <h1 className="mt-6 text-3xl font-semibold">Selects</h1>
      <p className="mt-2 text-sm text-gray-600">Outlined select examples with trigger and dropdown list item styling.</p>

      <div className="mt-8 max-w-xl rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8">
        <Select label="Priority" placeholder="Select priority" description="Supporting text" items={PRIORITY_ITEMS} />
      </div>

      <div className="mt-6 max-w-xl rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8">
        <Select
          label="Priority (pre-selected)"
          description="Supporting text"
          defaultValue="medium"
          items={PRIORITY_ITEMS}
        />
      </div>

      <div className="mt-6 max-w-xl rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8">
        <Select
          label="Priority (error)"
          placeholder="Select priority"
          description="Supporting text"
          error="Please choose an option"
          invalid
          items={PRIORITY_ITEMS}
        />
      </div>

      <div className="mt-6 max-w-xl rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8">
        <Select
          label="Disabled empty"
          placeholder="Select priority"
          description="Supporting text"
          disabled
          items={PRIORITY_ITEMS}
        />
      </div>

      <div className="mt-6 max-w-xl rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8">
        <Select
          label="Disabled selected"
          description="Supporting text"
          disabled
          defaultValue="high"
          items={PRIORITY_ITEMS}
        />
      </div>

      <div className="mt-6 max-w-xl rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8">
        <Select
          label="Read only"
          description="Supporting text"
          readOnly
          defaultValue="low"
          items={PRIORITY_ITEMS}
        />
      </div>
    </main>
  );
}
