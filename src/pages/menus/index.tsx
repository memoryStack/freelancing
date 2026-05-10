import { Copy, Eye, MoreHorizontal, Pencil, ChevronRight } from "lucide-react";
import { Button, Menu } from "@freelancing/ui";

export function MenuShowcasePage() {
  return (
    <main className="min-h-screen bg-white p-12">
      <a href="/" className="inline-block text-blue-600 underline">
        Back to Design System
      </a>

      <h1 className="mt-6 text-3xl font-semibold">Menus</h1>
      <p className="mt-2 text-sm text-gray-600">
        Simple flattened menu (trigger + list items). Nested, checkbox, and radio menu items are intentionally omitted.
      </p>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Click or hover trigger</h2>
        <div className="mt-3 flex items-center gap-4">
          <Menu
            trigger={<Button variant="outlined">Open Menu</Button>}
            items={[
              { id: "item-1", label: "Item 1", leadingIcon: <Eye size={20} /> },
              { id: "item-2", label: "Item 2", leadingIcon: <Copy size={20} />, selected: true },
              {
                id: "item-3",
                label: "Item 3",
                leadingIcon: <Pencil size={20} />,
                trailingIcon: <ChevronRight size={20} />,
                active: true,
              },
              { id: "item-4", label: "Item 4", trailingText: "⌘C", disabled: true },
            ]}
          />

          <Menu
            trigger={
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300">
                <MoreHorizontal size={18} />
              </button>
            }
            items={[
              { id: "rename", label: "Rename", trailingText: "R" },
              { id: "share", label: "Share", trailingText: "S" },
              { id: "archive", label: "Archive", disabled: true, trailingText: "⌘A" },
            ]}
          />
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Optional backdrop</h2>
        <div className="mt-3">
          <Menu
            trigger={<Button variant="filled-tonal">Menu with Backdrop</Button>}
            showBackdrop
            modal
            openOnHover={false}
            items={[
              { id: "profile", label: "Profile" },
              { id: "settings", label: "Settings" },
              { id: "logout", label: "Log out" },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
