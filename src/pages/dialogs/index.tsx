import { CircleAlertIcon } from "lucide-react";
import { Button, Dialog } from "@freelancing/ui";

export function DialogShowcasePage() {
  return (
    <main className="min-h-screen bg-white p-12">
      <a href="/" className="inline-block text-blue-600 underline">
        Back to Design System
      </a>

      <h1 className="mt-6 text-3xl font-semibold">Dialogs</h1>

      <div className="mt-8 flex flex-wrap gap-4">
        <Dialog
          trigger={<Button variant="filled">Open basic dialog</Button>}
          title="Basic dialog title"
          description="A dialog is a modal window that appears in front of app content to provide critical information or prompt for a decision to be made."
          primaryAction={{ text: "Action 1" }}
        />

        <Dialog
          trigger={<Button variant="filled">Open icon dialog</Button>}
          icon={<CircleAlertIcon />}
          title="Dialog with hero icon"
          description="A dialog is a modal window that appears in front of app content to provide critical information or ask for a decision."
          primaryAction={{ text: "Accept" }}
        />

        <Dialog
          trigger={<Button variant="filled">Open required-only dialog</Button>}
          description="This dialog demonstrates the minimum contract: description plus cancel button."
          showDivider={false}
        />
      </div>
    </main>
  );
}
