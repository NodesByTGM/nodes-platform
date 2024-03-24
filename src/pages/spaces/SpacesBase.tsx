import React from "react";
import { Outlet } from "react-router-dom";
import SpacesProvider from "../../context/spaces";

export default function SpacesBase() {
  return (
    <div className="min-h-[100vh] main-plain-container">
      <SpacesProvider>
        <Outlet />
      </SpacesProvider>
    </div>
  );
}
