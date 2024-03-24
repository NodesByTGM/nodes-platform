import React from "react";
import JobDetails from "./jobs/index.tsx";
import { useParams } from "react-router-dom";

export default function Details() {
  const { type } = useParams();

  return (
    <div>
      {type?.toLowerCase() == "business-jobs" ? (
        <JobDetails />
      ) : (
        <div>Event details</div>
      )}
    </div>
  );
}
