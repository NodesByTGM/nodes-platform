import React, { useEffect, useState } from "react";
import { useGetJobsQuery } from "../../../../api";
import { CarouselSection, Loader } from "../../../../components";
export default function JobSection() {
  const [jobsData, setJobsData] = useState([]);
  const {
    data: allJobs,
    refetch: allJobsRefetch,
    isFetching: allJobsLoading,
    isSuccess: allJobsIsSuccess,
  } = useGetJobsQuery();

  useEffect(() => {
    if (allJobsIsSuccess) {
     
      setJobsData(allJobs?.jobs);
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
        <CarouselSection
          data={jobsData || []}
          job
          refetchJobs={allJobsRefetch}
          title={`Trending jobs on Nodes`}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}
        />
      ) : null}
    </div>
  );
}
