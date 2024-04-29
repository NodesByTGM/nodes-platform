import { ReactNode, createContext, useMemo, useState } from "react";
import { ICommunityContext } from "../interfaces/community";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const initialState = {
  pageName: "",
  user: null,
  postModal: false,
  setAddPostModal: () => {},
  filterModal: false,
  setFilterModal: () => {},
  peopleOrBrand: "people",
  setPeopleOrBrand: () => {},
};

export const CommunityContext = createContext<ICommunityContext>(initialState);

const CommunityProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const user = useSelector((state: RootState) => state.user.user);
  const [postModal, setAddPostModal] = useState(false);
  const [filterModal, setFilterModal] = useState(true);

  const [peopleOrBrand, setPeopleOrBrand] = useState("people");

  const [pageName] = useState("Dashboard");
  const communityContextValue = useMemo(
    () => ({
      pageName,
      user,
      postModal,
      setAddPostModal,
      peopleOrBrand,
      setPeopleOrBrand,
      filterModal,
      setFilterModal,
    }),

    [
      pageName,
      user,
      postModal,
      setAddPostModal,
      peopleOrBrand,
      setPeopleOrBrand,
      filterModal,
      setFilterModal,
    ]
  );

  return (
    <CommunityContext.Provider value={communityContextValue}>
      {children}
    </CommunityContext.Provider>
  );
};

export default CommunityProvider;
