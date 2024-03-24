import React from "react";
import { Outlet } from "react-router-dom";

export default function SpacesBase() {
  return (
    <div className="min-h-[100vh] main-plain-container">
      <Outlet />
    </div>
  );
}
