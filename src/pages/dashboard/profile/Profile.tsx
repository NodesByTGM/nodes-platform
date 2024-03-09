import React, { useState } from "react";
import { IndividualProfileCard } from "../../../components/index.ts";
import Interactions from "./Interactions.tsx";
import Projects from "./Projects.tsx";

export default function Individual() {
  const navs = ["Projects", "Interactions"];
  const [selectedNav, setSelectedNav] = useState(navs[0]);

  return (
    <div className="flex gap-x-8 h-full">
      <div className="max-h-max">
        {" "}
        <IndividualProfileCard />
      </div>
      <div className="flex-1 ">
        <div className="flex flex-col w-full gap-10">
          <div className="flex items-center  gap-[32px] overflow-x-auto  ">
            {navs.map((nav) => (
              <div
                onClick={() => setSelectedNav(nav)}
                key={nav}
                className={`${
                  selectedNav.toLowerCase() == nav.toLowerCase()
                    ? "border-primary text-primary "
                    : "border-transparent text-[#727272] "
                } flex cursor-pointer flex-col items-center justify-center text-nowrap border-b-[2px] pb-2   pt-2 px-4 font-semibold  `}
              >
                <span className="text-base font-medium ">{nav}</span>
              </div>
            ))}
          </div>
          {selectedNav.toLowerCase() == "projects" && <Projects />}

          {selectedNav.toLowerCase() == "interactions" && <Interactions />}
        </div>
      </div>
    </div>
  );
}
