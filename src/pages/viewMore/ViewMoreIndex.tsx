/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import JobsForYouGrid from "./JobsForYouGrid";
import AppliedJobsGrid from "./AppliedJobsGrid";
import JobsByYouGrid from "./JobsByYouGrid";
import {
  Back,
  ButtonOutline,
  SearchComponent,
  BorderlessSelect,
  // JobItem,
  // Loader,
  JobPostForm,
  EventPostForm,
  Modal,
} from "../../components";
import { useDashboardContext } from "../../context/hooks";

// import {
//   useGetBusinessUserJobsQuery,
//   useGetJobsQuery,
//   useGetBusinessUserEventsQuery,
// } from "../../api";

const selectOptions = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 2" },
];
export default function ViewMoreIndex() {
  const { user } = useDashboardContext();
  const navigate = useNavigate();
  const [jobModal, setJobModal] = useState(false);
  const [eventModal, setEventModal] = useState(false);

  const { type } = useParams();

  const handleCreateModal = () => {
    if (type?.toLowerCase() == "jobs-by-you") {
      setJobModal(true);
    }

    if (type?.toLowerCase() == "business-events") {
      setEventModal(true);
    }
  };

  return (
    <div className="main-padding">
      <Back className={`mb-[64px]`} link={"/dashboard"} />

      <div className="flex items-start justify-between mb-10">
        <h3 className="fonnt-medium text-[20px] text-[#212121]">
          {type?.toLowerCase() == "business-jobs" ||
          type?.toLowerCase() == "business-events" ? (
            <span className="">
              Manage your{" "}
              {type?.toLowerCase() == "business-jobs"
                ? "job postings"
                : "events"}
            </span>
          ) : (
            <span className="">
              Hi, {user?.name}! Welcome to the Nodes Job center
            </span>
          )}
        </h3>

        {type?.toLowerCase() == "jobs-by-you" ||
        type?.toLowerCase() == "business-events" ? (
          <ButtonOutline
            onClick={() => handleCreateModal()}
            className="max-w-max"
          >
            Create a{" "}
            {type?.toLowerCase() == "jobs-by-you" ? "job post" : "event"}
          </ButtonOutline>
        ) : (
          <ButtonOutline
            onClick={() => navigate("/saved")}
            className="max-w-max"
          >
            Saved
          </ButtonOutline>
        )}
      </div>
      <div className="flex justify-between items-center mb-[64px]">
        <div
          className={`${
            type?.toLowerCase() == "jobs-by-you" ||
            type?.toLowerCase() == "business-events"
              ? "w-full max-w-[455px]"
              : "max-w-[240px] w-full"
          } `}
        >
          <SearchComponent padding="px-4 py-[13px]" />
        </div>

        {type?.toLowerCase() !== "jobs-by-you" &&
        type?.toLowerCase() !== "business-events" ? (
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
        {JSON.stringify(type, null, 2)}
      </pre>

      {type?.toLowerCase() === "applied-jobs" ? (
        <AppliedJobsGrid />
      ) : type?.toLowerCase() === "jobs-for-you" ? (
        <JobsForYouGrid />
      ) : type?.toLowerCase() === "jobs-by-you" ? (
        <JobsByYouGrid />
      ) : (
        <div className="w-full flex items-center justify-center py-20">
          <span>Nothing to see</span>
        </div>
      )}

      <Modal sizeClass="sm:max-w-[800px]" open={jobModal} setOpen={setJobModal}>
        <JobPostForm
          refetchAllJobs={() => {}}
          closeModal={() => setJobModal(false)}
        />
      </Modal>
      <Modal
        sizeClass="sm:max-w-[800px]"
        open={eventModal}
        setOpen={setEventModal}
      >
        <EventPostForm
          refetchEvents={() => {}}
          closeModal={() => setEventModal(false)}
        />
      </Modal>
    </div>
  );
}
