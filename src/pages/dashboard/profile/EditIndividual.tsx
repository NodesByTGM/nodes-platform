import React, { useState, useRef, useEffect } from "react";
import AppConfig from "../../../utilities/config";
import { Button, ButtonOutline, FormDiv } from "../../../components";
import { Link } from "react-router-dom";
import { useProfileContext } from "../../../context/hooks";
export default function EditIndividual() {
  const { profileType, setProfileType } = useProfileContext();
  const personalInfo = useRef<HTMLDivElement>(null);
  const introduceYourself = useRef<HTMLDivElement>(null);

  const onlineProfiles = useRef<HTMLDivElement>(null);

  const interactions = useRef<HTMLDivElement>(null);

  const navs = [
    {
      id: "1",
      title: "Personal Information",
      link: "personalInfo",
      ref: personalInfo,
    },
    {
      id: "2",
      title: "Introduce yourself",
      link: "introduceYourself",
      ref: introduceYourself,
    },

    {
      id: "3",
      title: "Online profiles",
      link: "onlineProfiles",
      ref: onlineProfiles,
    },
    {
      id: "34",
      title: "Interactions",
      link: "interactions",
      ref: interactions,
    },
  ];
  const [selected, setSelected] = useState(navs[0]);
  const scrollToDiv = (navRef) => {
    navRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setProfileType("Individual");
    console.log(profileType)
  });

  return (
    <div className="flex gap-x-8 h-full">
      <div className="max-h-max w-[400px]">
        <div className="flex flex-col">
          <div className="rounded-lg p-6 bg-white flex flex-col gap-4">
            <div className="flex items-start flex-col  gap-[16px] ">
              {navs.map((nav) => (
                <div
                  onClick={() => {
                    setSelected(nav);
                    scrollToDiv(nav.ref);
                  }}
                  key={nav.title}
                  className={`${
                    selected.title.toLowerCase() == nav.title.toLowerCase()
                      ? "border-primary text-primary "
                      : "border-transparent text-[#000000] "
                  } flex cursor-pointer flex-col items-center justify-center text-nowrap border-b-[2px] py-2  font-medium  `}
                >
                  <span className="text-base font-medium ">{nav.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-6 mt-8">
          <Link to={AppConfig.PATHS.Dashboard.Profile.Base} className="w-full">
            <ButtonOutline>Back to profile</ButtonOutline>
          </Link>
          <Button>Save and Continue</Button>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-8 ">
        <div ref={personalInfo}>
          <FormDiv title="Personal Information">
            <div className="h-40"></div>
          </FormDiv>
        </div>
        <div ref={introduceYourself}>
          <FormDiv title="Introduce yourself">
            <div className="h-40"></div>
          </FormDiv>
        </div>
        <div ref={onlineProfiles}>
          <FormDiv title="Online profiles">
            <div className="h-40"></div>
          </FormDiv>
        </div>
        <div ref={interactions}>
          <FormDiv title="Interactions">
            <div className="h-40"></div>
          </FormDiv>
        </div>
      </div>
    </div>
  );
}
