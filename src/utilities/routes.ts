import { RouteObject } from "react-router-dom";
import { checkAuth, getProfile } from "../components/hoc";
import {
  GoogleSocial,
  BusinessGetStarted,
  BusinessOnboarding,
  BusinessUpgrade,
  Category,
  GridTools,
  Saved,
  SavedBase,
  Subscription,
  SubscriptionBase,
  Trending,
  TrendingBase,
  MakePayment,
  Community,
  CommunityBase,
  Space,
  Spaces,
  SpacesBase,
  DashboardBase,
  Dashboard,
  ViewAll,
  ViewDetail,
  SeeMoreJobs,
  BusinessDashboard,
  BusinessProfile,
  EditBusinessProfile,
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
  AccountSettingsBase,
  LandingPageBase,
  LandingPage,
  AboutUsPage,
  BusinessPage,
  TalentPage,
  ViewMoreIndex,
  ViewMoreEventsIndex
} from "../pages";
import {
  AdminAuthBase,
  AdminLogin,
  AdminSignup,
  AdminForgotPassword,
  AdminResetPassword,
  AdminContent,
  AdminContentBase,
  AdminUser,
  AdminUserBase,
  AdminSubscription,
  AdminSubscriptionBase,
  AdminUserDetails,
  AdminUserDetailsBase,
  AdminAnalytics,
  AdminAnalyticsBase,
} from "../pagesAdmin";
import AppConfig from "./config";

export const adminAuthRoutes: RouteObject[] = [
  {
    path: AppConfig.PATHS.Admin.Auth.Base,
    Component: AdminAuthBase,
    children: [
      {
        path: AppConfig.PATHS.Admin.Auth.Default,
        Component: AdminLogin,
      },
      {
        path: AppConfig.PATHS.Admin.Auth.Login,
        Component: AdminLogin,
      },
      {
        path: AppConfig.PATHS.Admin.Auth.Signup,
        Component: AdminSignup,
      },
      {
        path: AppConfig.PATHS.Admin.Auth.ForgotPassword,
        Component: AdminForgotPassword,
      },
      {
        path: AppConfig.PATHS.Admin.Auth.ResetPassword,
        Component: AdminResetPassword,
      },
    ],
  },
];
export const landingPageRoutes: RouteObject[] = [
  
  
  
  
  {
    path: AppConfig.PATHS.LandingPage.Base,
    Component: LandingPageBase,
    children: [
      {
        path: AppConfig.PATHS.LandingPage.Default,
        Component: LandingPage,
      },
      {
        path: AppConfig.PATHS.LandingPage.Business,
        Component: BusinessPage,
      },
      {
        path: AppConfig.PATHS.LandingPage.Talent,
        Component: TalentPage,
      },
      {
        path: AppConfig.PATHS.LandingPage.AboutUs,
        Component: AboutUsPage,
      },
   
    ],
  },
];


export const adminMainRoutes: RouteObject[] = [
  {
    path: AppConfig.PATHS.Admin.Content.Base,
    Component: AdminContentBase,
    children: [
      {
        path: AppConfig.PATHS.Admin.Content.Default,
        Component: AdminContent,
      },
    ],
  },
  {
    path: AppConfig.PATHS.Admin.User.Base,
    Component: AdminUserBase,
    children: [
      {
        path: AppConfig.PATHS.Admin.User.Default,
        Component: AdminUser,
      },
    ],
  },
  {
    path: AppConfig.PATHS.Admin.Subscription.Base,
    Component: AdminSubscriptionBase,
    children: [
      {
        path: AppConfig.PATHS.Admin.Subscription.Default,
        Component: AdminSubscription,
      },
    ],
  },
  {
    path: AppConfig.PATHS.Admin.UserDetails.Base,
    Component: AdminUserDetailsBase,
    children: [
      {
        path: AppConfig.PATHS.Admin.UserDetails.Default,
        Component: AdminUserDetails,
      },
    ],
  },

  {
    path: AppConfig.PATHS.Admin.Analytics.Base,
    Component: AdminAnalyticsBase,
    children: [
      {
        path: AppConfig.PATHS.Admin.Analytics.Default,
        Component: AdminAnalytics,
      },
    ],
  },
];

export const authRoutes: RouteObject[] = [
  {
    path: AppConfig.PATHS.Auth.Google,
    Component: GoogleSocial
  },
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
        path: AppConfig.PATHS.Dashboard.ViewMore,
        Component: getProfile(ViewMoreIndex),
      },
      {
        path: AppConfig.PATHS.Dashboard.ViewMoreEvents,
        Component: getProfile(ViewMoreEventsIndex),
      },

      


      
      // {
      //   path: AppConfig.PATHS.Dashboard.Business,
      //   Component: getProfile(BusinessDashboard),
      // },
      {
        path: AppConfig.PATHS.Dashboard.Details,
        Component: getProfile(Details),
      },
    ],
  },
  {
    path: AppConfig.PATHS.Business.Base,
    Component: getProfile(DashboardBase),
    children: [ 
      {
        path: AppConfig.PATHS.Business.Default,
        Component: getProfile(BusinessDashboard),
      },
      {
        path: AppConfig.PATHS.Business.Dashboard,
        Component: getProfile(BusinessDashboard),
      },
      {
        path: AppConfig.PATHS.Business.Profile,
        Component: getProfile(BusinessProfile),
      },
      {
        path: AppConfig.PATHS.Business.EditProfile,
        Component: getProfile(EditBusinessProfile),
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
      {
        path: AppConfig.PATHS.Spaces.Space,
        Component: getProfile(Space),
      },
    ],
  },
  {
    path: AppConfig.PATHS.GridTools,
    Component: GridTools,
  },
  {
    path: AppConfig.PATHS.Saved.Base,
    Component: getProfile(SavedBase),
    children: [
      {
        path: AppConfig.PATHS.Saved.Overview,
        Component: getProfile(Saved),
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
      {
        path: AppConfig.PATHS.Subscription.MakePayment,
        Component: getProfile(MakePayment),
      },
    ],
  },
  {
    path: AppConfig.PATHS.Trending.Base,
    Component: getProfile(TrendingBase),
    children: [
      {
        path: AppConfig.PATHS.Trending.Overview,
        Component: getProfile(Trending),
      },
    ],
  },
  {
    path: AppConfig.PATHS.AccountSettings.Base,
    Component: AccountSettingsBase,
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
