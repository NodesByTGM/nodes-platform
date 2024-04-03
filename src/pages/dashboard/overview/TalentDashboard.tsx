/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import {
  CarouselSection,
  HeaderAndDescription,
  WelcomeComponent,
  WelcomeCard,
  Loader,
} from "../../../components";
import { useDashboardContext } from "../../../context/hooks";

import { useNavigate } from "react-router-dom";
import {
  useGetJobsQuery,
  useGetEventsQuery,
  useGetAppliedJobsQuery,
} from "../../../api";

export default function TalentDashboard() {
  const [jobsData, setJobsData] = useState<any>([])

  const [appliedJobsData, setAppliedJobsData] = useState<any>([])

  const [eventsData, setEventsData] = useState<any>([])

  const { user } = useDashboardContext();

  const navigate = useNavigate();
  const {
    data: jobsResponse,
    refetch: jobsRefetch,
    isFetching: jobsLoading,
  } = useGetJobsQuery();

  const {
    data: appliedJobsResponse,
    refetch: appliedJobsRefetch,
    isFetching: appliedJobsLoading,
  } = useGetAppliedJobsQuery();

  const {
    data: eventsResponse,
    refetch: eventsRefetch,
    isFetching: eventsLoading,
  } = useGetEventsQuery();

  const [WelcomeCardItems] = useState([
    {
      id: 1,
      text1: "Complete",
      text2: "your profile",
      icon: "/img/CompleteProfile.png",
      buttonText: "Complete profile",
      buttonLink: "/profile",
    },
    {
      id: 2,
      text1: "Find your",
      text2: "next job",
      icon: "/img/FindJob.png",
      buttonText: "Browse Jobs",
      buttonLink: "/dashboard/see-more/talent-jobs",
    },
    {
      id: 3,
      text1: "Connect",
      text2: "with others",
      icon: "/img/Connect.png",
      buttonText: "Discover",
      buttonLink: "/community",
    },
  ]);

  useEffect(() => {
    if(jobsResponse?.result?.items?.length > 0){
      setJobsData(jobsResponse?.result.items)
    }

  }, [jobsResponse])

  useEffect(() => {
    if(appliedJobsResponse?.result?.items?.length > 0){
      setAppliedJobsData(appliedJobsResponse?.result.items)
    }

  }, [appliedJobsResponse])

  useEffect(() => {
    if(eventsResponse?.result?.items?.length > 0){
      setEventsData(eventsResponse?.result.items)
    }

  }, [eventsResponse])
  return (
    <div>
      <HeaderAndDescription
        title={`Hi, ${user?.name}! Nice to have you here.`}
      />

      <div className={` h-4 mb-10 border-b border-[#D6D6D6]`}></div>

      <div className="flex flex-col gap-[64px]">
        <WelcomeComponent
          title="Welcome to Nodes!"
          description=" You now have access to a creative ecosystem, follow spaces, connect
            with the community and access job opportunities"
        >
          <div className="grid grid-cols-3 gap-6">
            {WelcomeCardItems.map((item) => (
              <div key={item.id} className="">
                <WelcomeCard
                  text1={item.text1}
                  text2={item.text2}
                  icon={item.icon}
                  buttonText={item.buttonText}
                  buttonLink={item.buttonLink}
                />
              </div>
            ))}
          </div>
        </WelcomeComponent>
        {/* //should show jobs the user has applied to */}
      
        {appliedJobsLoading && appliedJobsData.length === 0  ? (
          <div className="my-40">
            <Loader />
          </div>
        ) : null}
        {!appliedJobsLoading && appliedJobsData.length === 0 ? (
          <div className="text-base text-primary my-40  text-center">
            Nothing to see.
          </div>
        ) : null}
        {appliedJobsData?.length > 0 ? (
          <CarouselSection
            data={appliedJobsData || []}
            navigateTo={() => navigate("/dashboard/see-more/talent")}
            seeMore
            job
            canViewJob
            refetchJobs={appliedJobsRefetch}
            title={`Jobs you have applied to`}
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}
          />
        ) : null}

        {/* //should show jobs for the user */}

        {jobsLoading && jobsData.length === 0 ? (
          <div className="my-40">
            <Loader />
          </div>
        ) : null}
        {!jobsLoading && jobsData.length === 0  ? (
          <div className="text-base text-primary my-40  text-center">
            Nothing to see.
          </div>
        ) : null}

        {jobsData?.length > 0? (
          <CarouselSection
            data={jobsData || []}
            navigateTo={() => navigate("/dashboard/see-more/talent")}
            seeMore
            job
            canViewJob
            refetchJobs={() => {
              jobsRefetch();
              appliedJobsRefetch();
            }}
            title={`Jobs for you`}
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}
          />
        ) : null}

        {/* //Events */}
        {eventsLoading && eventsData.length === 0 ? (
          <div className="my-40">
            <Loader />
          </div>
        ) : null}
        {!eventsLoading && eventsData.length === 0  ? (
          <div className="text-base text-primary my-40  text-center">
            Nothing to see.
          </div>
        ) : null}
        {eventsData?.length > 0? (
          <CarouselSection
            data={eventsData || []}
            navigateTo={() => navigate("/dashboard/see-more/talent")}
            seeMore
            event
            refetchEvents={eventsRefetch}
            title={`Trending Events`}
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}
          />
        ) : null}
        {/* <CarouselSection
          navigateTo={() => navigate("/dashboard/see-more/talent")}
          seeMore
          title={`Spaces you might like`}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}
        />
        <CarouselSection
          trend
          title={`Trending events`}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}
        /> */}
      </div>
    </div>
  );
}
