import { useContext } from "react";
import { AuthContext } from "./auth";
import { IAuthContext } from "../interfaces/auth";
import { ProfileContext } from "./profile";
import { IProfileContext } from "../interfaces/profile";
import { DashboardContext } from "./dashboard";
import { IDashboardContext } from "../interfaces/dashboard";
import { CommunityContext } from "./community";
import { ICommunityContext } from "../interfaces/community";
import { SpacesContext } from "./spaces";
import { ISpacesContext } from "../interfaces/spaces";
export const useAuth = () => {
  return useContext<IAuthContext>(AuthContext);
};

export const useProfileContext = () => {
  return useContext<IProfileContext>(ProfileContext);
};

export const useDashboardContext = () => {
  return useContext<IDashboardContext>(DashboardContext);
};

export const useCommunityContext = () => {
  return useContext<ICommunityContext>(CommunityContext);
};

export const useSpacesContext = () => {
  return useContext<ISpacesContext>(SpacesContext);
};
