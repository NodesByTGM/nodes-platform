import { RouteObject } from "react-router-dom";
import { checkAuth, getProfile } from "../components/hoc";
import {
  BusinessGetStarted,
  BusinessOnboarding,
  BusinessUpgrade,
  Category,
  Subscription,
  SubscriptionBase,
  Community,
  CommunityBase,
  Spaces,
  SpacesBase,
  DashboardBase,
  Dashboard,
  ViewAll,
  ViewDetail,
  SeeMoreJobs,
  BusinessDashboard,
  Details,
  ForgotPassword,
  Home,
  Login,
  Post,
  ProfileBase,
  Profile,
  EditProfile,
  EditTalent,
  ResetPassword,
  TalentGetStarted,
  TalentOnboarding,
  TalentUpgrade,
  Pricing,
} from "../pages";
import AppConfig from "./config";

export const authRoutes: RouteObject[] = [
  {
    path: AppConfig.PATHS.Auth.Login,
    Component: Login,
  },
  // {
  //     path: AppConfig.PATHS.Auth.Register,
  //     Component: Register
  // },
  {
    path: AppConfig.PATHS.Auth.ForgotPassword,
    Component: ForgotPassword,
  },
  {
    path: AppConfig.PATHS.Auth.ResetPasswordWithParams,
    Component: ResetPassword,
  },
];

export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: AppConfig.PATHS.Dashboard.Base,
    Component: getProfile(DashboardBase),
    children: [
      {
        path: AppConfig.PATHS.Dashboard.Dashboard,
        Component: getProfile(Dashboard),
      },
      {
        path: AppConfig.PATHS.Dashboard.ViewAll,
        Component: getProfile(ViewAll),
      },
      {
        path: AppConfig.PATHS.Dashboard.ViewDetail,
        Component: getProfile(ViewDetail),
      },

      {
        path: AppConfig.PATHS.Dashboard.SeeMore,
        Component: getProfile(SeeMoreJobs),
      },
      {
        path: AppConfig.PATHS.Dashboard.Business,
        Component: getProfile(BusinessDashboard),
      },
      {
        path: AppConfig.PATHS.Dashboard.Details,
        Component: getProfile(Details),
      },
    ],
  },
  {
    path: AppConfig.PATHS.Dashboard.Categories.CategoryWithParam,
    Component: getProfile(Category),
  },
  {
    path: AppConfig.PATHS.Dashboard.Posts.PostWithParam,
    Component: getProfile(Post),
  },
  {
    path: AppConfig.PATHS.Community.Base,
    Component: getProfile(CommunityBase),
    children: [
      {
        path: AppConfig.PATHS.Community.Overview,
        Component: getProfile(Community),
      },
    ],
  },
  {
    path: AppConfig.PATHS.Spaces.Base,
    Component: getProfile(SpacesBase),
    children: [
      {
        path: AppConfig.PATHS.Spaces.Overview,
        Component: getProfile(Spaces),
      },
    ],
  },
  {
    path: AppConfig.PATHS.Subscription.Base,
    Component: getProfile(SubscriptionBase),
    children: [
      {
        path: AppConfig.PATHS.Subscription.Subscription,
        Component: getProfile(Subscription),
      },
    ],
  },

  {
    path: AppConfig.PATHS.Dashboard.Profile.Base,
    Component: getProfile(ProfileBase),
    children: [
      {
        path: AppConfig.PATHS.Dashboard.Profile.Profile,
        Component: Profile,
      },
      {
        path: AppConfig.PATHS.Dashboard.Profile.EditProfile,
        Component: EditProfile,
      },
      {
        path: AppConfig.PATHS.Dashboard.Profile.EditTalent,
        Component: EditTalent,
      },
    ],
  },
];

export const upgradeRoutes: RouteObject[] = [
  {
    path: AppConfig.PATHS.Upgrades.Talent.Base,
    Component: checkAuth(TalentUpgrade),
  },
  {
    path: AppConfig.PATHS.Upgrades.Pricing.Base,
    Component: checkAuth(Pricing),
  },
  {
    path: AppConfig.PATHS.Upgrades.Business.Base,
    Component: checkAuth(BusinessUpgrade),
  },
  {
    path: AppConfig.PATHS.Upgrades.Talent.GetStarted,
    Component: checkAuth(TalentGetStarted),
  },
  {
    path: AppConfig.PATHS.Upgrades.Business.GetStarted,
    Component: checkAuth(BusinessGetStarted),
  },
  {
    path: AppConfig.PATHS.Upgrades.Talent.Onboarding,
    Component: checkAuth(TalentOnboarding),
  },
  {
    path: AppConfig.PATHS.Upgrades.Business.Onboarding,
    Component: checkAuth(BusinessOnboarding),
  },
];
