import React from "react";
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
import AppConfig from "../utilities/config";

export const standardPaths = [
  {
    id: "standardPathsDashboard",
    name: "Dashboard",
    icon: <Home />,
    path: AppConfig.PATHS.Dashboard.Base,
  },
  {
    id: "standardPathsProfile",
    name: "Profile",
    icon: <User />,
    path: AppConfig.PATHS.Dashboard.Profile.Base,
  },
  {
    id: "standardPathsDiscover",
    name: "Discover",
    icon: <Globe />,
    path: AppConfig.PATHS.Community.Base,
  },

  {
    id: "standardPathsBusiness",
    name: "For Business",
    icon: <Briefcase />,
    path: AppConfig.PATHS.Business.Base,
    showChild: false,
    children: [
      {
        id: "standardPathsBusinnessDashboard",
        name: "Dashboard",
        icon: <Briefcase />,
        path: AppConfig.PATHS.Business.Dashboard,
      },
      // {
      //   name: "Profile",
      //   icon: <Briefcase />,
      //   path: AppConfig.PATHS.Business.Profile,
      // },
    ],
  },

  {
    id: "standardPathsUpgradePlan",
    name: "Upgrade Plan",
    icon: <Box />,
    path: AppConfig.PATHS.Subscription.Base,
  },
  {
    id: "standardPathsGridTools",
    name: "Grid Tools",
    icon: <Circle />,
    path: AppConfig.PATHS.GridTools,
  },
];
export const proPaths = [
  {
    id: "proPathsDashboard",
    name: "Dashboard",
    icon: <Home />,
    path: AppConfig.PATHS.Dashboard.Base,
  },
  {
    id: "proPathsProfile",
    name: "Profile",
    icon: <User />,
    path: AppConfig.PATHS.Dashboard.Profile.Base,
  },
  {
    id: "proPathsDiscover",
    name: "Discover",
    icon: <Globe />,
    path: AppConfig.PATHS.Community.Base,
  },
  {
    id: "proPathsSaved",
    name: "Saved",
    icon: <Bookmark />,
    path: AppConfig.PATHS.Saved.Base,
  },

  {
    id: "proPathsBusiness",
    name: "For Business",
    icon: <Briefcase />,
    path: AppConfig.PATHS.Business.Base,
    showChild: false,
    children: [
      {
        id: "proPathsBusinessDashboard",
        name: "Dashboard",
        icon: <Briefcase />,
        path: AppConfig.PATHS.Business.Dashboard,
      },
      {
        id: "proPathsBusinessProfile",
        name: "Profile",
        icon: <Briefcase />,
        path: AppConfig.PATHS.Business.Profile,
      },
    ],
  },

  {
    id: "proPathsSubscriptions",
    name: "Subscriptions",
    icon: <Box />,
    path: AppConfig.PATHS.Subscription.Base,
  },
  {
    id: "proPathsGridTools",
    name: "Grid Tools",
    icon: <Circle />,
    path: AppConfig.PATHS.GridTools,
  },
  {
    id: "proPathsTrending",
    name: "Trending",
    icon: <Star />,
    path: AppConfig.PATHS.Trending.Base,
  },
];
export const businessPaths = [
  {
    id: "businessPathsDashboard",
    name: "Dashboard",
    icon: <Home />,
    path: AppConfig.PATHS.Dashboard.Base,
  },
  {
    id: "businessPathsProfile",
    name: "Profile",
    icon: <User />,
    path: AppConfig.PATHS.Dashboard.Profile.Base,
  },
  {
    id: "businessPathsDiscover",
    name: "Discover",
    icon: <Globe />,
    path: AppConfig.PATHS.Community.Base,
  },
  {
    id: "businessPathsSaved",
    name: "Saved",
    icon: <Bookmark />,
    path: AppConfig.PATHS.Saved.Base,
  },

  {
    id: "businessPathsBusinness",
    name: "For Business",
    icon: <Briefcase />,
    path: AppConfig.PATHS.Business.Base,
    showChild: false,
    children: [
      {
        id: "businessPathsBusinessDashboard",
        name: "Dashboard",
        icon: <Briefcase />,
        path: AppConfig.PATHS.Business.Dashboard,
      },
      {
        id: "businessPathsBusinessProfile",
        name: "Profile",
        icon: <Briefcase />,
        path: AppConfig.PATHS.Business.Profile,
      },
    ],
  },

  {
    id: "businessPathsSubscriptions",
    name: "Subscriptions",
    icon: <Box />,
    path: AppConfig.PATHS.Subscription.Base,
  },
  {
    id: "businessPathsGridTools",
    name: "Grid Tools",
    icon: <Circle />,
    path: AppConfig.PATHS.GridTools,
  },
  {
    id: "businessPathsTrending",
    name: "Trending",
    icon: <Star />,
    path: AppConfig.PATHS.Trending.Base,
  },
];

export  function addBreakToString(str, breakPoint) {
  if (str.length <= breakPoint) {
    return str; // No need for a break
  }

  const firstPart = str.substring(0, breakPoint);
  const secondPart = str.substring(breakPoint);

  return (
    <p>
      {firstPart}
      <br />
      {secondPart}
    </p>
  );
}
