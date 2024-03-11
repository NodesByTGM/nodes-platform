import React, { useState,  } from "react";
import { Card, ProjectsCard, Modal } from "../../../components";
import ProjectDetail from "./ProjectDetail";
import EditProject from "./EditProject";
import {useProfileContext} from '../../../context/hooks'

type ProjectType = {
  id: string;
  img: string;
  title: string;
  description: string;
};

export default function Projects() {
  const {
    projectDetails,
    setProjectDetails,
    projectDetailsModal,
    setProjectDetailsModal,
    editProjectmodal,
    setEditProjectModal,
  } = useProfileContext();
  const [projects, setProjects] = useState<ProjectType[]>([]);

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
      {
        id: "3",
        img: "/img/ProjectThumbnailSample.png",
        title: "Name  of project 2",
        description:
          "Lorem ipsum dolor sit amet consectetur. ",
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
              <div key={project.id} className="h-full ">
                <ProjectsCard
                  project={project}
                  setProjectDetailsModal={setProjectDetailsModal}
                  setProjectDetails={setProjectDetails}
                />
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
      <Modal
        sizeClass="sm:max-w-[1020px]"
        open={projectDetailsModal}
        setOpen={setProjectDetailsModal}
      >
        <ProjectDetail details={projectDetails}  />
      </Modal>
      <Modal
        sizeClass="sm:max-w-[1020px]"
        open={editProjectmodal}
        setOpen={setEditProjectModal}
      >
        <EditProject details={projectDetails} />
      </Modal>
      
    </div>
  );
}
