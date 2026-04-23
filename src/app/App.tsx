import { HomePage } from '../pages/home';
import { IconButtonShowcasePage } from "../pages/icon-buttons";
import { DividerShowcasePage } from "../pages/dividers";
import { CardShowcasePage } from "../pages/card";
import { DrawerShowcasePage } from "../pages/drawers";

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

  return <HomePage />;
}
