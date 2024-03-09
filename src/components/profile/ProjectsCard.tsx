import React from "react";

export default function ProjectsCard({ project }) {
  return (
    <div className="text-[#000000] font-normal text-sm border-dash rounded-[4px] p-4 flex flex-col gap-4">
      <div className="bg-gray-400 rounded-[4px] h-[160px]"></div>
      <h3 className="font-medium text-base">{project.title}</h3>
      <span className="">{project.description}</span>
      <span className="underline">See more</span>
    </div>
  );
}
