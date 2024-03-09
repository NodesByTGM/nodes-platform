import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import AppConfig from "../../../utilities/config";
import {
  Button,
  ButtonOutline,
  FormDiv,
  Input,
  TextArea,
  Switch,
  AddCollaboratorInputDiv,
  ProjectFileUpload,
  CollaboratorInput
} from "../../../components";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useProfileContext } from "../../../context/hooks";

function InteractionsSwitch({ label, description }) {
  return (
    <div className="flex gap-6 items-center">
      <div className="flex-1 flex flex-col gap-2">
        <span className="text-[#000000] font-medium text-base">{label}</span>
        <span className="text-[#000000] font-normal text-sm">
          {description}
        </span>
      </div>
      <div className="">
        <Switch />
      </div>
    </div>
  );
}
export default function EditIndividual() {
  const { profileType, hasProject, setHasProject } = useProfileContext();
  const personalInfo = useRef<HTMLDivElement>(null);
  const introduceYourself = useRef<HTMLDivElement>(null);

  const onlineProfiles = useRef<HTMLDivElement>(null);
  const addAProject = useRef<HTMLDivElement>(null);

  const interactions = useRef<HTMLDivElement>(null);
  const addProjectNav = useMemo(
    () => ({
      id: "4",
      title: "Add a project",
      link: "Add a project",
      ref: addAProject,
    }),
    [addAProject]
  );

  const individualNavs = useMemo(
    () => [
      {
        id: "1",
        title: "Personal Information",
        link: "personalInfo",
        ref: personalInfo,
      },
      {
        id: "2",
        title: "Introduce yourself",
        link: "introduceYourself",
        ref: introduceYourself,
      },

      {
        id: "3",
        title: "Online profiles",
        link: "onlineProfiles",
        ref: onlineProfiles,
      },
      {
        id: "5",
        title: "Interactions",
        link: "interactions",
        ref: interactions,
      },
    ],
    [personalInfo, introduceYourself, onlineProfiles, interactions]
  );

  const [navs, setNavs] = useState(individualNavs);
  const [selected, setSelected] = useState(navs[0]);

  const scrollToDiv = (navRef) => {
    navRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavs = useCallback(() => {
    if (profileType.toLowerCase() == "individual") {
      setNavs(individualNavs);
      setHasProject(false);
      return;
    }
    if (profileType.toLowerCase() == "talent") {
      setNavs([...individualNavs, addProjectNav]);
      setHasProject(true);
      return;
    }
  }, [profileType, individualNavs, addProjectNav]);

  useEffect(() => {
    handleNavs();
  }, [profileType, handleNavs]);

  useEffect(() => {
    setSelected(navs[0]);
  }, [navs]);

  return (
    <div className="flex gap-x-8 h-full">
      <div className="max-h-max w-[400px]">
        <div className="flex flex-col">
          <div className="rounded-lg p-6 bg-white flex flex-col gap-4">
            <div className="flex items-start flex-col  gap-[16px] ">
              {navs.map((nav) => (
                <div
                  onClick={() => {
                    setSelected(nav);
                    scrollToDiv(nav.ref);
                  }}
                  key={nav.title}
                  className={`${
                    selected.title.toLowerCase() == nav.title.toLowerCase()
                      ? "border-primary text-primary "
                      : "border-transparent text-[#000000] "
                  } flex cursor-pointer flex-col items-center justify-center text-nowrap border-b-[2px] py-2  font-medium  `}
                >
                  <span className="text-base font-medium ">{nav.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-6 mt-8">
          <Link to={AppConfig.PATHS.Dashboard.Profile.Base} className="w-full">
            <ButtonOutline>Back to profile</ButtonOutline>
          </Link>
          <Button>Save and Continue</Button>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-8 ">
        {/* {hasProject ? "True" : "False"} */}
        <div ref={personalInfo}>
          <FormDiv title="Personal Information">
            <div className="">
              <div className="grid grid-col-1 gap-6">
                <div className="w-full">
                  <Input
                    placeholder={AppConfig.PLACEHOLDERS.Firstname}
                    id="First name"
                    label="First name"
                    // error={errors.name}
                    // value={values.name}
                    // touched={touched.name}
                    // onChange={handleChange("name")}
                    // onBlur={handleBlur}
                  />
                </div>
                <div className="w-full">
                  <Input
                    placeholder={AppConfig.PLACEHOLDERS.Lastname}
                    id="Last name"
                    label="Last name"
                    // error={errors.username}
                    // value={values.username}
                    // touched={touched.username}
                    // onChange={handleChange("username")}
                    // onBlur={handleBlur}
                  />
                </div>
                <div className="w-full">
                  <Input
                    placeholder={AppConfig.PLACEHOLDERS.Location}
                    id="Location"
                    label="Location"
                    // error={errors.username}
                    // value={values.username}
                    // touched={touched.username}
                    // onChange={handleChange("username")}
                    // onBlur={handleBlur}
                  />
                </div>
              </div>
            </div>
          </FormDiv>
        </div>
        <div ref={introduceYourself}>
          <FormDiv title="Introduce yourself">
            <div className="">
              <div className="grid grid-col-1 gap-6">
                <div className="w-full">
                  <Input
                    placeholder={AppConfig.PLACEHOLDERS.Headline}
                    id="Headline"
                    label="Headline"
                    // error={errors.name}
                    // value={values.name}
                    // touched={touched.name}
                    // onChange={handleChange("name")}
                    // onBlur={handleBlur}
                  />
                </div>
                <div className="w-full">
                  {/* <Input
                    placeholder={AppConfig.PLACEHOLDERS.Bio}
                    id="Bio"
                    label="Bio"
                    // error={errors.username}
                    // value={values.username}
                    // touched={touched.username}
                    // onChange={handleChange("username")}
                    // onBlur={handleBlur}
                  /> */}
                  <TextArea label="Bio" />
                </div>
              </div>
            </div>
          </FormDiv>
        </div>
        <div ref={onlineProfiles}>
          <FormDiv title="Online profiles">
            <div className="">
              <div className="grid grid-col-1 gap-6">
                <div className="w-full">
                  <Input
                    placeholder={AppConfig.PLACEHOLDERS.PersomalWebsite}
                    id="Personal Website"
                    label="Personal Website"
                    // error={errors.name}
                    // value={values.name}
                    // touched={touched.name}
                    // onChange={handleChange("name")}
                    // onBlur={handleBlur}
                  />
                </div>
                <div className="w-full">
                  <Input
                    placeholder={AppConfig.PLACEHOLDERS.LinkedIn}
                    id="LinkedIn"
                    label="LinkedIn"
                    // error={errors.username}
                    // value={values.username}
                    // touched={touched.username}
                    // onChange={handleChange("username")}
                    // onBlur={handleBlur}
                  />
                </div>
                <div className="w-full">
                  <Input
                    placeholder={AppConfig.PLACEHOLDERS.Instagram}
                    id="Instagram"
                    label="Instagram"
                    // error={errors.username}
                    // value={values.username}
                    // touched={touched.username}
                    // onChange={handleChange("username")}
                    // onBlur={handleBlur}
                  />
                </div>
                <div className="w-full">
                  <Input
                    placeholder={AppConfig.PLACEHOLDERS.X}
                    id="x"
                    label="x"
                    // error={errors.username}
                    // value={values.username}
                    // touched={touched.username}
                    // onChange={handleChange("username")}
                    // onBlur={handleBlur}
                  />
                </div>
              </div>
            </div>
          </FormDiv>
        </div>
        {hasProject && (
          <div ref={addAProject}>
            <FormDiv title="Add a project">
              <div className="">
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
                      <span className="font-medium text-base">
                        Add collaborators
                      </span>
                      <span className="font-normal text-base">
                        You can add cast members...etc here
                      </span>
                    </div>
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-6">
                        <div className="rounded-full font-normal text-xs text-[#757575] h-6 w-6 border border-[#D6D6D6] flex items-center justify-center">
                          1
                        </div>
                        <AddCollaboratorInputDiv >
                          <CollaboratorInput placeholder='Name' textSize='text-base'/>
                          <CollaboratorInput placeholder='role' textSize='text-xs'/>

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
                      <div className="flex flex-col gap-10 mb-2">
                        <ProjectFileUpload label="Project thumbnail" />
                        <ProjectFileUpload label="Project images" />
                      </div>

                      <div className="w-full flex items-center justify-end">
                        <div className="max-w-max">
                          {" "}
                          <Button>Add Projects</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FormDiv>
          </div>
        )}

        <div ref={interactions}>
          <FormDiv title="Interactions">
            <div className="">
              <div className="grid grid-col-1 gap-6">
                <InteractionsSwitch
                  label="Spaces"
                  description="Enabling this will allow all your acitivity in spaces show up on your profile"
                />
                <InteractionsSwitch
                  label="Comments"
                  description="Enabling this will allow all your acitivity in spaces show up on your profile"
                />
              </div>
            </div>
          </FormDiv>
        </div>
      </div>
    </div>
  );
}
