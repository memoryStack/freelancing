
import { createRoot } from "react-dom/client";
import { SnackbarProvider } from "@freelancing/ui";
import { ApiProvider } from "./api";
import App from "./app/App";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <SnackbarProvider>
    <ApiProvider>
      <App />
    </ApiProvider>
  </SnackbarProvider>,
);
