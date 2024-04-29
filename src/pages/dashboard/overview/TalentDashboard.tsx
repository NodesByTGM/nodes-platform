/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  HeaderAndDescription,
  WelcomeComponent,
  WelcomeCard,
} from "../../../components";
import { useDashboardContext } from "../../../context/hooks";
import { useGetJobsQuery, useGetAppliedJobsQuery } from "../../../api";
import AppliedJobsSection from "../overview/sections/AppliedJobsSection";
import JobsForYouSection from "../overview/sections/JobsForYouSection";
import TrendingEventsSection from "../overview/sections/TrendingEventsSection";

export default function TalentDashboard() {
  const { user } = useDashboardContext();

  const { refetch: jobsRefetch } = useGetJobsQuery();

  const { refetch: appliedJobsRefetch } = useGetAppliedJobsQuery();

  const refetchJobSections = () => {
    jobsRefetch();
    appliedJobsRefetch();
  };

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

  return (
    <div>
      <HeaderAndDescription
        title={`Hi, ${user?.name}! Nice to have you here.`}
        description="Enjoy exclusive access to gigs, cool events, the gridtools and more."
      />

      <div className={` h-4 mb-10 border-b border-[#D6D6D6]`}></div>

      <div className="flex flex-col gap-[64px]">
        <WelcomeComponent
          title="Welcome to Nodes!"
          description=" You now have access to a creative ecosystem, follow spaces, connect with the community and access job opportunities"
        >
          <div className="grid grid-cols-3 gap-6">
            {WelcomeCardItems.map((item) => (
              <div key={item.id} className="h-auto">
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
        <AppliedJobsSection useGetAppliedJobsQuery={useGetAppliedJobsQuery} />

        {/* //should show jobs for the user */}

        <JobsForYouSection
          useGetJobsQuery={useGetJobsQuery}
          refetchJobSections={refetchJobSections}
        />

        {/* //Events */}
        <TrendingEventsSection />
      </div>
    </div>
  );
}
