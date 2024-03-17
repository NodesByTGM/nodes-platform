import React from  'react'
import {useDashboardContext} from '../../../context/hooks'
import IndividualDashboard from './IndividualDashboard'
function Dashboard() {
  const {pageName} = useDashboardContext()
  return (
    <div>
      <span className="text-primary hidden">Page: {pageName}</span>
      <IndividualDashboard />
      
    </div>
  );
}

export default Dashboard;
