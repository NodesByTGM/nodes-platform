import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
export default function OurTeamSection() {
  const team = [
    {
      id: 1,
      img: "/landingPageImg/TeamMate1.svg",
      fullName: "Full name",
      jobTitle: "Highlight value two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 2,
      img: "/landingPageImg/TeamMate2.svg",
      fullName: "Full name",
      jobTitle: "Highlight value two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 3,
      img: "/landingPageImg/TeamMate3.svg",
      fullName: "Full name",
      jobTitle: "Highlight value two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 4,
      img: "/landingPageImg/TeamMate4.svg",
      fullName: "Full name",
      jobTitle: "Highlight value two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 5,
      img: "/landingPageImg/TeamMate5.svg",
      fullName: "Full name",
      jobTitle: "Highlight value two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 6,
      img: "/landingPageImg/TeamMate1.svg",
      fullName: "Full name",
      jobTitle: "Highlight value two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ];
  return (
    <div className="landingPageMainDiv py-[112px] text-[#000000]">
      <div className="flex flex-col gap-20">
        <div className="mx-auto flex flex-col  max-w-[768px] min-w-[768px] text-center">
          <span className="font-semibold text-[16px] mb-4">Our values</span>
          <span className="font-medium text-[40px] mb-6">
            Introduce the team
          </span>
          <span className="font-normal text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare.
          </span>
        </div>
        <div className="grid grid-cols-3 gap-y-[64px] gap-x-[48px]">
          {team.map((teamMate) => (
            <div
              key={teamMate.id}
              className="flex flex-col  text-[#000000] items-center text-center"
            >
              <div className="mb-6">
                <img src={teamMate.img} alt="" className="" />
              </div>
              <span className="text-[20px] font-normal">
                {teamMate.fullName}
              </span>
              <span className="text-[18px] font-normal mb-4">
                {teamMate.jobTitle}
              </span>
              <span className="font-normal text-[16px] mb-6">
                {teamMate.description}
              </span>
              <div className="grid grid-cols-2 gap-[14px]">
                <div className="">
                  {" "}
                  <FaLinkedin />
                </div>
                <div className="">
                  {" "}
                  <FaTwitter />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
