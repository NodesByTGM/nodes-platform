import React, { useEffect, useState } from "react";
import { Loader } from "../../components";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useGetUserProfileQuery } from "../../api";
import { useDispatch } from "react-redux";
import { loginUser } from "../../api/reducers/userSlice";
export default function GoogleSocial() {
    const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const accessToken = searchParams.get("accessToken");
  const refreshToken = searchParams.get("refreshToken");
  const bearerToken = localStorage.getItem("bearerToken");
  const [userProfile, setUserProfile] = useState();
  const {
    data: profileData,
    refetch: profileRefetch,
    isSuccess: profileIsSuccess,
    // isFetching: profileLoading,
  } = useGetUserProfileQuery({}, { skip: !bearerToken });
  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("bearerToken", accessToken);
    }
  }, [accessToken]);

  useEffect(() => {
    if (bearerToken) {
      profileRefetch();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bearerToken]);

  useEffect(() => {
    if (profileIsSuccess) {
      const user = profileData?.result;
      setUserProfile(user);
      dispatch(loginUser({...user, refreshToken, accessToken}));
      navigate("/dashboard");

    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileIsSuccess]);

  return (
    <div>
      <pre className="hidden">
        {JSON.stringify({ accessToken, refreshToken, userProfile }, null, 2)}
      </pre>
      <div className="my-auto py-20  gap-10 flex flex-col items-center justify-center">
        <p className="text-primary animate-pulse test-[18px] font-semibold">
          We are logging you in...
        </p>
        <Loader />
      </div>
    </div>
  );
}
