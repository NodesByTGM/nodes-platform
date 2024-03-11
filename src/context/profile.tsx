import { ReactNode, createContext, useMemo, useState } from "react";
import { IProfileContext } from "../interfaces/profile";
// import {
//   // FormikHelpers,
//    useFormik } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "../store/";

const initialState = {
  profileType: "individual",
  setProfileType: () => {},
  hasProject: false,
  setHasProject: () => {},
  projectDetailsModal: false,
  setProjectDetailsModal: () => {},
  projectDetails: null,
  setProjectDetails: () => {},
  editProjectmodal: false,
  setEditProjectModal: () => {},
};

export const ProfileContext = createContext<IProfileContext>(initialState);

const ProfileProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const user = useSelector((state: RootState) => state.user.user);

  const [profileType, setProfileType] = useState("talent");
  const [hasProject, setHasProject] = useState(false);
  const [projectDetailsModal, setProjectDetailsModal] = useState(false);
  const [editProjectmodal, setEditProjectModal] = useState(false);

  const [projectDetails, setProjectDetails] = useState(null);

  const profileContextValue = useMemo(
    () => ({
      profileType,
      setProfileType,
      hasProject,
      setHasProject,
      projectDetailsModal,
      setProjectDetailsModal,
      projectDetails,
      setProjectDetails,
      editProjectmodal,
      setEditProjectModal,
    }),

    [
      profileType,
      setProfileType,
      hasProject,
      setHasProject,
      projectDetailsModal,
      setProjectDetailsModal,
      projectDetails,
      setProjectDetails,
      editProjectmodal,
      setEditProjectModal,
    ]
  );

  return (
    <ProfileContext.Provider value={profileContextValue}>
      <div className="">
        <pre className="Test-primary">
          Stuff: {JSON.stringify(user, null, 2)}
        </pre>
      </div>
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
