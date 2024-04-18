/* eslint-disable @typescript-eslint/no-explicit-any */

import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import AppConfig from "../../../utilities/config";
import {
  profileSchema,
  profileValidationType,
} from "../../../utilities/validation";
import {getAge} from '../../../utilities/common'
import { returnMaxDate } from "../../../utilities";
import moment from "moment";
import Countries from "../../../utilities/countries.json";
import { FormDebug, ProfileEventPostForm } from "../../../components";
import { toast } from "react-toastify";
import {
  Button,
  ButtonOutline,
  FormDiv,
  Input,
  TextArea,
  Switch,
  ProfileImgUploader,
  LocationSelect,
  DateSelect,
} from "../../../components";
import ProfileProjectForm from "./ProfileProjectForm";

import { Link } from "react-router-dom";
import { useProfileContext } from "../../../context/hooks";
import { useFormik, FormikProvider } from "formik";
import { useUpdateUserProfileMutation } from "../../../api";

function InteractionsSwitch({ label, description, value, setValue }) {
  return (
    <div className="flex gap-6 items-center">
      <div className="flex-1 flex flex-col gap-2">
        <span className="text-[#000000] font-medium text-base">{label}</span>
        <span className="text-[#000000] font-normal text-sm">
          {description}
        </span>
      </div>
      <div className="">
        <Switch value={value} setValue={setValue} />
      </div>
    </div>
  );
}

