/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ReactNode,
  createContext,
  useMemo,
  useState,
  useCallback,
  useEffect,
} from "react";
import { IDashboardContext } from "../interfaces/dashboard";
import { useSelector } from "react-redux";
import { RootState } from "../store";
// import { AccountTypesObj,  } from "../utilities";

const initialState = {
  pageName: "Dashboard",
  accountType: "individual",
  setAccountType: () => {},
  user: null,
  currentPlan: null,
  setCurrentPlan: () => {},
  userIsBusiness: false,
  setUserIsBusiness: () => {},
};

export const DashboardContext = createContext<IDashboardContext>(initialState);

const DashboardProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const user = useSelector((state: RootState) => state.user.user);
  const [pageName] = useState("Dashboard");
  const [accountType, setAccountType] = useState("");
  const [currentPlan, setCurrentPlan] = useState<any>(null);
  const [userIsBusiness, setUserIsBusiness] = useState<any>(null);

  const dashboardContextValue = useMemo(
    () => ({
      pageName,
      user,
      accountType,
      setAccountType,
      currentPlan,
      setCurrentPlan,
      userIsBusiness,
      setUserIsBusiness,
    }),

    [
      pageName,
      user,
      accountType,
      setAccountType,
      currentPlan,
      setCurrentPlan,
      userIsBusiness,
      setUserIsBusiness,
    ]
  );

  const handleAccountType = useCallback(() => {
    // const type = user?.type;
   
    // alert(user?.subscription?.plan)
    if (currentPlan !== "pro" && currentPlan !== "business") {
      setAccountType("individual");
    }
    if (currentPlan === "pro" || currentPlan === "business") {
      setAccountType("talent");
    }
    
  }, [user]);

  const handleUserIsBusiness = useCallback(() => {
    if (currentPlan === "pro" || currentPlan === "business") {
      setUserIsBusiness(true);
      return;
    }
    setUserIsBusiness(false);
  }, [currentPlan]);

  useEffect(() => {
    handleAccountType();
    handleUserIsBusiness()
  }, [user, handleAccountType, handleUserIsBusiness]);

  useEffect(() => {
    const plan = user?.subscription?.plan?.toLowerCase();

    if (plan) {
      setCurrentPlan(plan);
    }
  }, [user]);

  return (
    <DashboardContext.Provider value={dashboardContextValue}>
      <div className="">
        <pre className="hidden">{JSON.stringify(user, null, 2)}</pre>
        <div className="flex gap-2 mb-10 hidden">
          <button
            onClick={() => setAccountType("individual")}
            className="px-4 py-2 rounded-md bg-customsecondary text-white"
          >
            Switch to Individual
          </button>
          <button
            onClick={() => setAccountType("talent")}
            className="px-4 py-2 rounded-md bg-customsecondary text-white"
          >
            Switch to Talent
          </button>
          <button
            onClick={() => setAccountType("business")}
            className="px-4 py-2 rounded-md bg-customsecondary text-white"
          >
            Switch to Business
          </button>

          <span className="text-blue-500 text-base">{accountType}</span>
        </div>

        {children}
      </div>
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
