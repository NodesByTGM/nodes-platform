import { useContext } from "react";
import { AuthContext } from "./auth";
import { ProfileContext } from "./profile";
import { IAuthContext } from "../interfaces/auth";
import { IProfileContext } from "../interfaces/profile";

export const useAuth = () => {
  return useContext<IAuthContext>(AuthContext);
};

export const useProfileContext = () => {
  return useContext<IProfileContext>(ProfileContext);
};
