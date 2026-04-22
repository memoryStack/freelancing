import { HomePage } from '../pages/home';
import { IconButtonShowcasePage } from "../pages/icon-buttons";
import { DividerShowcasePage } from "../pages/dividers";

export default function App() {
  if (window.location.pathname === "/icon-buttons") {
    return <IconButtonShowcasePage />;
  }

  if (window.location.pathname === "/dividers") {
    return <DividerShowcasePage />;
  }

  return <HomePage />;
}
