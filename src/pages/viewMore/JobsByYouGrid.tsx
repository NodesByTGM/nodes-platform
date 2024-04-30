/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useGetBusinessUserJobsQuery } from "../../api";
import { JobItem, Loader } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
export default function JobsByYouGrid() {
  const user = useSelector((state: RootState) => state?.user?.user);
  const [jobsData, setJobsData] = useState<any>([]);
  const {
    data: jobsResponse,
    refetch: jobsRefetch,
    isFetching: jobsLoading,
  } = useGetBusinessUserJobsQuery({ businessId: user?.business?.id });

  useEffect(() => {
    if (jobsResponse?.result?.items?.length > 0) {
      setJobsData(jobsResponse?.result.items);
    }
  }, [jobsResponse]);
  return (
    <div>
      {/* {JSON.stringify(user?.business?.id)} */}
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
        <div className="grid grid-cols-3 gap-6">
          {jobsData?.map((job) => (
            <div key={job?.id} className="">
              <JobItem
                data={job}
                isBusiness
                //    isBusiness={type?.toLowerCase() == "business-jobs"}
                refetchJobs={jobsRefetch}
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
