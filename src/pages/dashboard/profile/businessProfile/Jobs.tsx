/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { useGetMyJobsQuery } from "../../../../api";
import { JobItem, Loader } from "../../../../components";

export default function Jobs() {
  const [jobsData, setJobsData] = useState<any>([]);

  const {
    data: jobsResponse,
    refetch: jobsRefetch,
    isFetching: jobsLoading,
  } = useGetMyJobsQuery();

  useEffect(() => {
    if (jobsResponse?.result?.items?.length > 0) {
      setJobsData(jobsResponse?.result.items);
    }
  }, [jobsResponse]);

  return (
    <div>
      <div className="">
        {jobsLoading && jobsData.length === 0 ? (
          <div className="my-20">
            <Loader />
          </div>
        ) : null}

        {jobsData?.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {jobsData?.map((data) => (
              <div key={data?.id} className="">
                <JobItem data={data} isBusiness refetchJobs={jobsRefetch} />
              </div>
            ))}
          </div>
        ) : null}

        {!jobsLoading && jobsData.length === 0 ? (
          <div className="mx-auto max-w-[239px] flex flex-col justify-center items-center ">
            <h3 className="text-center font-medium text-base text-[#212121]">
              {/* Hi, {user?.username} */}
            </h3>
            <span className="mt-8  text-center font-normal text-base text-[#212121]">
              Nothing to see here yet, add a job post or event to get started.{" "}
            </span>

            <h3
              // onClick={() => addJob()}
              className="cursor-pointer mt-10 text-primary font-medium text-base"
            >
              Add Job
            </h3>
          </div>
        ) : null}
      </div>
    </div>
  );
}
