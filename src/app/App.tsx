import { HomePage } from '../pages/home';
import { IconButtonShowcasePage } from "../pages/icon-buttons";

export default function App() {
  if (window.location.pathname === "/icon-buttons") {
    return <IconButtonShowcasePage />;
  }

  return <HomePage />;
}
