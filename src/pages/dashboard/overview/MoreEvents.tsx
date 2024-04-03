/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Loader, EventItem } from "../../../components";
// import { useGetBusinessUserEventsQuery } from "../../../api";
import { useDashboardContext } from "../../../context/hooks";

export default function MoreEvents({ getRequest }) {
  const [eventsData, setEventsData] = useState<any>([]);

  const { user } = useDashboardContext();
  const { type } = useParams();
  const {
    data: eventsResponse,
    refetch: eventsRefetch,
    isFetching: eventsLoading,
  } = getRequest({ businessId: user?.business?.id });

  useEffect(() => {
    if (eventsResponse?.result?.items?.length > 0) {
      setEventsData(eventsResponse?.result.items);
    }
  }, [eventsResponse]);
  return (
    <div className="">
      {eventsLoading && eventsData.length === 0 ? (
        <div className="my-40">
          <Loader />
        </div>
      ) : null}
      {!eventsLoading && eventsData.length === 0  ? (
        <div className="text-base text-primary">Nothing to see.</div>
      ) : null}

      {eventsData?.length > 0? (
        <div className="grid grid-cols-3 gap-6">
          {eventsData?.map((event) => (
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
