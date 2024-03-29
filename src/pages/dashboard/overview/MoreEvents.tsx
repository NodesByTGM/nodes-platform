import React from "react";
import { useParams } from "react-router-dom";

import { Loader, EventItem } from "../../../components";
// import { useGetBusinessUserEventsQuery } from "../../../api";
import { useDashboardContext } from "../../../context/hooks";

export default function MoreEvents({getRequest}) {
  const { user } = useDashboardContext();
    const { type } = useParams();
  const {
    data: eventsData,
    refetch: eventsRefetch,
    isFetching: eventsLoading,
  } = getRequest({ businessId: user?.business?.id });
  return (
    <div className="">
      {eventsLoading && !eventsData ? (
        <div className="my-40">
          <Loader />
        </div>
      ) : null}
      {!eventsLoading && eventsData?.events?.length === 0 ? (
        <div className="text-base text-primary">Nothing to see.</div>
      ) : null}

      {!eventsLoading && eventsData && eventsData?.events?.length > 0 ? (
        <div className="grid grid-cols-3 gap-6">
          {eventsData?.events?.map((event) => (
            <div key={event?.id} className="">
              <EventItem
                data={event}
                isBusiness={type?.toLowerCase() == "business-events"}
                refetchEvents={() => eventsRefetch}
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
