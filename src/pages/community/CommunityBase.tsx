import React from "react";
import { Outlet } from "react-router-dom";
// import DashboardProvider from "../../context/dashboard";

export default function CommunityBase() {
  return (
    <div className="min-h-[100vh] main-plain-container">
      {/* <DashboardProvider> */}
        
        <Outlet />
      {/* </DashboardProvider> */}
    </div>
  );
}
