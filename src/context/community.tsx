import {
    ReactNode,
    createContext,
    useMemo,
    useState
  } from "react";
  import { ICommunityContext } from "../interfaces/community";
  import { useSelector } from "react-redux";
  import { RootState } from "../store";
  const initialState = {
    pageName: "",
    user: null,
  };
  
  export const CommunityContext = createContext<ICommunityContext>(initialState);
  
  const CommunityProvider = ({
    children,
  }: {
    children: ReactNode | ReactNode[];
  }) => {
    const user = useSelector((state: RootState) => state.user.user);
  const [pageName] = useState('Dashboard')
    const communityContextValue = useMemo(
      () => ({
        pageName,
        user,
      }),
  
      [pageName, user]
    );
  
    return (
      <CommunityContext.Provider value={communityContextValue}>
        {children}
      </CommunityContext.Provider>
    );
  };
  
  export default CommunityProvider;
  