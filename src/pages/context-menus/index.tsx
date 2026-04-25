import { Copy, Eye, Pencil, Trash2 } from "lucide-react";
import { ContextMenu } from "../../ui";

export function ContextMenuShowcasePage() {
  return (
    <main className="min-h-screen bg-white p-12">
      <a href="/" className="inline-block text-blue-600 underline">
        Back to Design System
      </a>

      <h1 className="mt-6 text-3xl font-semibold">Context Menus</h1>
      <p className="mt-2 text-sm text-gray-600">
        Right-click (or long-press) on the target area to open a simple flat context menu.
      </p>

      <div className="mt-8 max-w-xl rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8">
        <ContextMenu
          trigger={
            <div className="min-h-48 w-full rounded-lg border border-gray-300 bg-white p-6 text-sm text-gray-700">
              Right click anywhere in this box
            </div>
          }
          items={[
            { id: "open", label: "Open", leadingIcon: <Eye size={20} /> },
            { id: "copy", label: "Copy", leadingIcon: <Copy size={20} />, trailingText: "⌘C" },
            { id: "rename", label: "Rename", leadingIcon: <Pencil size={20} />, selected: true },
            { id: "delete", label: "Delete", leadingIcon: <Trash2 size={20} />, disabled: true },
          ]}
        />
      </div>
    </main>
  );
}
