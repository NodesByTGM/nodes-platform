import React from "react";
import { Outlet } from "react-router-dom";
import CommunityProvider from "../../context/community";

export default function CommunityBase() {
  return (
    <div className="min-h-[100vh] main-bg-gray">
      <CommunityProvider>
        <Outlet />
      </CommunityProvider>
    </div>
  );
}
