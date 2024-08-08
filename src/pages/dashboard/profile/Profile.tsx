import React, { useState, useContext, useEffect, useCallback } from "react";
import { IndividualProfileCard } from "../../../components/index.ts";
import Interactions from "./Interactions.tsx";
import Projects from "./Projects.tsx";
import JobAndEvents from "./JobAndEvents";
import { ProfileContext } from "../../../context/profile.tsx";
export default function Individual() {
  const {
    profileType,
    setHasProject,
    // profileData,
    // profileIsSuccess,
    // profileLoading,
  } = useContext(ProfileContext);
  const [navs, setNavs] = useState(["Interactions"]);
  const [selectedNav, setSelectedNav] = useState(navs[0]);

  const handleNavs = useCallback(() => {
    if (profileType.toLowerCase() == "individual") {
      setNavs(["Interactions"]);
      setHasProject(false);
      return;
    }
    if (profileType.toLowerCase() == "talent") {
      setNavs(["Projects", "Interactions"]);
      setHasProject(true);
      return;
    }

    if (profileType.toLowerCase() == "business") {
      setNavs(["Job/Events", "Projects"]);
      setHasProject(true);
      return;
    }
  }, [profileType]);

  useEffect(() => {
    handleNavs();
  }, [profileType, handleNavs]);

  useEffect(() => {
    setSelectedNav(navs[0]);
  }, [navs]);
  return (
    <div className="flex flex-col xl:flex-row gap-x-8 h-full">
      
      {/* <pre className="text-blue-200">{JSON.stringify(profileData,null,2)}</pre> */}
      {/* <span className="st">{localStorage.getItem('bearerToken')}</span> */}
      {/* ss {profileLoading ? 'True' : "false"} */}
      <div className="max-h-max xl:mx-0 sm:mx-auto mx-0">
        <IndividualProfileCard />
      </div>
      <div className="flex-1 mt-12 xl:mt-0">
        <div className="flex flex-col w-full gap-10">
          <div className="flex items-center  gap-[8px] overflow-x-auto  ">
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

          {selectedNav.toLowerCase() == "job/events" && <JobAndEvents />}
        </div>
      </div>
    </div>
  );
}
