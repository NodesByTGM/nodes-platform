/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { EventItem } from "../../components";
import { Loader } from "../../components";


type ISavedEvents = {
  data: Array<any>;
  refetch: () => void;
  isFetching: boolean;
};
export default function SavedEvents({
  data,
  refetch = () => {},
  isFetching,
}: ISavedEvents) {
  return (
    <div>
    <div className="">
      {isFetching &&  data?.length === 0 ? (
        <div className="my-40">
          <Loader />
        </div>
      ) : null}

      {(!isFetching && data?.length === 0) || (!isFetching && !data) ? (
        <div className="text-base text-primary my-40  text-center">Nothing to see.</div>
      ) : null}

      {!isFetching && data && data?.length > 0 ? (
        <div className="grid grid-cols-3 gap-8">
          {data?.map((event) => (
            <div key={event?.id} className="">
              {" "}
              <EventItem data={event} refetchEvents={refetch} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  </div>
  );
}
