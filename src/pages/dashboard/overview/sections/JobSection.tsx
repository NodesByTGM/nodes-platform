import React, { useEffect, useState } from "react";
import { useGetJobsQuery } from "../../../../api";
import { ItemsCarousel, Loader } from "../../../../components";

type IJobSection = {
  canViewJob?: boolean
}
export default function JobSection({canViewJob}: IJobSection) {
  const [jobsData, setJobsData] = useState([]);
  const {
    data: allJobs,
    refetch: allJobsRefetch,
    isFetching: allJobsLoading,
    isSuccess: allJobsIsSuccess,
  } = useGetJobsQuery();

  useEffect(() => {
    if (allJobsIsSuccess && allJobs?.result?.items?.length > 0) {
      setJobsData(allJobs?.result?.items);
    }
  }, [allJobs, allJobsIsSuccess]);
  return (
    <div>
      {allJobsLoading && jobsData.length === 0 ? (
        <div className="my-40">
          <Loader />
        </div>
      ) : null}

      {!allJobsLoading && jobsData?.length === 0 ? (
        <div className="text-base text-primary my-40  text-center">
          Nothing to see.
        </div>
      ) : null}

      {!allJobsLoading && jobsData && jobsData?.length > 0 ? (
        <ItemsCarousel
          data={jobsData || []}
          job
          canViewJob={canViewJob}
          refetchJobs={allJobsRefetch}
          title={`Trending jobs on Nodes`}
          description={`Local and international gigs for you`}
        />
      ) : null}
    </div>
  );
}
