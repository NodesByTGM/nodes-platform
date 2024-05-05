import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import DashboardProvider from "../../../context/dashboard";
import { setBg } from "../../../utilities/common";

export default function DashboardBase() {
  const { pathname } = useLocation();

  return (
    <div
      className={`${setBg(
        pathname,
        "main-bg-yellow-container",
        "main-bg-gray-container"
      )} min-h-[100vh]  main-padding `}
    >
      {" "}
      <DashboardProvider>
        <Outlet />
      </DashboardProvider>
    </div>
  );
}
