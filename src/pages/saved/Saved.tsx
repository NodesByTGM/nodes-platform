import React, { useState } from "react";
import { SectionNavs, JobItem, EventItem } from "../../components";
export default function Saved() {
  const [navs] = useState([
    {
      label: "Jobs",
      count: 1,
    },
    {
      label: "Events",
      count: 1,
    },
  ]);
  const [selectedNav, setSelectedNav] = useState(navs[0]);
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

        <div className="grid grid-cols-3 gap-8">
          {selectedNav.label.toLowerCase() === "jobs" && (
            <div className="">
              <JobItem />
            </div>
          )}
          {selectedNav.label.toLowerCase() === "events" && (
            <div className="">
              <EventItem />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
