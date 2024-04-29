import React from "react";
import JobDetails from "./jobs/index.tsx";
import EventDetails from "./events/index.tsx";

import { useParams } from "react-router-dom";

export default function Details() {
  const { type } = useParams();

  return (
    <div className="main-padding">
      {type?.toLowerCase() == "business-jobs" ? <JobDetails /> : null}
      {type?.toLowerCase() == "all-events" || type?.toLowerCase() == "my-events"? (
        <div>
          <EventDetails />
        </div>
      ) : null}
    </div>
  );
}
