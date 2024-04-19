import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../../components/landingPage";

export default function LandingPageBase() {
  return (
    <div className="min-h-[100vh]">
      <div className="py-4 px-6">
        {" "}
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}
