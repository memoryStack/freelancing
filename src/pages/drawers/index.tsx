import { useState } from "react";
import { Drawer, DRAWER_SIDE_SIZES, DRAWER_VARIANTS } from "../../ui";

export function DrawerShowcasePage() {
  const [sideSmallOpen, setSideSmallOpen] = useState(false);
  const [sideMediumOpen, setSideMediumOpen] = useState(false);
  const [sideLargeOpen, setSideLargeOpen] = useState(false);
  const [sideFullOpen, setSideFullOpen] = useState(false);
  const [bottomOpen, setBottomOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white p-12">
      <a href="/" className="inline-block text-blue-600 underline">
        Back to Design System
      </a>

      <h1 className="mt-6 text-3xl font-semibold">Drawers</h1>

      <h2 className="mt-8 text-xl font-semibold">Controlled Side Drawers (All Sizes)</h2>
      <div className="mt-4 flex flex-wrap gap-4">
        <Drawer
          variant={DRAWER_VARIANTS.SIDE}
          sideSize={DRAWER_SIDE_SIZES.SMALL}
          trigger="Open side drawer - SMALL"
          title="Side Sheet (Small)"
          open={sideSmallOpen}
          onOpenChange={setSideSmallOpen}
          onClose={() => setSideSmallOpen(false)}
          showBackButton
          showCloseButton
          showDivider
          actions={[
            { text: "Save", variant: "filled", onClick: () => setSideSmallOpen(false) },
            { text: "Close", variant: "outlined", onClick: () => setSideSmallOpen(false) },
          ]}
        >
          <p className="text-sm text-slate-700">Controlled side drawer with small size.</p>
        </Drawer>

        <Drawer
          variant={DRAWER_VARIANTS.SIDE}
          sideSize={DRAWER_SIDE_SIZES.MEDIUM}
          trigger="Open side drawer - MEDIUM"
          title="Side Sheet (Medium)"
          open={sideMediumOpen}
          onOpenChange={setSideMediumOpen}
          onClose={() => setSideMediumOpen(false)}
          showBackButton
          showCloseButton
          showDivider
          actions={[
            { text: "Save", variant: "filled", onClick: () => setSideMediumOpen(false) },
            { text: "Close", variant: "outlined", onClick: () => setSideMediumOpen(false) },
          ]}
        >
          <p className="text-sm text-slate-700">Controlled side drawer with medium size.</p>
        </Drawer>

        <Drawer
          variant={DRAWER_VARIANTS.SIDE}
          sideSize={DRAWER_SIDE_SIZES.LARGE}
          trigger="Open side drawer - LARGE"
          title="Side Sheet (Large)"
          open={sideLargeOpen}
          onOpenChange={setSideLargeOpen}
          onClose={() => setSideLargeOpen(false)}
          showBackButton
          showCloseButton
          showDivider
          actions={[
            { text: "Save", variant: "filled", onClick: () => setSideLargeOpen(false) },
            { text: "Close", variant: "outlined", onClick: () => setSideLargeOpen(false) },
          ]}
        >
          <p className="text-sm text-slate-700">Controlled side drawer with large size.</p>
        </Drawer>

        <Drawer
          variant={DRAWER_VARIANTS.SIDE}
          sideSize={DRAWER_SIDE_SIZES.FULL}
          trigger="Open side drawer - FULL"
          title="Side Sheet (Full)"
          open={sideFullOpen}
          onOpenChange={setSideFullOpen}
          onClose={() => setSideFullOpen(false)}
          showBackButton
          showCloseButton
          showDivider
          actions={[
            { text: "Save", variant: "filled", onClick: () => setSideFullOpen(false) },
            { text: "Close", variant: "outlined", onClick: () => setSideFullOpen(false) },
          ]}
        >
          <p className="text-sm text-slate-700">
            Controlled side drawer with full size (still constrained by left margin rules).
          </p>
        </Drawer>
      </div>

      <h2 className="mt-10 text-xl font-semibold">Controlled Bottom Drawer</h2>
      <div className="mt-4 flex flex-wrap gap-4">
        <Drawer
          variant={DRAWER_VARIANTS.BOTTOM}
          trigger="Open bottom drawer - CONTROLLED"
          title="Bottom Sheet"
          open={bottomOpen}
          onOpenChange={setBottomOpen}
          onClose={() => setBottomOpen(false)}
          showBackButton={false}
          showCloseButton={false}
          showDivider={false}
          actions={[
            { text: "Apply", variant: "filled", onClick: () => setBottomOpen(false) },
            { text: "Close", variant: "outlined", onClick: () => setBottomOpen(false) },
          ]}
        >
          <p className="text-sm text-slate-700">
            Controlled bottom drawer with custom footer actions.
          </p>
        </Drawer>
      </div>

      <h2 className="mt-10 text-xl font-semibold">Uncontrolled Drawers + Default Footer</h2>
      <div className="mt-4 flex flex-wrap gap-4">
        <Drawer
          variant={DRAWER_VARIANTS.SIDE}
          sideSize={DRAWER_SIDE_SIZES.MEDIUM}
          trigger="Open side drawer - UNCONTROLLED"
          title="Uncontrolled Side Sheet"
          showBackButton
          showCloseButton
          showDivider
        >
          <p className="text-sm text-slate-700">
            Uncontrolled mode. Footer uses default outlined "Close" action.
          </p>
        </Drawer>

        <Drawer
          variant={DRAWER_VARIANTS.SIDE}
          sideSize={DRAWER_SIDE_SIZES.SMALL}
          trigger="Open side drawer - defaultOpen"
          title="Uncontrolled defaultOpen"
          defaultOpen
          showBackButton
          showCloseButton
          showDivider
        >
          <p className="text-sm text-slate-700">
            Uncontrolled mode with <code>defaultOpen</code> and default footer action.
          </p>
        </Drawer>

        <Drawer
          variant={DRAWER_VARIANTS.BOTTOM}
          trigger="Open bottom drawer - UNCONTROLLED"
          title="Uncontrolled Bottom Sheet"
          showBackButton={false}
          showCloseButton={false}
          showDivider={false}
        >
          <p className="text-sm text-slate-700">
            Uncontrolled bottom drawer with default footer.
          </p>
        </Drawer>
      </div>
    </main>
  );
}
