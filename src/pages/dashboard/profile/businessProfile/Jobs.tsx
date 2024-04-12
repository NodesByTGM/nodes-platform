/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { useGetMyJobsQuery } from "../../../../api";
import { Modal, JobItem, Loader } from "../../../../components";
import { useDashboardContext } from "../../../../context/hooks";
import JobPostForm from "../../../../components/JobPostForm";


export default function Jobs() {
  const { profileData, jobModal, setJobModal } = useDashboardContext();
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
        <pre className="hidden">{JSON.stringify(profileData, null, 2)}</pre>
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
          <div className="mt-6 mx-auto max-w-[239px] flex flex-col justify-center items-center ">
            <h3 className="text-center font-medium text-base text-[#212121]">
              Hi, {profileData?.result?.name}
            </h3>
            <span className="mt-8  text-center font-normal text-base text-[#212121]">
              Nothing to see here yet, add a job post or event to get started.{" "}
            </span>

            <h3
              onClick={() => setJobModal(true)}
              className="cursor-pointer mt-10 text-customprimary font-medium text-base"
            >
              Add Job Post
            </h3>
          </div>
        ) : null}

        {jobsData?.length == 0 ? (
          <div className=" w-full">
            <img src="/img/AddProjects.svg" alt="" className="w-full" />
          </div>
        ) : null}
      </div>
      <Modal sizeClass="sm:max-w-[800px]" open={jobModal} setOpen={setJobModal}>
        <JobPostForm
          refetchAllJobs={jobsRefetch}
          closeModal={() => setJobModal(false)}
        />
      </Modal>
    </div>
  );
}
