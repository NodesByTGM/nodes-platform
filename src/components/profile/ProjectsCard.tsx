/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
type ProjectsCard = {
  project: any;
  setProjectDetailsModal?: (e) => void;
  setProjectDetails?: (e) => void;
};
export default function ProjectsCard({
  project,
  setProjectDetailsModal,
  setProjectDetails,
}: ProjectsCard) {
  return (
    <div className="h-full">
      <div className="h-full text-[#000000] font-normal text-sm border-dash rounded-[4px] p-4 flex flex-col gap-4">
        <img
          className="bg-gray-400 rounded-[4px] h-[160px]"
          src={project?.url}
          alt=""
        />
        <h3 className="font-medium text-base">{project.name}</h3>
        <span className="">{project.description}</span>
        <span
          onClick={() => {
            setProjectDetails && setProjectDetails(project);
            setProjectDetailsModal && setProjectDetailsModal(true);
          }}
          className="underline cursor-pointer mt-auto"
        >
          See more
        </span>
      </div>
    </div>
  );
}
