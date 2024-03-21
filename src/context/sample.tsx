import { ReactNode, createContext, useMemo, useState } from "react";
import { ISampleContext } from "../interfaces/sample";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const initialState = {
  pageName: "",
  user: null,
};

export const SampleContext = createContext<ISampleContext>(initialState);

const SampleProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const user = useSelector((state: RootState) => state.user.user);
  const [pageName] = useState("Dashboard");
  const sampleContextValue = useMemo(
    () => ({
      pageName,
      user,
    }),

    [pageName, user]
  );

  return (
    <SampleContext.Provider value={sampleContextValue}>
      {children}
    </SampleContext.Provider>
  );
};

export default SampleProvider;
