import React, { useState } from "react";
import { Card, ProjectsCard } from "../../../components";

type ProjectType = {
  id: string;
  img: string;
  title: string;
  description: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<ProjectType[]>([
    // {
    //   id: "1",
    //   img: "",
    //   title: "Name  of project",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur. Cum amet id lectus viverra faucibus. Arcu eget hendrerit ut dictumst id. Lorem ipsum dolor sit amet consec...",
    // },
  ]);

  const addProject = () => {
    const updatedProjects = [
      ...projects,
      {
        id: "2",
        img: "/img/ProjectThumbnailSample.png",
        title: "Name  of project",
        description:
          "Lorem ipsum dolor sit amet consectetur. Cum amet id lectus viverra faucibus. Arcu eget hendrerit ut dictumst id. Lorem ipsum dolor sit amet consec...",
      },
    ];
    setProjects(updatedProjects);
  };
  return (
    <div className="relative flex flex-col min-h-[400px]">
      <Card
        className=""
        title="Projects"
        listCount={projects?.length}
        editButton
        editFunction={() => console.log("edit")}
      >
        {projects?.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {projects?.map((project) => (
              <div key={project.id} className="">
                <ProjectsCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-[219px] flex flex-col justify-center items-center ">
            <h3 className="text-center font-medium text-base text-[#212121]">
              Hi, Aderinsola
            </h3>
            <span className="mt-8 text-center font-normal text-base text-[#212121]">
              Nothing to see here yet, add a project or two to get started.
            </span>

            <h3
              onClick={() => addProject()}
              className="cursor-pointer mt-10 text-primary font-medium text-base"
            >
              Add Project
            </h3>
          </div>
        )}
      </Card>
      {projects?.length == 0 && (
        <div className=" w-full">
          <img src="/img/AddProjects.svg" alt="" className="w-full" />
        </div>
      )}
    </div>
  );
}
