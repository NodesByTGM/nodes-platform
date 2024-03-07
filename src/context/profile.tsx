import { ReactNode, createContext, useMemo, useState } from "react";
import { IProfileContext } from "../interfaces/profile";

const initialState = {
  profileType: "individual profile",
  setProfileType: () => {},
};

export const ProfileContext = createContext<IProfileContext>(initialState);

const ProfileProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const [profileType, setProfileType] = useState("");

  const profileContextValue = useMemo(
    () => ({
      profileType,
      setProfileType,
    }),

    [profileType, setProfileType]
  );

  return (
    <ProfileContext.Provider value={profileContextValue}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
