import { TextArea } from "@freelancing/ui";

export function TextAreaShowcasePage() {
  return (
    <main className="min-h-screen bg-white p-12">
      <a href="/" className="inline-block text-blue-600 underline">
        Back to Design System
      </a>

      <h1 className="mt-6 text-3xl font-semibold">Text Areas</h1>
      <p className="mt-2 text-sm text-gray-600">Outlined text area examples with label, supporting text, and error states.</p>

      <div className="mt-8 max-w-xl rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8">
        <TextArea label="Description" placeholder="Write your message..." description="Supporting text" rows={4} />
      </div>

      <div className="mt-6 max-w-xl rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8">
        <TextArea
          label="Description"
          defaultValue={"This is a pre-filled text area value.\nIt supports multiple lines."}
          description="Supporting text"
          rows={4}
        />
      </div>

      <div className="mt-6 max-w-xl rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8">
        <TextArea
          label="Description"
          placeholder="Write your message..."
          description="Supporting text"
          error="Error text"
          invalid
          rows={4}
        />
      </div>

      <div className="mt-6 max-w-xl rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8">
        <TextArea label="Disabled empty" placeholder="Write your message..." description="Supporting text" disabled rows={4} />
      </div>

      <div className="mt-6 max-w-xl rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8">
        <TextArea
          label="Disabled filled"
          defaultValue={"Existing description text.\nSecond line sample."}
          description="Supporting text"
          disabled
          rows={4}
        />
      </div>
    </main>
  );
}
