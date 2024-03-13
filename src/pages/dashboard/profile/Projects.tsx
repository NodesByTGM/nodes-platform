import React, { useState } from "react";
import { Card, ProjectsCard, Modal } from "../../../components";
import ProjectDetail from "./ProjectDetail";
import ProjectForm from "./ProjectForm";
import { useProfileContext } from "../../../context/hooks";
import { projectModalTypes } from "../../../utilities";

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
    editProjectModal,
    setEditProjectModal,
    user,
  } = useProfileContext();
  const [projects] = useState<ProjectType[]>([]);
const [projectAction, setProjectAction] = useState(projectModalTypes.add)
  const addProject = () => {
    setProjectAction(projectModalTypes.add)
    setEditProjectModal(true);
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
              Hi, {user?.name}
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
        <ProjectDetail details={projectDetails} />
      </Modal>
      <Modal
        sizeClass="sm:max-w-[1020px]"
        open={editProjectModal}
        setOpen={setEditProjectModal}
      >
        <ProjectForm details={projectDetails} type={projectAction} />
      </Modal>
    </div>
  );
}
