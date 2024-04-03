/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import SavedJobs from "./SavedJobs";
import SavedEvents from "./SavedEvents";
import { useGetSavedJobsQuery, useGetSavedEventsQuery } from "../../api";

import { SectionNavs } from "../../components";
export default function Saved() {
  const [savedJobsData, setSavedJobsData] = useState<any>([])

  const [savedEventsData, setSavedEventsData] = useState<any>([])

  const [navs, setNavs] = useState([
    { id: 1, label: "Jobs", count: null },
    {
      id: 2,
      label: "Events",
      count: null,
    },
  ]);
  const [selectedNav, setSelectedNav] = useState(navs[0]);

  const {
    data: savedJobsResponse,
    refetch: savedJobsRefetch,
    isFetching: savedJobsLoading,
  } = useGetSavedJobsQuery();

  const {
    data: savedEventsResponse,
    refetch: savedEventsRefetch,
    isFetching: savedEventsLoading,
  } = useGetSavedEventsQuery();

  const handleCount = (tab, count) => {
    setNavs((prevNavs) => {
      return prevNavs.map((nav) => {
        if (nav.label.toLowerCase() === tab) {
          return { ...nav, count: count };
        }
        return nav;
      });
    });
  };

  useEffect(() => {
    if(savedJobsResponse?.result?.items?.length > 0){
      setSavedJobsData(savedJobsResponse?.result.items)
    }

  }, [savedJobsResponse])

  useEffect(() => {
    if(savedEventsResponse?.result?.items?.length > 0){
      setSavedEventsData(savedEventsResponse?.result.items)
    }

  }, [savedEventsResponse])

  useEffect(() => {
    const jobCount = savedJobsData?.length;

    if (jobCount > 0) {
      handleCount("jobs", jobCount);
    }
  }, [savedJobsData?.length]);

  useEffect(() => {
    const eventCount = savedEventsData?.length;

    if (eventCount > 0) {
      handleCount("events", eventCount);
    }
  }, [savedEventsData?.length]);

  return (
    <div>
      <div className="flex flex-col gap-10">
        <h3 className="font-medium text-[20px] text-[#212121]">Saved</h3>
        <div className="">
          {" "}
          <SectionNavs
            navs={navs}
            selectedNav={selectedNav}
            setSelectedNav={setSelectedNav}
          />
        </div>

        {selectedNav.label.toLowerCase() === "jobs" && (
          <SavedJobs
            data={savedJobsData || []}
            refetch={savedJobsRefetch}
            isFetching={savedJobsLoading}
          />
        )}
        {selectedNav.label.toLowerCase() === "events" && (
          <div className="">
            <SavedEvents
              data={savedEventsData || []}
              refetch={savedEventsRefetch}
              isFetching={savedEventsLoading}
            />
          </div>
        )}
      </div>
    </div>
  );
}
