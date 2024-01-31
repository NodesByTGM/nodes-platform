import { useContext } from "react";
import { AuthContext } from "./auth";
import { IAuthContext } from "../interfaces/auth";

export const useAuth = () => {
    return useContext<IAuthContext>(AuthContext);
};