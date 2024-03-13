/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useProfileContext } from "../../../context/hooks";
import { MdCancel } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

import {
  Button,
  Input,
  TextArea,
  AddCollaboratorInputDiv,
  ProjectFileUpload,
  CollaboratorInput,
  AddProjectsItem,
} from "../../../components";
import AppConfig from "../../../utilities/config";

export default function EditProject({ details }) {
  const { setEditProjectModal } = useProfileContext();

  return (
    <div>
      <div className="flex flex-col gap-8">
        <pre className="hidden">{JSON.stringify(details, null, 2)}</pre>
        <div className="flex items-center justify-between">
          <h3 className="text-[#000000] font-medium text-[20px]">
            Edit Project
          </h3>
          <div
            onClick={() => setEditProjectModal(false)}
            className="cursor-pointer max-w-max"
          >
            <MdCancel className="text-primary text-[24px]" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="grid grid-col-1 gap-6">
            <div className="w-full">
              <Input
                required
                placeholder={AppConfig.PLACEHOLDERS.ProjectName}
                id="Project Name"
                label="Project Name"
                // error={errors.name}
                // value={values.name}
                // touched={touched.name}
                // onChange={handleChange("name")}
                // onBlur={handleBlur}
              />
            </div>
            <div className="w-full">
              <TextArea
                required
                placeholder={AppConfig.PLACEHOLDERS.ProjectDescription}
                id="Description"
                label="Description"
                // error={errors.username}
                // value={values.username}
                // touched={touched.username}
                // onChange={handleChange("username")}
                // onBlur={handleBlur}
              />
            </div>
            <div className="w-full">
              <Input
                required
                placeholder={AppConfig.PLACEHOLDERS.ProjectUrl}
                id="Project Url"
                label="Project Url"
                // error={errors.username}
                // value={values.username}
                // touched={touched.username}
                // onChange={handleChange("username")}
                // onBlur={handleBlur}
              />
            </div>
            <div className="w-full flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="font-medium text-base">Add collaborators</span>
                <span className="font-normal text-base">
                  You can add cast members...etc here
                </span>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-6">
                  <div className="rounded-full font-normal text-xs text-[#757575] h-6 w-6 border border-[#D6D6D6] flex items-center justify-center">
                    1
                  </div>
                  <AddCollaboratorInputDiv>
                    <CollaboratorInput
                      placeholder="Name"
                      textSize="text-base"
                    />
                    <CollaboratorInput placeholder="role" textSize="text-xs" />
                  </AddCollaboratorInputDiv>
                </div>
                <div className="flex items-center gap-6 mb-[16px]">
                  <div className="rounded-full bg-primary font-normal text-xs text-white h-6 w-6   flex items-center justify-center">
                    <FaPlus />
                  </div>
                  <span className="text-primary font-normal text-base">
                    Add another collaborator
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-col gap-10 mb-2">
              <ProjectFileUpload label="Project thumbnail" />
              <ProjectFileUpload label="Project images" />
            </div>

            <div className="grid grid-cols-3 gap-6">
              <AddProjectsItem
                data={{ img: "/img/ProjectThumbnailSample.png" }}
              />
              <AddProjectsItem
                data={{ img: "/img/ProjectThumbnailSample.png" }}
              />

              <AddProjectsItem
                data={{ img: "/img/ProjectThumbnailSample.png" }}
              />
            </div>

            <div className="w-full flex items-center justify-end">
              <div onClick={() => setEditProjectModal(false)} className="max-w-max">
                {" "}
                <Button>Save and Continue</Button>
              </div>
            </div>

          
          </div>
        </div>
      </div>
    </div>
  );
}
