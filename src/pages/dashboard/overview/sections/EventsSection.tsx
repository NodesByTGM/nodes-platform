import React, { useEffect, useState } from "react";
import { useGetEventsQuery } from "../../../../api";
import { CarouselSection, Loader } from "../../../../components";
export default function EventsSection() {
  const [eventsData, setEventsData] = useState([]);
  const {
    data: allEvents,
    refetch: allEventsRefetch,
    isFetching: allEventsLoading,
    isSuccess: allEventsIsSuccess,
  } = useGetEventsQuery();

  useEffect(() => {
    if (allEventsIsSuccess) {
      setEventsData(allEvents?.events);
    }
  }, [allEvents, allEventsIsSuccess]);
  return (
    <div>
      {allEventsLoading && eventsData.length === 0 ? (
        <div className="my-40">
          <Loader />
        </div>
      ) : null}

      {!allEventsLoading && eventsData?.length === 0 ? (
        <div className="text-base text-primary my-40  text-center">
          Nothing to see.
        </div>
      ) : null}

      {!allEventsLoading && eventsData && eventsData?.length > 0 ? (
        <CarouselSection
          data={eventsData || []}
          event
          refetchEvents={allEventsRefetch}
          title={`Trending`}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}
        />
      ) : null}
    </div>
  );
}
