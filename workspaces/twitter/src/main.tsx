
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { SnackbarProvider } from "@freelancing/ui";
import { ApiProvider } from "./api";
import { AuthProvider } from "./auth";
import App from "./app/App";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <SnackbarProvider>
      <ApiProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ApiProvider>
    </SnackbarProvider>
  </BrowserRouter>,
);
