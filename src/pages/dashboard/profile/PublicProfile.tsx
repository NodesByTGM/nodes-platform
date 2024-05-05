/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useGetPublicProfileQuery } from "../../../api";
import { PublicIndividualProfileCard, Loader, Back } from "../../../components";
import { subscriptionType } from "../../../utilities/constants";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
export default function PublicProfile() {
  const [profileData, setProfileData] = useState<any>();
  const { id } = useParams();

  const {
    data: profileResponse,
    // refetch: profileRefetch,
    isFetching: profileLoading,
    isSuccess: profileDataIsSuccess,
    isError: profileDataIsError,
    error: profileDataError,
  } = useGetPublicProfileQuery({ id: id }, { skip: !id });

  useEffect(() => {
    if (profileDataIsSuccess) {
      setProfileData(profileResponse?.result);
    }
  }, [profileResponse, profileDataIsSuccess]);

  useEffect(() => {
    if (profileDataIsError) {
      toast.error(profileDataError?.message?.message);
    }
  }, [profileDataIsError, profileDataError]);

  return (
    <div className="min-h-[100vh]  main-padding pt-6">
      <div className="mb-6">
        <Back link={-1} />
      </div>
      {profileLoading ? (
        <div className="my-40 mx-auto">
         <Loader />
          </div>
      ) : (
        <div className="flex flex-col xl:flex-row gap-x-8 h-full">
          <div className="max-h-max xl:mx-0 sm:mx-auto mx-0">
           <PublicIndividualProfileCard profileType={subscriptionType[profileData?.type]} profileData={profileData}/>
            <pre className="text-blue-400 hidden">
              {JSON.stringify({proType: subscriptionType[profileData?.type], profileData}, null, 2)}
            </pre>
          </div>
          <div className="flex-1 mt-12 xl:mt-0">
            {/* main */}
            </div>
        </div>
      )}
    </div>
  );
}
