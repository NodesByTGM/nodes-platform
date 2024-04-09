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
} from "react-feather";
import { NavLink } from "react-router-dom";
import AppConfig from "../utilities/config";
import { SearchComponent } from "../components";
import { useSelector } from "react-redux";
import { RootState } from "../store";
function Sidebar() {
  const user = useSelector((state: RootState) => state.user.user);
  // console.log(JSON.stringify(user.subscription, null, 2));
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
      user.subscription?.plan.includes("Pro") ||
      user.subscription?.plan.includes("pro") ||
      user.subscription?.plan.includes("business") ||
          user.subscription?.plan.includes("Business")
    ) {
      // alert(user.subscription?.plan.includes("Business"));

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
        <img
          src="/NodesLogoPrimary.png"
          alt=""
          className="h-[24px] w-[89.37px]"
        />

        <SearchComponent />
      </div>
      <div className="flex flex-col gap-5 ">
        {paths.map((r, i) => (
          <NavLink
            to={String(r.path)}
            className={({ isActive, isPending }) =>
              isActive
                ? "bg-customsecondary text-white navLink"
                : isPending
                ? "bg-customsecondary text-white navLink"
                : "navLink"
            }
            key={i}
          >
            <div>{r.icon}</div>
            <div className="hidden lg:block">{r.name}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
