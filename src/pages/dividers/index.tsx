import {
  Divider,
  type DividerStrength,
  DIVIDER_STRENGTHS,
} from "../../ui";

export function DividerShowcasePage() {
  return (
    <main className="min-h-screen bg-white p-12">
        <a href="/" className="inline-block text-blue-600 underline">
            Back to Design System
        </a>

        <h1 className="mt-6 text-3xl font-semibold">Dividers</h1>
        <p className="mt-2 text-sm text-slate-600">Default Divider</p>
        <Divider />
        <p className="mt-2 text-sm text-slate-600">Strong Divider</p>
        <Divider strength={DIVIDER_STRENGTHS.STRONG} />
        <p className="mt-2 text-sm text-slate-600">Divider with custom thickness</p>
        <Divider thickness="2px" />
        <p className="mt-2 text-sm text-slate-600">Divider with custom color</p>
        <Divider color="var(--md-sys-color-primary)" />

        <p className="mt-2 text-sm text-slate-600">Vertical Divider Default</p>
        <div className="h-20 w-full">
            <Divider orientation="vertical" />
        </div>
        <p className="mt-2 text-sm text-slate-600">Vertical Divider with custom thickness</p>
        <div className="h-20 w-full">
        <Divider
            orientation="vertical"
            length="100%"
            thickness="3px"
            color="var(--md-sys-color-secondary)"
        />
        </div>
    </main>
  );
}
