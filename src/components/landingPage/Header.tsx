import React from "react";
import AppConfig from "../../utilities/config";
import { NavLink } from "react-router-dom";
import { Button } from "../../components";
import { Smartphone } from "react-feather";
export default function Header() {
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
    <div className="landingPageMainDiv">
      <div className="flex justify-between w-full">
        <div className="flex gap-10 items-center">
          <NavLink to="/" className="cursor-pointer">
            <img src="/NodesLogoPrimary.png" alt="" className="h-8" />
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
          <button className="p-4 rounded-[5px] bg-white border-[#D6D6D6] border text-customprimary">
            <div className="flex items-center gap-2">
              {" "}
              <Smartphone className="w-4" />
             <span className="font-medium text-base"> Download app</span>
            </div>
          </button>

          <NavLink to={AppConfig.PATHS.Auth.Register}>
            <Button className="!py-4 max-w-max !border-none !rounded !bg-customprimary">
              Sign Up
            </Button>
          </NavLink>
          <NavLink to={AppConfig.PATHS.Auth.Login}>
            {" "}
            <span className="">Log In</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}