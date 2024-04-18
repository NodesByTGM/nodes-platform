/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { useProfileContext } from "../../../context/hooks";
import { MdCancel } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import { projectModalTypes } from "../../../utilities";
import {
  projectSchema,
  projectValidationType,
} from "../../../utilities/validation";
import { FormDebug } from "../../../components";
import { useCreateUserProjectMutation } from "../../../api";
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
import { useFormik, FormikProvider, FieldArray } from "formik";
import { toast } from "react-toastify";

export default function ProjectForm({
  details,
  type = "add",
  refetchAllProjects = () => {},
}) {
  const { setEditProjectModal, projectAction } = useProfileContext();
  const initialCollaborator = {
    name: "",
    role: "",
    collabName: "",
  };
  const [
    createUserProject,
    { isLoading: createProjectLoading, isSuccess: isCreateProjectSuccessful },
  ] = useCreateUserProjectMutation();

  const handleClickForm = (values?: any) => {
    const data = {
      ...values,
      collaborators: values.collaborators.map((collaborator) => {
        return {
          name: collaborator.collabName,
          role: collaborator.role,
        };
      }),
    };
    createUserProject(data);
  };

  const formik = useFormik<projectValidationType>({
    initialValues: {
      name: "",
      description: "",
      projectURL: "",
      thumbnail: {
        id: "",
        url: "",
      },
      images: [
        // {
        //   id: "",
        //   url: "",
        // },
      ],
      collaborators: [initialCollaborator],
    },
    validationSchema: projectSchema,
    validateOnBlur: true,
    onSubmit: handleClickForm,
  });

  const {
    setFieldValue,
    setValues,
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    isValid,
    handleBlur,
  } = formik;

  useEffect(() => {
    if (isCreateProjectSuccessful) {
      toast.success("Successfully Created Product");
      setEditProjectModal(false);
      console.log("revetchProjects is called");
      refetchAllProjects();
    }
  }, [isCreateProjectSuccessful]);

  const populateForm = () => {
    setValues({
      ...details,
      collaborators: details?.collaborators?.map((collaborator) => {
        return {
          name: collaborator.name,
          role: collaborator.role,
          collabName: collaborator.name,
        };
      }),
    });
  };

  useEffect(() => {
    //populate form if
    if (projectAction == projectModalTypes.edit) {
      populateForm();
    }
  }, [details]);

  return (
    <div>
      <FormDebug form={{ values, errors, touched }} className="hidden" />
      <div className="flex flex-col gap-8">
        {/* <pre className="">{JSON.stringify(details, null, 2)}</pre> */}
        <div className="flex items-center justify-between">
          <h3 className="text-[#000000] font-medium text-[20px]">
            {type == projectModalTypes.add ? "Add Project" : "Edit Project"}
          </h3>
          <div
            onClick={() => setEditProjectModal(false)}
            className="cursor-pointer max-w-max"
          >
            <MdCancel className="text-primary text-[24px]" />
          </div>
        </div>
        <FormikProvider value={formik}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="grid grid-col-1 gap-6">
              <div className="w-full">
                <Input
                  required
                  placeholder={AppConfig.PLACEHOLDERS.ProjectName}
                  id="name"
                  label="Project Name"
                  error={errors.name}
                  value={values.name}
                  touched={touched.name}
                  onChange={handleChange("name")}
                  onBlur={handleBlur}
                />
              </div>
              <div className="w-full">
                <TextArea
                  required
                  placeholder={AppConfig.PLACEHOLDERS.ProjectDescription}
                  id="description"
                  label="Description"
                  error={errors.description}
                  value={values.description}
                  touched={touched.description}
                  onChange={handleChange("description")}
                  onBlur={handleBlur}
                />
              </div>
              <div className="w-full">
                <Input
                  required
                  placeholder={AppConfig.PLACEHOLDERS.ProjectUrl}
                  id="projectURL"
                  label="Project Url"
                  error={errors.projectURL}
                  value={values.projectURL}
                  touched={touched.projectURL}
                  onChange={handleChange("projectURL")}
                  onBlur={handleBlur}
                />
              </div>
              <div className="w-full flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="font-medium text-base">
                    Add collaborators
                  </span>
                  <span className="font-normal text-base">
                    You can add cast members...etc here
                  </span>
                </div>
                <div className="flex flex-col gap-6">
                  <FieldArray
                    name="collaborators"
                    render={(arrayHelpers) => (
                      <div className="w-full flex flex-col gap-6">
                        {values.collaborators.map((collaborator, index) => (
                          <div
                            key={collaborator?.name + String(index)}
                            className="flex w-full gap-1 flex-col"
                          >
                            <div className="flex items-center gap-6">
                              <div className="rounded-full font-normal text-xs text-[#757575] h-6 w-6 border border-[#D6D6D6] flex items-center justify-center">
                                {index + 1}
                              </div>
                              <div className="flex flex-1">
                                <AddCollaboratorInputDiv>
                                  <CollaboratorInput
                                    id={`collaborators[${index}].collabName`}
                                    name={`collaborators[${index}].collabName`}
                                    value={
                                      values.collaborators[index].collabName
                                    }
                                    onChange={handleChange}
                                    placeholder="Name"
                                    textSize="text-base"
                                  />
                                  <CollaboratorInput
                                    id={`collaborators[${index}].role`}
                                    name={`collaborators[${index}].role`}
                                    value={values.collaborators[index].role}
                                    onChange={handleChange}
                                    placeholder="role"
                                    textSize="text-xs"
                                  />
                                </AddCollaboratorInputDiv>
                              </div>
                              {values.collaborators?.length > 1 && (
                                <span
                                  onClick={() => arrayHelpers.remove(index)}
                                  className="text-primary"
                                >
                                  <FaTimes />
                                </span>
                              )}
                            </div>
                            {typeof errors?.collaborators?.length ===
                              "number" &&
                            errors?.collaborators?.length > 0 &&
                            errors?.collaborators[index] ? (
                              <div className="ml-12 text-sm text-red-500">
                                {
                                  JSON.parse(
                                    JSON.stringify(
                                      errors?.collaborators[index],
                                      null,
                                      2
                                    )
                                  )?.collabName
                                }
                              </div>
                            ) : null}
                          </div>
                        ))}
                        <div
                          onClick={() => arrayHelpers.push(initialCollaborator)}
                          className="cursor-pointer flex items-center gap-6 mb-[16px]"
                        >
                          <div className="rounded-full bg-customsecondary font-normal text-xs text-white h-6 w-6   flex items-center justify-center">
                            <FaPlus />
                          </div>
                          <span className="text-primary font-normal text-base">
                            Add another collaborator
                          </span>
                        </div>
                      </div>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col gap-10 mb-2">
                <ProjectFileUpload
                  value={values?.thumbnail?.url}
                  onChange={(value) => {
                    setFieldValue("thumbnail", value);
                  }}
                  label="Project thumbnail"
                />
                <ProjectFileUpload
                  value={""}
                  onChange={(value) => {
                    setFieldValue("images", [...values.images, value]);
                  }}
                  label="Project images"
                />
              </div>

              <div className="">
                <FieldArray
                  name="images"
                  render={(arrayHelpers) => (
                    <div className="w-full grid grid-cols-3 ">
                      {values.images.map((image, index) => (
                        <div
                          onClick={() => arrayHelpers.remove(index)}
                          key={image?.id + String(index)}
                          className="w-full  "
                        >
                          <AddProjectsItem data={{ img: image?.url }} />
                        </div>
                      ))}
                    </div>
                  )}
                />
              </div>

              <div className="w-full flex items-center justify-end">
                <div className="max-w-max">
                  {" "}
                  <Button
                    type="submit"
                    isLoading={createProjectLoading}
                    className={`${!isValid ? "opacity-50" : ""} `}
                    disabled={!isValid}
                  >
                    Save and Continue
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </FormikProvider>
      </div>
    </div>
  );
}
