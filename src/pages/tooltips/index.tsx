import { CircleHelpIcon } from "lucide-react";
import { IconButton, ICON_BUTTON_VARIANTS, Tooltip, TOOLTIP_VARIANTS } from "../../ui";

export function TooltipShowcasePage() {
  return (
    <main className="min-h-screen bg-white p-12">
      <a href="/" className="inline-block text-blue-600 underline">
        Back to Design System
      </a>

      <h1 className="mt-6 text-3xl font-semibold">Tooltips</h1>
      <p className="mt-2 text-sm text-slate-600">
        Auto behavior: hover-capable devices use Tooltip, touch/coarse devices use Popover.
      </p>

      <div className="mt-8 flex items-center gap-8">
        <Tooltip
          variant={TOOLTIP_VARIANTS.PLAIN}
          trigger={
            <IconButton
              variant={ICON_BUTTON_VARIANTS.STANDARD}
              icon={<CircleHelpIcon />}
              aria-label="Open plain tooltip"
            />
          }
          content="Plain tooltip"
        />

        <Tooltip
          variant={TOOLTIP_VARIANTS.RICH}
          trigger={
            <IconButton
              variant={ICON_BUTTON_VARIANTS.STANDARD}
              icon={<CircleHelpIcon />}
              aria-label="Open rich tooltip"
            />
          }
          subhead="Rich tooltip"
          content="Rich tooltips bring attention to a particular element or feature that warrants a person's focus."
          action={{ text: "Action", onClick: () => {}, variant: "text" }}
        />
      </div>
    </main>
  );
}
