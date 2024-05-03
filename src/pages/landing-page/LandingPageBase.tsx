import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  Header,
  Footer,
  FloatingHeader,
  AboutUsHeroSection,
} from "../../components/landingPage";
function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // window.scrollTo(0, 0);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds smooth scrolling behavior
    });
  }, [pathname]);

  return <div className="">{children}</div>;
}
export default function LandingPageBase() {
  const { pathname } = useLocation();

  return (
    <ScrollToTop>
      <div className="min-h-[100vh] bg-[#ffffff] relative">
        <div className="py-4 lg:py-6 px-6 sticky top-0 bg-[#ffffff] w-full z-[1000000] shadow lg:shadow-none">
          <div className="hidden lg:block w-full">
            <Header />
          </div>
          <div className="block lg:hidden max-w-max ml-auto ">
            <FloatingHeader />
          </div>
        </div>
        {pathname.toLowerCase() === "/about-us" && <AboutUsHeroSection />}

        <Outlet />
        <Footer />
      </div>
    </ScrollToTop>
  );
}
