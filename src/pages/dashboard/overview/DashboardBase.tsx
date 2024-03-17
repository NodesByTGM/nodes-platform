import React from "react";
import { Outlet } from "react-router-dom";
import DashboardProvider from "../../../context/profile";

export default function DashboardBase() {
  return (
    <div className="min-h-[100vh] main-plain-container">
      <DashboardProvider>
        <Outlet />
      </DashboardProvider>
    </div>
  );
}
