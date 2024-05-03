/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MyEventsGrid from "./MyEventsGrid";
import AllEventsGrid from "./AllEventsGrid";

import {
  Back,
  ButtonOutline,
  SearchComponent,

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

export default function ViewMoreIndex() {
  const { user } = useDashboardContext();
  // const navigate = useNavigate();
  const [jobModal, setJobModal] = useState(false);
  const [eventModal, setEventModal] = useState(false);

  const { type } = useParams();

  const handleCreateModal = () => {
    setEventModal(true);
  };

  return (
    <div className="main-padding">
      <Back className={`mb-[64px]`} link={"/dashboard"} />

      <div className="flex items-start justify-between mb-10">
        <h3 className="fonnt-medium text-[20px] text-[#212121]">
          <span className="">Manage your events</span>
        </h3>
        {user?.subscription?.plan.toLowerCase() === "business" ? (
          <ButtonOutline
            onClick={() => handleCreateModal()}
            className="max-w-max"
          >
            Create a new event
          </ButtonOutline>
        ) : null}
      </div>
      <div className="flex justify-between items-center mb-[64px]">
        <div className={`w-full max-w-[455px]`}>
          <SearchComponent padding="px-4 py-[13px]" />
        </div>
      </div>
      <pre className="hidden text-blue-400 text-wrap max-w-[600px]">
        {JSON.stringify(type, null, 2)}
      </pre>

      {type?.toLowerCase() === "all-events" ? (
        <AllEventsGrid />
      ) : type?.toLowerCase() === "my-events" ? (
        <MyEventsGrid />
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
