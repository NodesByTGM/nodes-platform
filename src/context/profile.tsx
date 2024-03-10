import { ReactNode, createContext, useMemo, useState } from "react";
import { IProfileContext } from "../interfaces/profile";
// import {
//   // FormikHelpers,
//    useFormik } from "formik";

const initialState = {
  profileType: "individual",
  setProfileType: () => {},
  hasProject: false,
  setHasProject: () => {},
};

export const ProfileContext = createContext<IProfileContext>(initialState);

const ProfileProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const [profileType, setProfileType] = useState("business");
  const [hasProject, setHasProject] = useState(false);

  const profileContextValue = useMemo(
    () => ({
      profileType,
      setProfileType,
      hasProject,
      setHasProject,
    }),

    [profileType, setProfileType, hasProject, setHasProject]
  );

  return (
    <ProfileContext.Provider value={profileContextValue}>
      <div className="flex gap-2 mb-4 hidden">
        <button
          onClick={() => setProfileType("individual")}
          className="px-4 py-2 rounded-md bg-primary text-white"
        >
          Switch to Individual
        </button>
        <button
          onClick={() => setProfileType("talent")}
          className="px-4 py-2 rounded-md bg-primary text-white"
        >
          Switch to Talent
        </button>
        <button
          onClick={() => setProfileType("business")}
          className="px-4 py-2 rounded-md bg-primary text-white"
        >
          Switch to Business
        </button>

        <span className="text-blue-500 text-base">{profileType}</span>
      </div>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
