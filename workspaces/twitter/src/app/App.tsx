import { Route, Routes } from "react-router";
import { RequireAuth } from "../auth/AuthContext";
import AppLayout from "./AppLayout";
import Home from "../pages/home";
import { LoginPage } from "../pages/login";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route element={<RequireAuth />}>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
}
