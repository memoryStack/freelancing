import { Field } from "@freelancing/ui";
import { Search, X } from "lucide-react";

export function FieldShowcasePage() {
  return (
    <main className="min-h-screen bg-white p-12">
      <a href="/" className="inline-block text-blue-600 underline">
        Back to Design System
      </a>

      <h1 className="mt-6 text-3xl font-semibold">Fields</h1>
      <p className="mt-2 text-sm text-gray-600">
        Skeleton integration for Base UI Field. Styling and advanced composition will be added later.
      </p>

      <div className="mt-8 max-w-xl rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8">
        <Field
          label="Name"
          placeholder="Input text"
          description="Supporting text"
          leadingIcon={<Search size={20} />}
          trailingIcon={<X size={20} />}
          clearOnTrailingIconClick
        />
      </div>

      <div className="mt-6 max-w-xl rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8">
        <Field
          label="Name"
          placeholder="Input text"
          description="Supporting text"
          error="Error text"
          invalid
          leadingIcon={<Search size={20} />}
          trailingIcon={<X size={20} />}
          clearOnTrailingIconClick
        />
      </div>

      <div className="mt-6 max-w-xl rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8">
        <Field
          label="Name (no leading icon)"
          placeholder="Input text"
          description="Supporting text"
          trailingIcon={<X size={20} />}
          clearOnTrailingIconClick
        />
      </div>

      <div className="mt-6 max-w-xl rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8">
        <Field
          label="Disabled empty"
          placeholder="Input text"
          description="Supporting text"
          disabled
          leadingIcon={<Search size={20} />}
          trailingIcon={<X size={20} />}
        />
      </div>

      <div className="mt-6 max-w-xl rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8">
        <Field
          label="Disabled filled"
          description="Supporting text"
          disabled
          defaultValue="John Carter"
          leadingIcon={<Search size={20} />}
          trailingIcon={<X size={20} />}
        />
      </div>
    </main>
  );
}
