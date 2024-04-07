import { ReactNode, createContext, useMemo, useState , useCallback, useEffect} from "react";
import { IDashboardContext } from "../interfaces/dashboard";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { AccountTypesObj,  } from "../utilities";


const initialState = {
  pageName: "Dashboard",
  accountType: "individual",
  setAccountType: () => {},
  user: null,
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
  const dashboardContextValue = useMemo(
    () => ({
      pageName,
      user,
      accountType,
      setAccountType,
    }),

    [pageName, user, accountType, setAccountType]
  );

  const handleAccountType = useCallback(() => {
    const type = user?.type;
    if (type == AccountTypesObj.individual) {
      setAccountType("individual");
    }
    if (type == AccountTypesObj.talent) {
      setAccountType("talent");
    }
    if (type == AccountTypesObj.business) {
      setAccountType("business");
    }
  }, [user]);

  useEffect(() => {
    handleAccountType();
  }, [user, handleAccountType]);

  return (
    <DashboardContext.Provider value={dashboardContextValue}>
      <div className="">
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
