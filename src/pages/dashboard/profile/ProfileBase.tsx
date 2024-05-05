import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import ProfileProvider from "../../../context/profile";
import {setBg} from '../../../utilities/common'

function Profile() {
  const { pathname } = useLocation();

  return (
    <div className={`${setBg(pathname, 'main-bg-yellow-container', 'main-bg-gray-container')} min-h-[100vh]  main-padding `}>
      <ProfileProvider>
        <Outlet />
      </ProfileProvider>
    </div>
  );
}

export default Profile;
