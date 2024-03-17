import {
    ReactNode,
    createContext,
    useMemo,
    useState
  } from "react";
  import { IDashboardContext } from "../interfaces/profile";
  import { useSelector } from "react-redux";
  import { RootState } from "../store";
  const initialState = {
    pageName: "",
    user: null,
  };
  
  export const DashboardContext = createContext<IDashboardContext>(initialState);
  
  const DashboardProvider = ({
    children,
  }: {
    children: ReactNode | ReactNode[];
  }) => {
    const user = useSelector((state: RootState) => state.user.user);
  const [pageName] = useState('Dashboard')
    const dashboardContextValue = useMemo(
      () => ({
        pageName,
        user,
      }),
  
      [pageName, user]
    );
  
    return (
      <DashboardContext.Provider value={dashboardContextValue}>
        {children}
      </DashboardContext.Provider>
    );
  };
  
  export default DashboardProvider;
  