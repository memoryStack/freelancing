import { TEXT_COLORS, Text, TYPOGRAPHY, type TypographyVariant } from "../../ui";

const TYPOGRAPHY_VARIANTS = Object.values(TYPOGRAPHY) as TypographyVariant[];

export function TextShowcasePage() {
  return (
    <main className="min-h-screen bg-white p-12">
      <a href="/" className="inline-block text-blue-600 underline">
        Back to Design System
      </a>

      <h1 className="mt-6 text-3xl font-semibold">Text / Typography</h1>
      <p className="mt-2 text-sm text-slate-600">
        15 variants across display, headline, title, label, and body.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4">
        {TYPOGRAPHY_VARIANTS.map((variant) => (
          <section key={variant} className="rounded-md border border-slate-200 p-4">
            <p className="mb-2 text-xs text-slate-500">{variant}</p>
            <Text variant={variant}>The quick brown fox jumps over the lazy dog.</Text>
            <Text className="mt-2 block" variant={variant} colorVariant={TEXT_COLORS.SUBTLE}>
              The quick brown fox jumps over the lazy dog. (subtle)
            </Text>
          </section>
        ))}
      </div>
    </main>
  );
}
