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
import { CheckboxShowcasePage } from "../pages/checkboxes";
import { RadioShowcasePage } from "../pages/radios";
import { LoaderShowcasePage } from "../pages/loaders";
import { MenuShowcasePage } from "../pages/menus";
import { ContextMenuShowcasePage } from "../pages/context-menus";
import { FieldShowcasePage } from "../pages/fields";
import { TextAreaShowcasePage } from "../pages/textareas";
import { SelectShowcasePage } from "../pages/selects";

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

  if (window.location.pathname === "/checkboxes") {
    return <CheckboxShowcasePage />;
  }

  if (window.location.pathname === "/radios") {
    return <RadioShowcasePage />;
  }

  if (window.location.pathname === "/loaders") {
    return <LoaderShowcasePage />;
  }

  if (window.location.pathname === "/menus") {
    return <MenuShowcasePage />;
  }

  if (window.location.pathname === "/context-menus") {
    return <ContextMenuShowcasePage />;
  }

  if (window.location.pathname === "/fields") {
    return <FieldShowcasePage />;
  }

  if (window.location.pathname === "/textareas") {
    return <TextAreaShowcasePage />;
  }

  if (window.location.pathname === "/selects") {
    return <SelectShowcasePage />;
  }

  return <HomePage />;
}
