/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { ItemsCarousel, Loader } from "../../../../components";
import { useNavigate } from "react-router-dom";
import { useGetEventsQuery } from "../../../../api";
export default function TrendingEventsSection() {
  const navigate = useNavigate();
  const [eventsData, setEventsData] = useState<any>([]);
  const {
    data: eventsResponse,
    refetch: eventsRefetch,
    isFetching: eventsLoading,
  } = useGetEventsQuery();

  useEffect(() => {
    if (eventsResponse?.result?.items?.length > 0) {
      setEventsData(eventsResponse?.result.items);
    }
  }, [eventsResponse]);

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
        <ItemsCarousel
          data={eventsData || []}
          navigateTo={() => navigate("/dashboard/view-more-events/all-events")}
          seeMore
          event
          refetchEvents={eventsRefetch}
          title={`Trending Events`}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}
        />
      ) : null}
    </div>
  );
}
