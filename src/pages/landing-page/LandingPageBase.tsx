import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../../components/landingPage";

export default function LandingPageBase() {
  return (
    <div className="min-h-[100vh] bg-[#ffffff]">
      <div className="py-6 px-6">
        {" "}
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}
