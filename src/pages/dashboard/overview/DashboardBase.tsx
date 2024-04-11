import React from "react";
import { Outlet } from "react-router-dom";
import DashboardProvider from "../../../context/dashboard";

export default function DashboardBase() {
  return (
    <div className="min-h-[100vh] main-bg-gray-container">
      <DashboardProvider>
        
        <Outlet />
      </DashboardProvider>
    </div>
  );
}
