import React, { useEffect, useState } from "react";
import { Loader } from "../../components";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useGetUserProfileQuery } from "../../api";
import { useDispatch } from "react-redux";
import { loginUser } from "../../api/reducers/userSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function GoogleSocial() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0)

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const accessToken = searchParams.get("accessToken");
  const refreshToken = searchParams.get("refreshToken");
  const [userProfile, setUserProfile] = useState();

  const {
    data: profileData,
    refetch: profileRefetch,
    isSuccess: profileIsSuccess,
    isFetching: profileLoading,
    isError: profileIsError,
  } = useGetUserProfileQuery();

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("bearerToken", accessToken ? accessToken : "");
    } else {
      toast.error("Something went wrong");
    }
  }, []);

  useEffect(() => {
    if (profileIsError && !profileLoading) {
      setCount(count + 1)
     if(count <= 3){
      profileRefetch();
     } else {
      toast.error("Something went wrong");
     }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileIsError, profileLoading]);

  useEffect(() => {
    if (profileIsSuccess) {
      const user = profileData?.result;
      setUserProfile(user);
      dispatch(loginUser({ ...user, refreshToken, accessToken }));
      navigate("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileIsSuccess]);

  return (
    <div>
      <Link to="/">
        <div>
          <img src="/nodes-logo-black.svg" alt="" className="w-8" />
        </div>
      </Link>
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
