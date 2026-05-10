import { HeartIcon } from "lucide-react";
import {
  IconButton,
  ICON_BUTTON_SIZES,
  ICON_BUTTON_VARIANTS,
  ICON_BUTTON_WIDTH_VARIANTS,
  type IconButtonSize,
  type IconButtonVariant,
  type IconButtonWidthVariant,
} from "@freelancing/ui";

const VARIANTS = Object.values(ICON_BUTTON_VARIANTS) as IconButtonVariant[];
const SIZES = Object.values(ICON_BUTTON_SIZES) as IconButtonSize[];
const WIDTH_VARIANTS = Object.values(
  ICON_BUTTON_WIDTH_VARIANTS,
) as IconButtonWidthVariant[];

export function IconButtonShowcasePage() {
  return (
    <main className="min-h-screen bg-white p-12">
      <a href="/" className="inline-block text-blue-600 underline">
        Back to Design System
      </a>

      <h1 className="mt-6 text-3xl font-semibold">Icon Buttons - All Variants</h1>
      <p className="mt-2 text-sm text-slate-600">
        4 appearance variants x 5 size variants x 3 width variants = 60 icon
        buttons
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8">
        {VARIANTS.map((variant) => (
          <section key={variant} className="rounded-lg border border-slate-200 p-6">
            <h2 className="text-lg font-semibold">{variant}</h2>

            <div className="mt-4 grid grid-cols-1 gap-4">
              {SIZES.map((size) => (
                <div key={`${variant}-${size}`} className="rounded-md border border-slate-100 p-4">
                  <h3 className="text-sm font-medium">{size}</h3>

                  <div className="mt-3 flex flex-wrap items-center gap-4">
                    {WIDTH_VARIANTS.map((widthVariant) => (
                      <div
                        key={`${variant}-${size}-${widthVariant}`}
                        className="flex flex-col items-center gap-2"
                      >
                        <IconButton
                          variant={variant}
                          size={size}
                          widthVariant={widthVariant}
                          icon={<HeartIcon />}
                          aria-label={`${variant}-${size}-${widthVariant}`}
                        />
                        <span className="text-xs text-slate-500">{widthVariant}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
