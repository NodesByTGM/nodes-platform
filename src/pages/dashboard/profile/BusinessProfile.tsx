import React, { useState } from "react";
import { useDashboardContext } from "../../../context/hooks";
import { BusinessProfileCard, SectionNavs } from "../../../components";
import Jobs from "./businessProfile/Jobs";
import Projects from "./businessProfile/Projects";

import Events from "./businessProfile/Events";

export default function BusinessProfile() {
  const { user } = useDashboardContext();
  const [navs] = useState([
    { id: 1, label: "Jobs", count: null },
    { id: 2, label: "Projects", count: null },
    { id: 3, label: "Events", count: null },
  ]);
  const [selectedNav, setSelectedNav] = useState(navs[0]);

  return (
    <div className="">
      {" "}
      <div className="mb-10 flex flex-col gap-2 border-b border-[#D6D6D6] pb-[24px]">
        {" "}
        <h3 className="font-semibold text-[#212121] text-[20px]">
          Business Profile{" "}
        </h3>
        <span className="text-[#212121] font-normal text-base">
          See what other people will see when they view your profile{" "}
        </span>
      </div>
      <div className="flex gap-x-8 h-full">
        <pre className="hidden">{JSON.stringify(user, null, 2)}</pre>

        <div className="max-h-max">
          <BusinessProfileCard />
        </div>

        <div className="flex flex-col gap-6 w-full">
          <div className="w-full  border-b border-[#EFEFEF]">
            <SectionNavs
              navs={navs}
              selectedNav={selectedNav}
              setSelectedNav={setSelectedNav}
            />
          </div>

          <div className="p-6 rounded-lg border border-[#EFEFEF] bg-[#ffffff]">
            {selectedNav?.label?.toLowerCase() == "jobs" && <Jobs />}

            {selectedNav?.label?.toLowerCase() == "projects" && <Projects />}

            {selectedNav?.label?.toLowerCase() == "events" && <Events />}
          </div>
        </div>
      </div>
    </div>
  );
}
