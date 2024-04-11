import React, { useState, useEffect } from "react";
import {
  Box,
  Briefcase,
  Globe,
  Home,
  User,
  Bookmark,
  Circle,
  Star,
  ChevronDown,
  ChevronUp,
} from "react-feather";
import { NavLink, useLocation } from "react-router-dom";
import AppConfig from "../utilities/config";
import { SearchComponent } from "../components";
import { useSelector } from "react-redux";
import { RootState } from "../store";
function Sidebar() {
  const user = useSelector((state: RootState) => state.user.user);
  const [showBusinessChild, setShowBusinessChild] = useState(false);
  const location = useLocation();

  // console.log(JSON.stringify(user?.subscription, null, 2));
  const initialPaths = [
    { name: "Dashboard", icon: <Home />, path: AppConfig.PATHS.Dashboard.Base },
    {
      name: "Profile",
      icon: <User />,
      path: AppConfig.PATHS.Dashboard.Profile.Base,
    },
    { name: "Discover", icon: <Globe />, path: AppConfig.PATHS.Spaces.Base },
    { name: "Saved", icon: <Bookmark />, path: AppConfig.PATHS.Saved.Base },

    {
      name: "For Business",
      icon: <Briefcase />,
      path: AppConfig.PATHS.Business.Base,
      showChild: false,
      children: [
        {
          name: "Dashboard",
          icon: <Briefcase />,
          path: AppConfig.PATHS.Business.Base,
        },
        {
          name: "Profile",
          icon: <Briefcase />,
          path: "/",
        },
      ],
    },

    {
      name: "Subscriptions",
      icon: <Box />,
      path: AppConfig.PATHS.Subscription.Base,
    },
    {
      name: "Grid Tools",
      icon: <Circle />,
      path: AppConfig.PATHS.GridTools,
    },
  ];

  const trendPath = {
    name: "Trending",
    icon: <Star />,
    path: AppConfig.PATHS.Trending.Base,
  };
  const [paths, setPaths] = useState(initialPaths);

  useEffect(() => {
    if (
      user?.subscription?.plan?.includes("Pro") ||
      user?.subscription?.plan?.includes("pro") ||
      user?.subscription?.plan?.includes("business") ||
      user?.subscription?.plan?.includes("Business")
    ) {
      // alert(user?.subscription?.plan?.includes("Business"));

      setPaths([...initialPaths, trendPath]);
    } else {
      setPaths([...initialPaths]);
    }
  }, [user]);
  return (
    <div className="w-full transition-all duration-300 h-full border-r border-gray-300 px-6">
      {/* <div className="mt-3 pb-4 border-b p-3 mb-4">
                <Menu />
            </div> */}

      <div className="flex flex-col gap-8 pt-8 pb-6">
        <div className="flex items-center gap-2">
          <img src="/nodes-logo-black.svg" alt="" className="h-[24px] " />
          <span className="font-semibold text-[#212121] text-[18px]">
            Nodes
          </span>
        </div>

        <SearchComponent />
      </div>
      <div className="flex flex-col gap-5 ">
        {paths.map((r, i) => (
          <div className="w-full">
            {r?.children ? (
              <div
                onClick={() => {
                  setShowBusinessChild(!showBusinessChild);
                }}
                key={i}
                className="cursor-pointer"
              >
                <div
                  className={`${
                    location.pathname === r?.path || showBusinessChild
                      ? "bg-customsecondary text-white navLink"
                      : "bg-none text-primary navLink"
                  }`}
                >
                  <div>{r.icon}</div>
                  <div className="hidden lg:flex justify-between items-center gap-2 w-full">
                    <span className="">{r.name}</span>
                    {r?.children ? (
                      <div className="">
                        {showBusinessChild ? <ChevronUp /> : <ChevronDown />}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={i}
                to={String(r.path)}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "bg-customsecondary text-white navLink"
                    : isPending
                    ? "bg-customsecondary text-white navLink"
                    : "navLink"
                }
              >
                <div>{r.icon}</div>
                <div className="hidden lg:flex justify-between items-center gap-2 w-full">
                  <span className="">{r.name}</span>
                  {r?.children && <ChevronDown />}
                </div>
              </NavLink>
            )}
            {r.children ? (
              <div className="">
                {showBusinessChild ? (
                  <div className="flex flex-col gap-4 py-4 pl-4">
                    {r.children?.map((child) => (
                      <NavLink
                        key={child.name}
                        to={String(child.path)}
                        className={({ isActive, isPending }) =>
                          isActive
                            ? "bg-secondary text-primary childNavLink"
                            : isPending
                            ? "bg-none text-primary childNavLink"
                            : "childNavLink"
                        }
                      >
                        <div className="hidden lg:block">{child.name}</div>
                      </NavLink>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
