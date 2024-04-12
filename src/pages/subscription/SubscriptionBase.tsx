import React from "react";
import { Outlet } from "react-router-dom";
import SubscriptionProvider from "../../context/subscription";

export default function SubscriptionBase() {
  return (
    <div className="min-h-[100vh] main-bg-gray-container main-padding">
      <SubscriptionProvider>
        <Outlet />
      </SubscriptionProvider>
    </div>
  );
}
