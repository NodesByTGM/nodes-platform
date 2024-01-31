import { ReactNode, createContext, useState } from "react";
import { IUser } from "../interfaces/auth";

export const AuthContext = createContext<any>(null);

const AuthProvider = ({ children }: { children: ReactNode | ReactNode[] }) => {

    const [user, setUser] = useState<IUser | null>(null);

    const handleSetUser = async (user: IUser) => {
        setUser(user);
    };

    const handleLogout = () => {
        setUser(null)
    };

    const value = {
        user,
        setUser: handleSetUser,
        onLogout: handleLogout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider