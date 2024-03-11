/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from "react";
import { ProfileContext } from "../../../context/profile";

import { ActionIcon } from "../../../components";

const TextDivs = ({
  label,
  description,
  children,
}: {
  label?: string;
  description?: string;
  children?: any;
}) => {
  return (
    <div className="flex flex-col">
      {label && <span className="text-sm mb-[5px]">{label}</span>}
      {description && <span className="font-medium"> {description} </span>}
      {children && <div className="">{children}</div>}
    </div>
  );
};
export default function ProjectDetail({ details }) {
  const {
 
    setProjectDetailsModal,

    setEditProjectModal,
  } = useContext(ProfileContext);

  const handleEditModalOpen = () => {
    setProjectDetailsModal(false);

    setEditProjectModal(true);
  };

  return (
    <div>
      <div className="flex flex-col gap-8">
        <pre className="hidden">{JSON.stringify(details, null, 2)}</pre>
        <div className="flex items-center justify-between">
          <h3 className="text-[#000000] font-medium text-[20px]">
            Project details
          </h3>
          <div onClick={() => handleEditModalOpen()} className="cursor-pointer max-w-max">
            <ActionIcon edit />
          </div>
        </div>
        <div className="">
          <img
            src="/img/ProjectThumbnailSample.png"
            alt=""
            className="w-full h-[160px]"
          />
        </div>
        <div className="flex flex-col gap-6 text-[#000000] text-sm">
          <TextDivs label={"Project name"} description={"Lorem ipsum"} />
          <TextDivs
            label={"Description"}
            description={
              "Lorem ipsum dolor sit amet consectetur. Cum amet id lectus viverra faucibus. Arcu eget hendrerit ut dictumst id. Lorem ipsum dolor sit amet consectetur. Cum amet id lectus viverra faucibus. Arcu eget hendrerit ut dictumst id. Lorem ipsum dolor sit amet consectetur. Cum amet id lectus viverra faucibus. Arcu eget hendrerit ut dictumst id. "
            }
          />
          <TextDivs
            label={"Project URL"}
            description={"http://urlblahblahblah.com"}
          />
          <TextDivs label={"Collaborators"}>
            <ol className="list-decimal  font-medium pl-[20px]">
              <li className="">Name of collaborator</li>
              <li className="">Name of collaborator</li>

              <li className="">Name of collaborator</li>
            </ol>
          </TextDivs>

          <div className="flex flex-col gap-4">
            <h3 className="font-medium">Project images</h3>
            <div className="grid grid-cols-3 gap-2">
              <img
                src="/img/ProjectThumbnailSample.png"
                alt=""
                className="w-full rounded-[5px] h-[160px]"
              />
              <img
                src="/img/ProjectThumbnailSample.png"
                alt=""
                className="w-full rounded-[5px] h-[160px]"
              />
              <img
                src="/img/ProjectThumbnailSample.png"
                alt=""
                className="w-full rounded-[5px] h-[160px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
