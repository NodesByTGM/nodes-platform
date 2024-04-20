import React from "react";
import { SectionTitles } from "../../components/landingPage";

export default function SkillsSection() {
  const skills = [
    "Movie Production / Directing.",
    "Fashion Design / Styling",
    "Photography / Videography.",
    "Writing / Scripting.",
    "Modeling / Runway.",
    "Makeup Artistry.",
    "Set Design / Art Direction.",
    "Music / Sound Production.",
  ];
  return (
    <div className="landingPageMainDiv py-[108px]">
      <div className="mx-auto text-center">
        <SectionTitles
          titleClass="!md:text-[48px]"
          title="A catchy phrase about Nodes"
          description="Lorem ipsum dolor sit amet consectetur."
        />
      </div>
      <div className="flex flex-wrap gap-10 mt-[108px]">
        {skills.map((skill) => (
          <div
            key={skill}
            className="text-primary bg-[#FBFCE9] font-normal text-base max-w-max px-10 py-4 rounded-full"
          >
            <span className="">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
