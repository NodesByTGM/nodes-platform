/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Card, Modal, JobItem, Loader } from "../../../components";
import { useProfileContext } from "../../../context/hooks";
import JobPostForm from "../../../components/JobPostForm";
import { useGetJobsQuery } from "../../../api";
type JobAndEventType = {
  id: string;
  img: string;
  title: string;
  description: string;
};

export default function JobAndEvents() {
  const [jobsData, setJobsData] = useState<any>([])
  const { jobModal, setJobModal, user } = useProfileContext();
  const {
    data: jobsResponse,
    refetch: jobsRefetch,
    isFetching: jobsLoading,
  } = useGetJobsQuery();

  const [jobAndEvents] = useState<JobAndEventType[]>([]);

  const addJobAndEvents = () => {
    setJobModal(true);
  };
  useEffect(() => {
    if(jobsResponse?.result?.items?.length > 0){
      setJobsData(jobsResponse?.result.items)
    }

  }, [jobsResponse])
  return (
    <div className="relative flex flex-col min-h-[400px]">
      {/* {JSON.stringify(user, null, 2)} */}
      <Card
        className=""
        title="Job/Events"
        listCount={jobAndEvents?.length}
        editButton
        editFunction={() => addJobAndEvents()}
      >
        <pre className="text-blue-500 hidden">
          {JSON.stringify(jobsResponse?.result.items, null, 2)}
        </pre>

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
                  <JobItem data={data} />
                </div>
              ))}
            </div>
          ) : null}

          {!jobsLoading && jobsData.length === 0 ? (
            <div className="mx-auto max-w-[239px] flex flex-col justify-center items-center ">
              <h3 className="text-center font-medium text-base text-[#212121]">
                Hi, {user?.username}
              </h3>
              <span className="mt-8  text-center font-normal text-base text-[#212121]">
                Nothing to see here yet, add a job post or event to get started.{" "}
              </span>

              <h3
                onClick={() => addJobAndEvents()}
                className="cursor-pointer mt-10 text-primary font-medium text-base"
              >
                Add Job Post or Event
              </h3>
            </div>
          ) : null}
        </div>
      </Card>
      {jobsData?.length == 0 ? (
        <div className=" w-full">
          <img src="/img/AddProjects.svg" alt="" className="w-full" />
        </div>
      ) : null}


      <Modal sizeClass="sm:max-w-[800px]" open={jobModal} setOpen={setJobModal}>
        <JobPostForm
          refetchAllJobs={jobsRefetch}
          closeModal={() => setJobModal(false)}
        />
      </Modal>
    </div>
  );
}
