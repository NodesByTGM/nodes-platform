import React from "react";
import AppConfig from "../../utilities/config";
import { NavLink } from "react-router-dom";
import { Button } from "../../components";
import { Smartphone } from "react-feather";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
export default function Header() {
  const user = useSelector((state: RootState) => state?.user?.user);

  const navs = [
    {
      label: "About Us",
      link: AppConfig.PATHS.LandingPage.AboutUs,
    },
    {
      label: "For Business",
      link: AppConfig.PATHS.LandingPage.Business,
    },
    {
      label: "For Talent",
      link: AppConfig.PATHS.LandingPage.Talent,
    },
  ];
  return (
    <div className=" landingPageMainDiv !z-[100000000]">
      <div className="flex justify-between w-full ">
        <div className="flex gap-10 items-center ">
          <NavLink to="/" className=" cursor-pointer">
            <img src="/landing-page-logo.svg" alt="" className="h-8" />
          </NavLink>

          <div className="flex gap-8">
            {navs.map((nav) => (
              <NavLink
                key={nav.label}
                to={nav.link}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? `cursor-pointer font-medium text-base text-[#0C5C56]`
                    : `cursor-pointer font-medium text-base text-[#000000]`
                }
              >
                {" "}
                <span className={``}>{nav.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-4 rounded-[8px] bg-white border-[#D6D6D6] border text-primary">
            <div className="flex items-center gap-2">
              {" "}
              <Smartphone className="w-4" />
              <span className="font-medium text-base"> Download app</span>
            </div>
          </button>

          {!user?.id ? (
            <div className="flex items-center gap-2">
              <NavLink to={AppConfig.PATHS.Auth.Register}>
                <Button className="!py-4 max-w-max !border-none !rounded-lg !bg-primary">
                  Sign Up
                </Button>
              </NavLink>
              <NavLink to={AppConfig.PATHS.Auth.Login}>
                {" "}
                <span className="">Log In</span>
              </NavLink>
            </div>
          ) : (
            <NavLink to={'/Dashboard'}>
              {" "}
              <Button className="!py-4 max-w-max !border-none !rounded-lg !bg-primary">
                 Dashboard
                </Button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}
