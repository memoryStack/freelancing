import { HomePage } from '../pages/home';
import { IconButtonShowcasePage } from "../pages/icon-buttons";
import { DividerShowcasePage } from "../pages/dividers";
import { CardShowcasePage } from "../pages/card";
import { DrawerShowcasePage } from "../pages/drawers";
import { TooltipShowcasePage } from "../pages/tooltips";
import { TextShowcasePage } from "../pages/text";
import { SnackbarShowcasePage } from "../pages/snackbars";
import { DialogShowcasePage } from "../pages/dialogs";
import { SwitchShowcasePage } from "../pages/switches";

export default function App() {
  if (window.location.pathname === "/icon-buttons") {
    return <IconButtonShowcasePage />;
  }

  if (window.location.pathname === "/dividers") {
    return <DividerShowcasePage />;
  }
  if (window.location.pathname === "/cards") {
    return <CardShowcasePage />;
  }

  if (window.location.pathname === "/drawers") {
    return <DrawerShowcasePage />;
  }

  if (window.location.pathname === "/tooltips") {
    return <TooltipShowcasePage />;
  }

  if (window.location.pathname === "/text") {
    return <TextShowcasePage />;
  }

  if (window.location.pathname === "/snackbars") {
    return <SnackbarShowcasePage />;
  }

  if (window.location.pathname === "/dialogs") {
    return <DialogShowcasePage />;
  }

  if (window.location.pathname === "/switches") {
    return <SwitchShowcasePage />;
  }

  return <HomePage />;
}
