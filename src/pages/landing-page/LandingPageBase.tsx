import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer, FloatingHeader } from "../../components/landingPage";

export default function LandingPageBase() {
  return (
    <div className="min-h-[100vh] bg-[#ffffff] relative">
      <div className="py-6 px-6 sticky top-0 bg-[#ffffff] w-full z-[1000000] shadow lg:shadow-none">
        <div className="hidden lg:block w-full">
          {" "}
          <Header />
        </div>
        <div className="block lg:hidden max-w-max ml-auto ">
          {" "}
          <FloatingHeader />
        </div>
      </div>

      <Outlet />
      <Footer />
    </div>
  );
}
