import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Back,
  ButtonOutline,
  SearchComponent,
  BorderlessSelect,
  JobItem,
  Loader,
  JobPostForm,
  Modal,
} from "../../../components";
import { useDashboardContext } from "../../../context/hooks";

import { useGetBusinessUserJobsQuery } from "../../../api";

const selectOptions = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 2" },
];
export default function SeeMoreJobs() {
  const { user } = useDashboardContext();
  const [jobModal, setJobModal] = useState(false);

  const { type } = useParams();
  const {
    data: jobsData,
    refetch: jobsRefetch,
    isFetching: jobsLoading,
  } = useGetBusinessUserJobsQuery({ businessId: user?.business?.id });

  return (
    <div>
      <Back className={`mb-[64px]`} link={"/dashboard"} />
      <div className="flex items-start justify-between mb-10">
        <h3 className="fonnt-medium text-[20px] text-[#212121]">
          {type?.toLowerCase() == "business-jobs" ? (
            <span className="">Manage your job postings</span>
          ) : (
            <span className="">
              Hi, {user?.name}! Welcome to the Nodes Job center
            </span>
          )}
        </h3>

        {type?.toLowerCase() == "business-jobs" ? (
          <ButtonOutline
            onClick={() => setJobModal(true)}
            className="max-w-max"
          >
            Create a new job posting
          </ButtonOutline>
        ) : (
          <ButtonOutline className="max-w-max">Saved</ButtonOutline>
        )}
      </div>

      <div className="flex justify-between items-center mb-[64px]">
        <div
          className={`${
            type?.toLowerCase() == "business-jobs"
              ? "w-full max-w-[455px]"
              : "max-w-[240px] w-full"
          } `}
        >
          <SearchComponent padding="px-4 py-[13px]" />
        </div>

        {type?.toLowerCase() !== "business-jobs" ? (
          <div className="flex justify-end gap-[32px]">
            <BorderlessSelect label="Role" options={selectOptions} />
            <BorderlessSelect label="Skills" options={selectOptions} />

            <BorderlessSelect label="Rate" options={selectOptions} />

            <BorderlessSelect label="Working hours" options={selectOptions} />

            <BorderlessSelect label="Job type" options={selectOptions} />
          </div>
        ) : null}
      </div>

      <pre className="hidden text-blue-400 text-wrap max-w-[600px]">
        {JSON.stringify(jobsData?.jobs, null, 2)}
      </pre>

      {jobsLoading && !jobsData ? (
        <div className="my-40">
          <Loader />
        </div>
      ) : null}
      {!jobsLoading && jobsData?.jobs?.length === 0 ? (
        <div className="text-base text-primary">Nothing to see.</div>
      ) : null}

      {!jobsLoading && jobsData && jobsData?.jobs?.length > 0 ? (
        <div className="grid grid-cols-3 gap-6">
          {jobsData?.jobs?.map((job) => (
            <div key={job?.id} className="">
              <JobItem
                data={job}
                isBusiness={type?.toLowerCase() == "business-jobs"}
              />
            </div>
          ))}
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
