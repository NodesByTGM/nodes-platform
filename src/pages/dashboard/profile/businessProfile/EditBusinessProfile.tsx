import React, {
  useState,
  useRef,
  // useEffect,
  useMemo,
  // useCallback,
} from "react";
import { FormDiv, Button, Back } from "../../../../components";

export default function EditBusinessProfile() {
  const businessInfo = useRef<HTMLDivElement>(null);

  const introduceBusiness = useRef<HTMLDivElement>(null);
  const addJob = useRef<HTMLDivElement>(null);
  const createEvent = useRef<HTMLDivElement>(null);
  const addProject = useRef<HTMLDivElement>(null);

  const onlineProfiles = useRef<HTMLDivElement>(null);

  const navOptions = useMemo(
    () => [
      {
        id: "0",
        title: "Business Information",
        link: "businessInfo",
        ref: businessInfo,
      },
      {
        id: "1",
        title: "Introduction",
        link: "introduceBusiness",
        ref: introduceBusiness,
      },
      {
        id: "2",
        title: "Jobs",
        link: "addJob",
        ref: addJob,
      },
      {
        id: "3",
        title: "Events",
        link: "createEvent",
        ref: createEvent,
      },

      {
        id: "4",
        title: "Projects",
        link: "addProject",
        ref: addProject,
      },
      {
        id: "5",
        title: "Online profiles",
        link: "onlineProfiles",
        ref: onlineProfiles,
      },
    ],
    [
      businessInfo,
      introduceBusiness,
      addJob,
      createEvent,
      addProject,
      onlineProfiles,
    ]
  );

  const [selected, setSelected] = useState(navOptions[0]);
  const scrollToDiv = (navRef) => {
    navRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#FBFCE9] px-10">
      <div className="flex flex-col gap-10 pt-6">
        <Back link="/business/profile" />

        <span className="font-medium text-[20px] text-primary mb-10">
          Edit profile
        </span>
      </div>
      <div className="flex gap-x-8">
        <div className="max-h-max w-[240px]">
          <div className="flex flex-col">
            <div className="rounded-lg border border-[#EFEFEF] p-6 bg-white flex flex-col gap-4">
              <div className="flex items-start flex-col  gap-[16px] ">
                {navOptions.map((nav) => (
                  <div
                    onClick={() => {
                      setSelected(nav);
                      scrollToDiv(nav.ref);
                    }}
                    key={nav.title}
                    className={`${
                      selected?.title?.toLowerCase() == nav?.title.toLowerCase()
                        ? "border-primary text-primary "
                        : "border-transparent text-[#000000] "
                    } flex cursor-pointer flex-col items-center justify-center text-nowrap border-b-[2px] py-2  font-medium  `}
                  >
                    <span className="text-base font-medium ">{nav?.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full mt-8">
            <Button
            //   isLoading={updateProfileLoading}
            //   disabled={!isValid}
            //   className={`${!isValid ? "opacity-50" : ""} `}
            >
              Save and Continue
            </Button>
          </div>

          {/* <FormDebug
            form={{
              values,
              touched,
              errors,
              // userData: profileData?.result
            }}
            className="mt-4 hidden"
          /> */}
        </div>

        <div className="flex-1 flex flex-col gap-8 ">
          <div ref={businessInfo} className="">
            <FormDiv title="Business Information"></FormDiv>
          </div>
          <div ref={introduceBusiness} className="">
            <FormDiv title="Introduce Business"></FormDiv>
          </div>
          <div ref={addJob} className="">
            <FormDiv title="Create a Job Post"></FormDiv>
          </div>
          <div ref={createEvent} className="">
            <FormDiv title="Create an event"></FormDiv>
          </div>
          <div ref={addProject} className="">
            <FormDiv title="Add a project"></FormDiv>
          </div>
          <div ref={onlineProfiles} className="">
            <FormDiv title="Online profiles"></FormDiv>
          </div>
        </div>
      </div>
    </div>
  );
}
