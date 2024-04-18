import React, {
  useState,
  useRef,
  // useEffect,
  useMemo,
  // useCallback,
} from "react";
import { FormDiv, Button, Back, Input, TextArea, ProfileImgUploader, LocationSelect } from "../../../../components";
import BusinessProfileProjectForm from "./BusinessProfileProjectForm";
import BusinessProfileJobForm from './BusinessProfileJobForm'
import AppConfig from "../../../../utilities/config";
import BusinessProfileEventPostForm from './BusinessProfileEventPostForm'
import { useDashboardContext } from "../../../../context/hooks";
import Countries from "../../../../utilities/countries.json";


export default function EditBusinessProfile() {
    const {profileData} = useDashboardContext()
  const businessInfo = useRef<HTMLDivElement>(null);

  const introduceBusiness = useRef<HTMLDivElement>(null);
  const addJob = useRef<HTMLDivElement>(null);
  const createEvent = useRef<HTMLDivElement>(null);
  const addProject = useRef<HTMLDivElement>(null);

  const onlineProfiles = useRef<HTMLDivElement>(null);

  const navOptions = useMemo(
    () => [
      {
        id: "0",
        title: "Business Information",
        link: "businessInfo",
        ref: businessInfo,
      },
      {
        id: "1",
        title: "Introduction",
        link: "introduceBusiness",
        ref: introduceBusiness,
      },
      {
        id: "2",
        title: "Jobs",
        link: "addJob",
        ref: addJob,
      },
      {
        id: "3",
        title: "Events",
        link: "createEvent",
        ref: createEvent,
      },

      {
        id: "4",
        title: "Projects",
        link: "addProject",
        ref: addProject,
      },
      {
        id: "5",
        title: "Online profiles",
        link: "onlineProfiles",
        ref: onlineProfiles,
      },
    ],
    [
      businessInfo,
      introduceBusiness,
      addJob,
      createEvent,
      addProject,
      onlineProfiles,
    ]
  );

  const [selected, setSelected] = useState(navOptions[0]);
  const scrollToDiv = (navRef) => {
    navRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" px-10">
      <div className="flex flex-col gap-10 pt-6">

        <pre className="hidden
        ">{JSON.stringify(profileData, null, 2)}</pre>
        <Back link="/business/profile" />

        <span className="font-medium text-[20px] text-primary mb-10">
          Edit profile
        </span>
      </div>
      <div className="flex gap-x-8">
        <div className="max-h-max w-[240px]">
          <div className="flex flex-col">
            <div className="rounded-lg border border-[#EFEFEF] p-6 bg-white flex flex-col gap-4">
              <div className="flex items-start flex-col  gap-[16px] ">
                {navOptions.map((nav) => (
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

          <div className="w-full mt-8">
            <Button
            //   isLoading={updateProfileLoading}
            //   disabled={!isValid}
            //   className={`${!isValid ? "opacity-50" : ""} `}
            >
              Save and Continue
            </Button>
          </div>

          {/* <FormDebug
            form={{
              values,
              touched,
              errors,
              // userData: profileData?.result
            }}
            className="mt-4 hidden"
          /> */}
        </div>

        <div className="flex-1 flex flex-col gap-8 ">
          <div ref={businessInfo} className="">
            <FormDiv title="Business Information">
            <div className="">
                  <div className="grid grid-col-1 gap-6">
                    <ProfileImgUploader
                      value={{
                        id: '',
                        url: ''
                      }}
                      onChange={(value) => {
                        console.log(value)
                        // setFieldValue("avatar", value);
                      }}
                    />
                    <div className="w-full">
                      <Input
                        placeholder={'Enter business name'}
                        id="name"
                        label="Name of business"
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
                        defaultValue={"values.location"}
                        options={Countries}
                        onChange={(value) =>
                          // setFieldValue("location", value)
                          console.log(value)
                        }
                      />
                    </div>

                    <div className="w-full">
                      <Input
                        placeholder={'Enter year of establishment'}
                        id="yoe"
                        label="Year of Establishment"
                        // error={errors.location}
                        // value={values.location}
                        // touched={touched.location}
                        // onChange={handleChange("location")}
                        // onBlur={handleBlur}
                      />
                    </div>

                   
                  </div>
                </div>
            </FormDiv>
          </div>
          <div ref={introduceBusiness} className="">
            <FormDiv title="Introduce Business">
            <div className="">
                  <div className="grid grid-col-1 gap-6">
                    <div className="w-full">
                      <Input
                        placeholder={AppConfig.PLACEHOLDERS.Headline}
                        id="headline"
                        label="Headline"
                        // error={errors.headline}
                        // value={values.headline}
                        // touched={touched.headline}
                        // onChange={handleChange("headline")}
                        // onBlur={handleBlur}
                      />
                    </div>
                    <div className="w-full">
                  
                      <TextArea
                        id="bio"
                        label="Bio"
                        // error={errors.bio}
                        // value={values.bio}
                        // touched={touched.bio}
                        // onChange={handleChange("bio")}
                        // onBlur={handleBlur}
                      />
                    </div>
                  </div>
                </div>
            </FormDiv>
          </div>
          <div ref={addJob} className="">
            <FormDiv title="Create a Job Post">
                <BusinessProfileJobForm />
            </FormDiv>
          </div>
          <div ref={createEvent} className="">
            <FormDiv title="Create an event">
                <BusinessProfileEventPostForm />
            </FormDiv>
          </div>
          <div ref={addProject} className="">
            <FormDiv title="Add a project">
                <BusinessProfileProjectForm />
            </FormDiv>
          </div>
          <div ref={onlineProfiles} className="">
            <FormDiv title="Online profiles">
            <div className="">
                  <div className="grid grid-col-1 gap-6">
                    <div className="w-full">
                      <Input
                        placeholder={AppConfig.PLACEHOLDERS.PersomalWebsite}
                        id="website"
                        label="Personal Website"
                        // error={errors.website}
                        // value={values.website}
                        // touched={touched.website}
                        // onChange={handleChange("website")}
                        // onBlur={handleBlur}
                      />
                    </div>
                    <div className="w-full">
                      <Input
                        placeholder={AppConfig.PLACEHOLDERS.LinkedIn}
                        id="linkedIn"
                        label="LinkedIn"
                        // error={errors.linkedIn}
                        // value={values.linkedIn}
                        // touched={touched.linkedIn}
                        // onChange={handleChange("linkedIn")}
                        // onBlur={handleBlur}
                      />
                    </div>
                    <div className="w-full">
                      <Input
                        placeholder={AppConfig.PLACEHOLDERS.Instagram}
                        id="instagram"
                        label="Instagram"
                        // error={errors.instagram}
                        // value={values.instagram}
                        // touched={touched.instagram}
                        // onChange={handleChange("instagram")}
                        // onBlur={handleBlur}
                      />
                    </div>
                    <div className="w-full">
                      <Input
                        placeholder={AppConfig.PLACEHOLDERS.X}
                        id="twitter"
                        label="x"
                        // error={errors.twitter}
                        // value={values.twitter}
                        // touched={touched.twitter}
                        // onChange={handleChange("twitter")}
                        // onBlur={handleBlur}
                      />
                    </div>
                  </div>
                </div>
            </FormDiv>
          </div>
        </div>
      </div>
    </div>
  );
}
