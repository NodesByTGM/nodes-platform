/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useGetAppliedJobsQuery } from "../../api";
import { JobItem, Loader, Pagination } from "../../components";
export default function AppliedJobsGrid() {
  const [appliedJobsData, setAppliedJobsData] = useState<any>([]);
  const {
    data: appliedJobsResponse,
    refetch: appliedJobsRefetch,
    isFetching: appliedJobsLoading,
  } = useGetAppliedJobsQuery();

  useEffect(() => {
    if (appliedJobsResponse?.result?.items?.length > 0) {
      setAppliedJobsData(appliedJobsResponse?.result.items);
    }
  }, [appliedJobsResponse]);
  return (
    <div>
      {appliedJobsLoading && appliedJobsData.length === 0 ? (
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
        <div className="">
          {" "}
          <div className="grid grid-cols-3 gap-6">
            {appliedJobsData?.map((job) => (
              <div key={job?.id} className="">
                <JobItem
                  data={job}
                  canViewJob
                  //    isBusiness={type?.toLowerCase() == "business-jobs"}
                  refetchJobs={appliedJobsRefetch}
                />
              </div>
            ))}
          </div>
          <div className="">
            <Pagination className='mt-10'/>
          </div>
        </div>
      ) : null}
    </div>
  );
}
