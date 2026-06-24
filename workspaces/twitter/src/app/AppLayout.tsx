import { Outlet } from "react-router";
import Header from "../components/layout/Header";

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
