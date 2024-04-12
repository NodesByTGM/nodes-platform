import React from "react";
import { useDashboardContext } from "../../../context/hooks";
import IndividualDashboard from "./IndividualDashboard";
import BusinessDashboard from './BusinessDashboard'
import TalentDashboard from './TalentDashboard'
function Dashboard() {
  const { accountType } = useDashboardContext();
  return (
    <div className='main-padding'>
      {accountType.toLowerCase() == "individual" && <IndividualDashboard />}
      {accountType.toLowerCase() == "talent" && <TalentDashboard />}

      {accountType.toLowerCase() == "business" && <BusinessDashboard />}

    </div>
  );
}

export default Dashboard;
