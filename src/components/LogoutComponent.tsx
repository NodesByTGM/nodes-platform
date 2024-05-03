import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../api/reducers/userSlice"; // Import the logoutUser action creator
import { useNavigate } from "react-router-dom";

function LogoutComponent({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch the logoutUser action to reset the state
    dispatch(logoutUser());
    localStorage.setItem("bearerToken", "");
    navigate("/auth/login");
  };

  return <div onClick={handleLogout}>{children}</div>;
}

export default LogoutComponent;
