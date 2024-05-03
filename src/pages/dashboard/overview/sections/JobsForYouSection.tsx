/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { ItemsCarousel, Loader } from "../../../../components";
import { useNavigate } from "react-router-dom";
export default function JobsForYouSection({
  useGetJobsQuery,
  refetchJobSections = () => {},
}) {
  const navigate = useNavigate();
  const [jobsData, setJobsData] = useState<any>([]);

  const {
    data: jobsResponse,
    // refetch: jobsRefetch,
    isFetching: jobsLoading,
  } = useGetJobsQuery();

  useEffect(() => {
    if (jobsResponse?.result?.items?.length > 0) {
      setJobsData(jobsResponse?.result.items);
    }
  }, [jobsResponse]);

  return (
    <div>
      {jobsLoading && jobsData.length === 0 ? (
        <div className="my-40">
          <Loader />
        </div>
      ) : null}
      {!jobsLoading && jobsData.length === 0 ? (
        <div className="text-base text-primary my-40  text-center">
          Nothing to see.
        </div>
      ) : null}

      {jobsData?.length > 0 ? (
        <ItemsCarousel
          data={jobsData || []}
          navigateTo={() => navigate("/dashboard/view-more/jobs-for-you")}
          seeMore
          job
          canViewJob
          refetchJobs={() => {
            refetchJobSections();
          }}
          title={`Jobs for you`}
          description={`Exciting opportunities perfectly matched to your skills`}
        />
      ) : null}
    </div>
  );
}
