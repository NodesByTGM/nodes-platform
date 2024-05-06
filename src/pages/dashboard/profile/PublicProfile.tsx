/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useState } from "react";
import { useGetPublicProfileQuery } from "../../../api";
import { PublicIndividualProfileCard, Loader, Back } from "../../../components";
import { subscriptionType } from "../../../utilities/constants";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import PublicInteractions from "./PublicInteractions.tsx";
import PublicProjects from "./PublicProjects.tsx";
import PublicJobAndEvents from "./PublicJobAndEvents";
export default function PublicProfile() {
  const [profileData, setProfileData] = useState<any>();
  const { id } = useParams();
  const [navs, setNavs] = useState(["Interactions"]);
  const [selectedNav, setSelectedNav] = useState(navs[0]);

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

  const handleNavs = useCallback(() => {
    if (profileData?.type == 0) {
      setNavs(["Interactions"]);

      return;
    }
    if (profileData?.type == 1) {
      setNavs(["Projects", "Interactions"]);

      return;
    }

    if (profileData?.type == 2) {
      setNavs(["Job/Events", "Projects"]);

      return;
    }
  }, [profileData]);

  useEffect(() => {
    handleNavs();
  }, [handleNavs]);

  useEffect(() => {
    setSelectedNav(navs[0]);
  }, [navs]);

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
            <PublicIndividualProfileCard
              profileType={subscriptionType[profileData?.type]}
              profileData={profileData}
            />
            <pre className="text-blue-400 hidden">
              {JSON.stringify(
                { subType: subscriptionType[profileData?.type], profileData },
                null,
                2
              )}
            </pre>
          </div>
          <div className="flex-1 mt-12 xl:mt-0">
            <div className="flex flex-col w-full gap-10">
              {navs.length === 1 &&
              navs[0].toLowerCase() === "interactions" ? null : (
                <div className="flex items-center  gap-[8px] overflow-x-auto  ">
                  {navs.map((nav) => (
                    <div
                      onClick={() => setSelectedNav(nav)}
                      key={nav}
                      className={`${
                        selectedNav.toLowerCase() == nav.toLowerCase()
                          ? "border-primary text-primary "
                          : "border-transparent text-[#727272] "
                      } flex cursor-pointer flex-col items-center justify-center text-nowrap border-b-[2px] pb-2   pt-2 px-4 font-semibold  `}
                    >
                      <span className="text-base font-medium ">{nav}</span>
                    </div>
                  ))}
                </div>
              )}
              {selectedNav.toLowerCase() == "projects" && <PublicProjects />}

              {selectedNav.toLowerCase() == "interactions" && (
                <PublicInteractions />
              )}

              {selectedNav.toLowerCase() == "job/events" && (
                <PublicJobAndEvents />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