export default function EditIndividual() {
  const {
    profileType,
    hasProject,
    setHasProject,
    profileRefetch,
    profileData,
    profileIsSuccess,
  } = useProfileContext();
  const [
    updateUserProfile,
    {
      isLoading: updateProfileLoading,
      isSuccess: updateProfileSuccess,
      // isError: updateProfileIsError,
      // error: updateProfileError,
    },
  ] = useUpdateUserProfileMutation();

  const initialCollaborator = {
    name: "",
    role: "",
    collabName: "",
  };
  const personalInfo = useRef<HTMLDivElement>(null);
  const businessInfo = useRef<HTMLDivElement>(null);

  const introduceYourself = useRef<HTMLDivElement>(null);

  const onlineProfiles = useRef<HTMLDivElement>(null);
  const addAProject = useRef<HTMLDivElement>(null);
  const createEvent = useRef<HTMLDivElement>(null);
  const interactions = useRef<HTMLDivElement>(null);
  const navOptions = useMemo(
    () => [
      {
        id: "0",
        title: "Business Information",
        link: "businessInfo",
        ref: businessInfo,
        conditions: ["business"],
      },
      {
        id: "1",
        title: "Personal Information",
        link: "personalInfo",
        ref: personalInfo,
        conditions: ["talent", "individual"],
      },
      {
        id: "2",
        title: "Introduce yourself",
        link: "introduceYourself",
        ref: introduceYourself,
        conditions: ["talent", "individual"],
      },

      {
        id: "3",
        title: "Online profiles",
        link: "onlineProfiles",
        ref: onlineProfiles,
        conditions: ["talent", "individual"],
      },
      {
        id: "4",
        title: "Add a project",
        link: "Add a project",
        ref: addAProject,
        conditions: ["talent", "business"],
      },
      {
        id: "5",
        title: "Create Event",
        link: "Create Event",
        ref: createEvent,
        conditions: ["business"],
      },

      {
        id: "6",
        title: "Interactions",
        link: "interactions",
        ref: interactions,
        conditions: ["talent", "individual"],
      },
    ],
    [
      personalInfo,
      introduceYourself,
      onlineProfiles,
      interactions,
      createEvent,
      addAProject,
      businessInfo,
    ]
  );
  const [navs, setNavs] = useState(navOptions);
  const [selected, setSelected] = useState(navs[0]);

  const handleClickForm = (values: any) => {
    console.log(JSON.stringify(values, null, 2));
    const data = {
      name: `${values.firstName} ${values.lastName}`,
      username: values.username,
      avatar: values.avatar,
      skills: [],
      location: values.location,
      height: values.height,
      age: getAge(values.age),
      linkedIn: values.linkedIn,
      instagram: values.instagram,
      twitter: values.twitter,
      headline: values.headline,
      bio: values.bio,
      website: values.website,
      spaces: values.spaces,
      comments: values.comments,
      companyName: values.projectName,
      logo: values.projectUrl,
      yoe: 0,
    };
    // console.log(JSON.stringify(values, null, 2))
    updateUserProfile(data);
  };

  const formik = useFormik<profileValidationType>({
    initialValues: {
      firstName: profileData?.result?.name?.split(" ")[0],
      lastName: profileData?.result?.name?.split(" ")[1],
      username: profileData?.result?.username,
      avatar: profileData?.result?.avatar,
      location: profileData?.result?.location,
      height: profileData?.result?.height,
      age: profileData?.result?.dob,
      headline: profileData?.result?.headline,
      bio: profileData?.result?.bio,
      website: profileData?.result?.website,
      linkedIn: profileData?.result?.linkedIn,
      instagram: profileData?.result?.instagram,
      twitter: profileData?.result?.twitter,
      projectName: profileData?.result?.projectName,
      description: profileData?.result?.description,
      projectUrl: profileData?.result?.projectUrl,
      spaces: profileData?.result?.spaces,
      comments: profileData?.result?.comments,
      collaborators: [initialCollaborator],
    },
    validationSchema: profileSchema,
    validateOnBlur: true,
    onSubmit: handleClickForm,
  });

  const scrollToDiv = (navRef) => {
    navRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavs = useCallback(() => {
    setNavs([
      ...navOptions.filter((nav) =>
        nav.conditions.includes(profileType.toLowerCase())
      ),
    ]);

    if (profileType.toLowerCase() == "individual") {
      // setNavs(individualNavs);
      setHasProject(false);
      return;
    }
    if (profileType.toLowerCase() == "talent") {
      // setNavs([...individualNavs, addProjectNav]);
      setHasProject(true);
      return;
    }

    if (profileType.toLowerCase() == "business") {
      // setNavs([...individualNavs, addProjectNav]);
      setHasProject(true);
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileType, navOptions]);

  const populateFormValues = () => {
    console.log(JSON.stringify(profileData.user, null, 2));
  };
  const {
    setValues,
    setFieldValue,
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    isValid,
    handleBlur,
  } = formik;

  const handleInputPrefill = useCallback(() => {
    setValues({
      firstName: profileData?.result?.name?.split(" ")[0],
      lastName: profileData?.result?.name?.split(" ")[1],
      username: profileData?.result?.username,
      avatar: profileData?.result?.avatar,
      location: profileData?.result?.location,
      height: profileData?.result?.height,
      age: profileData?.result?.dob,
      headline: profileData?.result?.headline,
      bio: profileData?.result?.bio,
      website: profileData?.result?.website,
      linkedIn: profileData?.result?.linkedIn,
      instagram: profileData?.result?.instagram,
      twitter: profileData?.result?.twitter,
      projectName: profileData?.result?.projectName,
      description: profileData?.result?.description,
      projectUrl: profileData?.result?.projectUrl,
      spaces: profileData?.result?.spaces,
      comments: profileData?.result?.comments,
      collaborators: [initialCollaborator],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileData, setValues]);

  const handleSetSwitch = useCallback((field, value) => {
    setFieldValue(field, value);
  }, []);

  useEffect(() => {
    if (profileData?.result) {
      // setUserData(profileData?.result);
      handleInputPrefill();
    }
  }, [profileData, handleInputPrefill]);

  useEffect(() => {
    handleNavs();
  }, [profileType, handleNavs]);

  useEffect(() => {
    setSelected(navs[0]);
  }, [navs]);

  useEffect(() => {
    if (updateProfileSuccess) {
      toast.success("Successfully updated profile");
      profileRefetch();
    }
  }, [updateProfileSuccess]);

  useEffect(() => {
    if (profileIsSuccess) {
      populateFormValues();
    }
  }, [profileIsSuccess]);

  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={(e) => {
          e?.preventDefault();
          handleSubmit();
        }}
        className="flex gap-x-8 h-full"
      >
        <pre className="hidden">{JSON.stringify(profileData, null, 2)}</pre>
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
                      selected?.title?.toLowerCase() == nav?.title.toLowerCase()
                        ? "border-primary text-primary "
                        : "border-transparent text-[#000000] "
                    } flex cursor-pointer flex-col items-center justify-center text-nowrap border-b-[2px] py-2  font-medium  `}
                  >
                    <span className="text-base font-medium ">{nav?.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-6 mt-8">
            <Link
              to={AppConfig.PATHS.Dashboard.Profile.Base}
              className="w-full"
            >
              <ButtonOutline>Back to profile</ButtonOutline>
            </Link>
            <Button
              isLoading={updateProfileLoading}
              disabled={!isValid}
              className={`${!isValid ? "opacity-50" : ""} `}
            >
              Save and Continue
            </Button>
          </div>

          <FormDebug
            form={{
              values,
              touched,
              errors,
              userData: profileData?.result,
            }}
            className="mt-4 hidden"
          />
        </div>
        <div className="flex-1 flex flex-col gap-8 ">
          {/* {hasProject ? "True" : "False"} */}
          {/* {profileType.toLowerCase() == "business" && (
            <div ref={businessInfo} className="">
              <FormDiv title="Business Information">
                <div className="">
                  <div className="grid grid-col-1 gap-6">
                    <ProfileImgUploader
                      value={values?.avatar}
                      onChange={(value) => {
                        // alert(value)
                        setFieldValue("avatar", value);
                      }}
                    />
                    <div className="w-full">
                      <Input
                        placeholder={AppConfig.PLACEHOLDERS.Businessname}
                        id="Name of Business"
                        label="Name of Business"
                        // error={errors.name}
                        // value={values.name}
                        // touched={touched.name}
                        // onChange={handleChange("name")}
                        // onBlur={handleBlur}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-medium text-base ">Location</span>
                      <LocationSelect
                        paddingy="py-[16px]"
                        defaultValue={values.location}
                        options={Countries}
                        onChange={(value) =>
                          setFieldValue("location", value)
                        }
                      />
                    </div>
                    <div className="w-full">
                      <Input
                        placeholder={AppConfig.PLACEHOLDERS.Location}
                        id="Location"
                        label="Location"
                        error={errors.location}
                        value={values.location}
                        touched={touched.location}
                        onChange={handleChange("location")}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="w-full">
                      <Input
                        placeholder={AppConfig.PLACEHOLDERS.Year}
                        id="Year of Establishment"
                        label="Year of Establishment"
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
          )} */}

          {profileType.toLowerCase() !== "business" && (
            <div ref={personalInfo}>
              <FormDiv title="Personal Information">
                <div className="">
                  <div className="grid grid-col-1 gap-6">
                    <ProfileImgUploader
                      value={values?.avatar}
                      onChange={(value) => {
                        setFieldValue("avatar", value);
                      }}
                    />
                    <div className="w-full">
                      <Input
                        placeholder={AppConfig.PLACEHOLDERS.Firstname}
                        id="firstName"
                        label="First name"
                        error={errors.firstName}
                        value={values.firstName}
                        touched={touched.firstName}
                        onChange={handleChange("firstName")}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="w-full">
                      <Input
                        placeholder={AppConfig.PLACEHOLDERS.Lastname}
                        id="lastName"
                        label="Last name"
                        error={errors.lastName}
                        value={values.lastName}
                        touched={touched.lastName}
                        onChange={handleChange("lastName")}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="w-full">
                      <Input
                        placeholder={AppConfig.PLACEHOLDERS.Username}
                        id="username"
                        label="Username"
                        error={errors.username}
                        value={values.username}
                        touched={touched.username}
                        onChange={handleChange("username")}
                        onBlur={handleBlur}
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="font-medium text-base ">Location </span>
                      <LocationSelect
                        paddingy="py-[16px]"
                        defaultValue={values.location}
                        options={Countries}
                        onChange={(value) => setFieldValue("location", value)}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="w-full">
                        <Input
                          placeholder={AppConfig.PLACEHOLDERS.Height}
                          type={"number"}
                          id="height"
                          label="Height(cm)"
                          error={errors.height}
                          value={values.height}
                          touched={touched.height}
                          onChange={handleChange("height")}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className="w-full flex flex-col gap-1">
                        {/* <Input
                          disabled={
                            profileData?.result?.subscription?.plan?.toLowerCase() !==
                              "business" && values?.age > 18
                          }
                          placeholder={AppConfig.PLACEHOLDERS.Age}
                          type={"number"}
                          id="age"
                          label="Age"
                          error={errors.age}
                          value={values.age}
                          touched={touched.age}
                          onChange={handleChange("age")}
                          onBlur={handleBlur}
                        /> */}
                        <span className="font-medium text-base ">
                          Age 
                        </span>

                        <DateSelect
                          disabled={
                            profileData?.result?.subscription?.plan?.toLowerCase() !==
                              "business" 
                          }
                          max={returnMaxDate()}
                          labelStyle="!text-base"
                          required
                          id="age"
                          error={errors.age}
                          value={moment(values.age).format("yyyy-MM-DD")}
                          touched={touched.age}
                          onChange={handleChange("age")}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </FormDiv>
            </div>
          )}

          {profileType.toLowerCase() !== "business" && (
            <div ref={introduceYourself}>
              <FormDiv title="Introduce yourself">
                <div className="">
                  <div className="grid grid-col-1 gap-6">
                    <div className="w-full">
                      <Input
                        placeholder={AppConfig.PLACEHOLDERS.Headline}
                        id="headline"
                        label="Headline"
                        error={errors.headline}
                        value={values.headline}
                        touched={touched.headline}
                        onChange={handleChange("headline")}
                        onBlur={handleBlur}
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
                      <TextArea
                        id="bio"
                        label="Bio"
                        // error={errors.bio}
                        value={values.bio}
                        // touched={touched.bio}
                        onChange={handleChange("bio")}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                </div>
              </FormDiv>
            </div>
          )}

          {profileType.toLowerCase() !== "business" && (
            <div ref={onlineProfiles}>
              <FormDiv title="Online profiles">
                <div className="">
                  <div className="grid grid-col-1 gap-6">
                    <div className="w-full">
                      <Input
                        placeholder={AppConfig.PLACEHOLDERS.PersomalWebsite}
                        id="website"
                        label="Personal Website"
                        error={errors.website}
                        value={values.website}
                        touched={touched.website}
                        onChange={handleChange("website")}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="w-full">
                      <Input
                        placeholder={AppConfig.PLACEHOLDERS.LinkedIn}
                        id="linkedIn"
                        label="LinkedIn"
                        error={errors.linkedIn}
                        value={values.linkedIn}
                        touched={touched.linkedIn}
                        onChange={handleChange("linkedIn")}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="w-full">
                      <Input
                        placeholder={AppConfig.PLACEHOLDERS.Instagram}
                        id="instagram"
                        label="Instagram"
                        error={errors.instagram}
                        value={values.instagram}
                        touched={touched.instagram}
                        onChange={handleChange("instagram")}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="w-full">
                      <Input
                        placeholder={AppConfig.PLACEHOLDERS.X}
                        id="twitter"
                        label="x"
                        error={errors.twitter}
                        value={values.twitter}
                        touched={touched.twitter}
                        onChange={handleChange("twitter")}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                </div>
              </FormDiv>
            </div>
          )}
          {hasProject && (
            <div className="bg-" ref={addAProject}>
              <FormDiv title="Create a project ">
                <ProfileProjectForm />
              </FormDiv>
            </div>
          )}

          {profileType.toLowerCase() == "business" ? (
            <div ref={createEvent} className="">
              <FormDiv title="Create an event ">
                <ProfileEventPostForm
                  isProfilePage
                  refetchEvents={() => {}}
                  closeModal={() => {}}
                />
              </FormDiv>
            </div>
          ) : null}

          <div ref={interactions}>
            <FormDiv title="Interactions">
              <div className="">
                <div className="grid grid-col-1 gap-6">
                  <InteractionsSwitch
                    value={values.spaces}
                    setValue={(value) => handleSetSwitch("spaces", value)}
                    label="Spaces"
                    description="Enabling this will allow all your acitivity in spaces show up on your profile"
                  />
                  <InteractionsSwitch
                    value={values.comments}
                    setValue={(value) => {
                      setFieldValue("comments", value);
                    }}
                    label="Comments"
                    description="Enabling this will allow all your acitivity in spaces show up on your profile"
                  />
                </div>
              </div>
            </FormDiv>
          </div>
        </div>
      </form>
    </FormikProvider>
  );
}
