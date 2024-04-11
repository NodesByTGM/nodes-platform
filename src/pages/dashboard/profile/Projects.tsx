/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Card, ProjectsCard, Modal, Loader } from "../../../components";
import ProjectDetail from "./ProjectDetail";
import ProjectForm from "./ProjectForm";
import { useProfileContext } from "../../../context/hooks";
import { projectModalTypes } from "../../../utilities";
import { useGetMyProjectsQuery } from "../../../api";

// type ProjectType = {
//   id: string;
//   img: string;
//   title: string;
//   description: string;
// };

export default function Projects() {
  const [projectsData, setProjectsData] = useState<any>([]);

  const {
    projectDetails,
    setProjectDetails,
    projectDetailsModal,
    setProjectDetailsModal,
    editProjectModal,
    setEditProjectModal,
    user,
    profileData,
    projectAction,
    setProjectAction,
  } = useProfileContext();

  const {
    data: projectsResponse,
    refetch: projectsRefetch,
    // isSuccess: projectIsSuccess,
    isFetching: projectsLoading,
  } = useGetMyProjectsQuery();

  const addProject = () => {
    setProjectAction(projectModalTypes.add);
    setEditProjectModal(true);
  };

  useEffect(() => {
    if (projectsResponse?.result?.items?.length > 0) {
      setProjectsData(projectsResponse?.result.items);
    }
  }, [projectsResponse]);
  return (
    <div className="relative flex flex-col min-h-[400px]">
      <Card
        className=""
        title="Projects"
        listCount={projectsData?.length}
        editButton
        editFunction={() => addProject()}
      >
        {/* {JSON.stringify(projects, null, 2)} */}
        {projectsLoading && projectsData.length === 0 ? (
          <div className="my-20">
            <Loader />
          </div>
        ) : null}

        {projectsData?.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {projectsData?.map((project) => (
              <div key={project.id} className="h-full ">
                <ProjectsCard
                  project={project}
                  setProjectDetailsModal={setProjectDetailsModal}
                  setProjectDetails={setProjectDetails}
                />
              </div>
            ))}
          </div>
        ) : null}

        {!projectsLoading && projectsData.length === 0 ? (
          <div className="mx-auto max-w-[219px] flex flex-col justify-center items-center ">
            <h3 className="text-center font-medium text-base text-[#212121]">
              Hi,{" "}
              {profileData?.result?.name
                ? profileData?.result?.name
                : user?.name}
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
        ) : null}

        {/* {!projectsLoading ? (
          <div className="">
            {projectsData?.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {projectsData?.map((project) => (
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
                  Hi,{" "}
                  {profileData?.result?.name
                    ? profileData?.result?.name
                    : user?.name}
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
          </div>
        ) : null} */}
      </Card>

      {projectsData?.length == 0 ? (
        <div className=" w-full">
          <img src="/img/AddProjects.svg" alt="" className="w-full" />
        </div>
      ) : null}
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
        <ProjectForm
          refetchAllProjects={projectsRefetch}
          details={projectDetails}
          type={projectAction}
        />
      </Modal>
    </div>
  );
}
