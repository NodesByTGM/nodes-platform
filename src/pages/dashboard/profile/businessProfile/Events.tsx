/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { useGetMyEventsQuery } from "../../../../api";
import {
  Modal,
  EventItem,
  EventPostForm,
  Loader,
} from "../../../../components";
import { useDashboardContext } from "../../../../context/hooks";

export default function Events() {
  const { profileData, eventModal, setEventModal } = useDashboardContext();

  const [eventsData, setEventsData] = useState<any>([]);
  const {
    data: eventsResponse,
    refetch: eventsRefetch,
    isFetching: eventsLoading,
    isSuccess: eventsIsSuccess,
  } = useGetMyEventsQuery();

  useEffect(() => {
    if (eventsIsSuccess && eventsResponse?.result?.items) {
      setEventsData(eventsResponse?.result?.items);
    }
  }, [eventsResponse, eventsIsSuccess]);
  return (
    <div>
      <div className="">
        <pre className="hidden">{JSON.stringify(profileData, null, 2)}</pre>
        {eventsLoading && eventsData.length === 0 ? (
          <div className="my-20">
            <Loader />
          </div>
        ) : null}

        {eventsData?.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {eventsData?.map((data) => (
              <div key={data?.id} className="">
                <EventItem data={data} refetchEvents={eventsRefetch} isBusiness/>
              </div>
            ))}
          </div>
        ) : null}

        {!eventsLoading && eventsData.length === 0 ? (
          <div className="mt-6 mx-auto max-w-[239px] flex flex-col justify-center items-center ">
            <h3 className="text-center font-medium text-base text-[#212121]">
              Hi, {profileData?.result?.name}
            </h3>
            <span className="mt-8  text-center font-normal text-base text-[#212121]">
              Nothing to see here yet, add an event to get started.{" "}
            </span>

            <h3
              onClick={() => setEventModal(true)}
              className="cursor-pointer mt-10 text-customprimary font-medium text-base"
            >
              Add Event Post
            </h3>
          </div>
        ) : null}

        {eventsData?.length == 0 ? (
          <div className=" w-full">
            <img src="/img/AddProjects.svg" alt="" className="w-full" />
          </div>
        ) : null}
      </div>
      <Modal
        sizeClass="sm:max-w-[800px]"
        open={eventModal}
        setOpen={setEventModal}
      >
        <EventPostForm
          
          refetchEvents={eventsRefetch}
          closeModal={() => setEventModal(false)}
        />
      </Modal>
    </div>
  );
}
