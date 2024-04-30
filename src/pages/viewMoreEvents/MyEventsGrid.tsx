/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useGetMyEventsQuery } from "../../api";
import { EventItem, Loader } from "../../components";
export default function AppliedJobsGrid() {
  const [eventsData, setEventsData] = useState<any>([]);
  const {
    data: appliedJobsResponse,
    refetch: eventsRefetch,
    isFetching: eventsLoading,
  } = useGetMyEventsQuery();

  useEffect(() => {
    if (appliedJobsResponse?.result?.items?.length > 0) {
      setEventsData(appliedJobsResponse?.result.items);
    }
  }, [appliedJobsResponse]);
  return (
    <div>
      {eventsLoading && eventsData.length === 0 ? (
        <div className="my-40">
          <Loader />
        </div>
      ) : null}
      {!eventsLoading && eventsData.length === 0 ? (
        <div className="text-base text-primary my-40  text-center">
          Nothing to see.
        </div>
      ) : null}
      {eventsData?.length > 0 ? (
        <div className="grid grid-cols-3 gap-6">
          {eventsData?.map((event) => (
            <div key={event?.id} className="">
              <EventItem
                data={event}
                isBusiness
                canViewAndEditEventDetails
                //    isBusiness={type?.toLowerCase() == "business-jobs"}
                refetchEvents={() => eventsRefetch}
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
