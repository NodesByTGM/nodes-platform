// import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../api/reducers/userSlice"; // Import the logoutUser action creator
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function HandleLogout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutTheUser = () => {
    // Dispatch the logoutUser action to reset the state
    dispatch(logoutUser());
    localStorage.setItem("bearerToken", "");
    navigate("/auth/login");
  };

  useEffect(() => {
    logoutTheUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className=""></div>;
}

export default HandleLogout;
