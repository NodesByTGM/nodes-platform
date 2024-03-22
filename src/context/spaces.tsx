import { ReactNode, createContext, useMemo, useState } from "react";
import { ISpacesContext } from "../interfaces/spaces";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const initialState = {
  pageName: "",
  user: null,
};

export const SpacesContext = createContext<ISpacesContext>(initialState);

const SpacesProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const user = useSelector((state: RootState) => state.user.user);
  const [pageName] = useState("Spaces");
  const spacesContextValue = useMemo(
    () => ({
      pageName,
      user,
    }),

    [pageName, user]
  );

  return (
    <SpacesContext.Provider value={spacesContextValue}>
      {children}
    </SpacesContext.Provider>
  );
};

export default SpacesProvider;
