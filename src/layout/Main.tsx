import React, { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";
import { Footer, Header, SEO, Sidebar, FloatingAppHeader } from "../components";
import { useLocation } from "react-router-dom";
import { setBg } from "../utilities/common";

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <div className="">{children}</div>;
};

function Main() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <ScrollToTop>
      <div className="w-[100vw]">
        <SEO />

        <div className=" w-full h-full">
          <div className="hidden lg:block lg:w-[300px] fixed h-full">
            <Sidebar />
          </div>
          <div className="flex-1 lg:ml-[300px] h-fit">
            <div className="hidden lg:block sticky top-0 z-[99]">
              <div className=" w-full">
                <Header />
              </div>
            </div>

            <div
              className={`${setBg(
                pathname,
                "main-bg-yellow",
                "main-bg-gray"
              )} block lg:hidden py-4  sticky top-0 z-[99]`}
            >
              <div className="max-w-max ml-auto main-padding">
                <FloatingAppHeader
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                >
                  <Sidebar isModal closeModal={() => setSidebarOpen(false)} />
                </FloatingAppHeader>
              </div>
            </div>
            <div className="">
              {/* <div className="bg-red-200">sss</div> */}
              <Outlet />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </ScrollToTop>
  );
}

export default Main;
