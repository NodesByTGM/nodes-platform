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

function Sidebar() {
  const paths = [
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
    {
      name: "Trending",
      icon: <Star />,
      path: AppConfig.PATHS.Trending.Base,
    },
  ];
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
