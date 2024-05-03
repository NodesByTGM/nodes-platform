import React from "react";
import { Outlet } from "react-router-dom";
import ProfileProvider from "../../../context/profile";

function Profile() {
  
  return (
    <div className="min-h-[100vh] main-bg-gray-container main-padding ">
      
      <ProfileProvider>
        <Outlet />
      </ProfileProvider>
    </div>
  );
}

export default Profile;
