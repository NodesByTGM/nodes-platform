import { Outlet } from "react-router-dom";
import { Footer, Header, SEO, Sidebar } from "../components";

function Main() {
  return (
    <div className="">
      <SEO />

      <div className="flex max-h-screen h-full">
        <div className="lg:w-[300px] fixed h-full">
          <Sidebar />
        </div>
        <div className="flex-1 ml-[300px]">
          <div className="sticky top-0 z-[9999999999]">
            <Header />
          </div>
          <div className="">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Main;
