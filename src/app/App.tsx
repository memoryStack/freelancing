import { HomePage } from '../pages/home';
import { IconButtonShowcasePage } from "../pages/icon-buttons";
import { DividerShowcasePage } from "../pages/dividers";
import { CardShowcasePage } from "../pages/card";

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

  return <HomePage />;
}
