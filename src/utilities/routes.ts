import { RouteObject } from "react-router-dom";
import { checkAuth, getProfile } from "../components/hoc";
import {
    BusinessGetStarted,
    BusinessOnboarding,
    BusinessUpgrade,
    ForgotPassword,
    Home,
    Login,
    Register,
    ResetPassword,
    TalentGetStarted,
    TalentOnboarding,
    TalentUpgrade
} from "../pages";
import AppConfig from "./config";

export const authRoutes: RouteObject[] = [
    {
        path: AppConfig.PATHS.Auth.Login,
        Component: Login
    },
    {
        path: AppConfig.PATHS.Auth.Register,
        Component: Register
    },
    {
        path: AppConfig.PATHS.Auth.ForgotPassword,
        Component: ForgotPassword
    },
    {
        path: AppConfig.PATHS.Auth.ResetPasswordWithParams,
        Component: ResetPassword
    },
]


export const publicRoutes: RouteObject[] = [
    {
        path: '/',
        Component: getProfile(Home)
    },
]


export const upgradeRoutes: RouteObject[] = [
    {
        path: AppConfig.PATHS.Upgrades.Talent.Base,
        Component: checkAuth(TalentUpgrade)
    },
    {
        path: AppConfig.PATHS.Upgrades.Business.Base,
        Component: checkAuth(BusinessUpgrade)
    },
    {
        path: AppConfig.PATHS.Upgrades.Talent.GetStarted,
        Component: checkAuth(TalentGetStarted)
    },
    {
        path: AppConfig.PATHS.Upgrades.Business.GetStarted,
        Component: checkAuth(BusinessGetStarted)
    },
    {
        path: AppConfig.PATHS.Upgrades.Talent.Onboarding,
        Component: checkAuth(TalentOnboarding)
    },
    {
        path: AppConfig.PATHS.Upgrades.Business.Onboarding,
        Component: BusinessOnboarding
    },
]
