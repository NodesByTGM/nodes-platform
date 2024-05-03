/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  ButtonWithBack,
  TagInput,
  TalentReviewCard,
  TextArea,
  UploadInput,
  WrappedCheckboxInput,
  WrappedInput,
  LocationSelect,
} from "../../components";
import { Title } from "../../components/Typography";
// import { useAuth } from "../../context/hooks";
// import { IUser } from "../../interfaces/auth";
import { mainClient } from "../../utilities/client";
import { convertToBase64 } from "../../utilities/common";

import { handleAxiosError } from "../../utilities/common";
import AppConfig from "../../utilities/config";
import { loginUser } from "../../api/reducers/userSlice";
import { useUploadFileMutation } from "../../api";
import Countries from "../../utilities/countries.json";

import { useDispatch } from "react-redux";
import FormDebug from "../../components/FormDebug";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

function TalentOnboarding() {
  const user = useSelector((state: RootState) => state?.user?.user);
  const dispatch = useDispatch();
  // const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [tags, setTags] = useState<any>([]);
  const [preview, setPreview] = useState("");
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [formData, setFormData] = useState<any>({
    skills: [],
    location: "",
    avatar: "",
    linkedIn: "",
    instagram: "",
    twitter: "",
    otherPurpose: "",
    onboardingPurpose: 0,
    onboardingPurposes: [],
    step: currentIndex + 1,
  });

  const [
    upload,
    {
      data: uploadResponse,
      // isLoading: uploadFileLoading,
      isSuccess: uploadFileSuccess,
      error: uploadFileError,
      isError: isUploadError,
    },
  ] = useUploadFileMutation();

  const nextStep = () => {
    if (currentIndex + 1 < 5) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  //   {
  //     skills
  // location
  // avatar
  // linkedIn
  // instagram
  // twitter
  // otherPurpose:string
  // onboardingPurpose:0
  // step:1
  //   }

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSelect = ({ id, value }: { id: string; value: string }) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleClickForm = (e?: any) => {
    if (currentIndex < 4) {
      nextStep();
    } else {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e: any) => {
    e?.preventDefault();
    // if(!selectedFile){
    //     toast.error('Please upload an image')
    //     return
    // }
    const submitForm = async () => {
      setSubmitLoading(true);
      // const binaryAvatar: any = await convertToBase64(selectedFile)
      mainClient
        .post(AppConfig.API_ENDPOINTS.Upgrades.TalentURL, {
          ...formData,
          skills: formData.skills.join(", "),
          //   avatar: `data:image/jpeg;base64,${binaryAvatar}`
          // avatar: preview,
        })
        .then((r) => {
          setSubmitLoading(false);
          if (r.status === 200) {
            toast.success(r.data.message);
            // const newUser = {
            //   ...user,
            //   type: AppConfig.ACCOUNT_TYPES.TALENT,
            // } as IUser;
            // setUser(newUser);
            if (r?.data?.user) {
              dispatch(loginUser(r?.data?.user));
            }

            // localStorage.setItem('bearerToken', r.data?.user?.accessToken)
            navigate("/upgrade/pricing");
          } else toast.error(r.data.message);
        })
        .catch((e) => {
          setSubmitLoading(false);
          handleAxiosError(e);
        });
    };
    submitForm();
  };

  const handleSelectedFile = (e: any) => {
    // handle avatar image
    setSelectedFile(e);
  };
  const handleFileConversion = async () => {
    if (selectedFile) {
      const res = await convertToBase64(selectedFile);
      let binary = "";
      if (res) {
        binary = String(res);
        upload({ file: binary });
      }
    }
  };

  useEffect(() => {
    handleFileConversion();
  }, [selectedFile]);

  useEffect(() => {
    if (uploadFileSuccess) {
      // console.log('FileUrl:' + JSON.stringify(uploadResponse?.result.url, null, 2));
      setFormData({ ...formData, avatar: uploadResponse?.result.url });
    }
  }, [uploadFileSuccess, uploadResponse?.result?.url]);

  useEffect(() => {
    if (isUploadError) {
      toast.error(uploadFileError);
    }
  }, [uploadFileError, isUploadError]);

  const previousStep = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    if (user) {
      if (user?.type === AppConfig.ACCOUNT_TYPES.TALENT) {
        toast.success("Your account is already upgraded");
        navigate("/");
      }
    }
  }, [user]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      step: currentIndex + 1,
    }));
  }, [currentIndex]);

  //   useEffect(() => {
  //     formData.avatar = preview;
  //   }, [preview]);

  const handleChecked = (id: number) => {
    console.log(id);
    // const value = checked[id];
    let value = id;
    if (formData.onboardingPurpose == value) {
      value = 0;
    }
    setFormData((prev) => ({
      ...prev,
      onboardingPurpose: value,
    }));
  };

  const handleMultipleCheck = (id: number) => {
    // const value: number = id;
    let newPurposes: any = [];
    if (formData.onboardingPurposes.includes(id)) {
      newPurposes = formData.onboardingPurposes.filter((item) => item !== id);

      setFormData((prev) => ({
        ...prev,
        onboardingPurposes: newPurposes,
      }));

      return;
    }
    newPurposes = [...formData.onboardingPurposes, id];
    setFormData((prev) => ({
      ...prev,
      onboardingPurposes: newPurposes,
    }));
  };

  const indexQuestion = {
    1: "What do you want to do on Nodes?",
    2: "What’s your creative superpower?",
    3: "Tell us where you are",
    4: "Don’t be shy, show the community what you look like.",
    5: "Social media",
  };

  return (
    <div className="flex min-h-[100vh] justify-center">
      <div className="pb-20 authFormDiv pt-10 w-full max-w-[500px] lg:max-w-full lg:w-1/2">
        <div className="flex justify-between items-center mb-10">
          <Link to="/">
            <div>
              <img src="/nodes-logo-black.svg" alt="" className="w-8" />
            </div>
          </Link>

          {currentIndex + 1 > 1 && currentIndex + 1 < 5 ? (
            <span
              onClick={() => nextStep()}
              className="text-primary font-normal text-sm md:text-base cursor-pointer"
            >
              Skip
            </span>
          ) : null}
        </div>

        <div className="mb-10">
          <p className="mb-4">Step {currentIndex + 1}/5</p>
          <Title className="text-[18px] md:!text-2xl !font-medium">
            {indexQuestion[currentIndex + 1]}
          </Title>
        </div>

        {currentIndex === 0 ? (
          <div className="">
            <div className="flex flex-col gap-4 justify-center w-full">
              <WrappedCheckboxInput
                label="Flaunt my cool projects"
                checked={formData.onboardingPurposes.includes(1)}
                setChecked={() => handleMultipleCheck(1)}
              />
              <WrappedCheckboxInput
                label="FExpand my network"
                checked={formData.onboardingPurposes.includes(2)}
                setChecked={() => handleMultipleCheck(2)}
              />
              <WrappedCheckboxInput
                label="Collaborate with diverse creatives"
                checked={formData.onboardingPurposes.includes(3)}
                setChecked={() => handleMultipleCheck(3)}
              />
              <WrappedCheckboxInput
                label="Find local and international gigs"
                checked={formData.onboardingPurposes.includes(4)}
                setChecked={() => handleMultipleCheck(4)}
              />
              <WrappedCheckboxInput
                label="Make money with my talent"
                checked={formData.onboardingPurposes.includes(5)}
                setChecked={() => handleMultipleCheck(5)}
              />
              <WrappedCheckboxInput
                label="Be part of a bustling creative community"
                checked={formData.onboardingPurposes.includes(6)}
                setChecked={() => handleMultipleCheck(6)}
              />

              <WrappedCheckboxInput
                label="Something else"
                checked={formData.onboardingPurpose == 7}
                setChecked={() => handleChecked(7)}
              />

              {formData.onboardingPurpose == 7 && (
                <div className="">
                  <TextArea
                    required
                    placeholder={"Tell us more..."}
                    id="otherPurpose"
                    value={formData.otherPurpose}
                    onChange={handleChange}
                  />
                </div>
              )}

              <ButtonWithBack
                className={`${
                  (formData.otherPurpose.length === 0 &&
                    formData.onboardingPurpose == 7) ||
                  (formData.onboardingPurpose !== 7 &&
                    formData.onboardingPurposes.length == 0)
                    ? "opacity-50"
                    : ""
                } mt-2`}
                backAction={previousStep}
                btnAction={handleClickForm}
                disabled={
                  (formData.otherPurpose.length === 0 &&
                    formData.onboardingPurpose == 7) ||
                  (formData.onboardingPurpose !== 7 &&
                    formData.onboardingPurposes.length == 0)
                }
              />
            </div>
          </div>
        ) : null}

        {currentIndex === 1 ? (
          <div className="">
            <div className="flex flex-col gap-4 justify-center w-full">
              <TagInput
                id="skills"
                onSelect={handleSelect}
                options={AppConfig.SKILL_OPTIONS}
                description="Example: Modelling, Video editing"
                tags={tags}
                setTags={setTags}
              />
              <ButtonWithBack
                backAction={previousStep}
                btnAction={handleClickForm}
                disabled={formData.skills.length == 0}
              />
            </div>
          </div>
        ) : null}

        {currentIndex === 2 ? (
          <div className="">
            <div className="flex flex-col gap-4 justify-center w-full">
              {/* <TextArea
                required
                placeholder={"Location"}
                id="location"
                value={formData.location}
                onChange={handleChange}
              /> */}
              <div className="flex flex-col gap-1">
                <span className="font-medium text-sm md:text-base ">
                  Location
                </span>
                <LocationSelect
                  paddingy="py-[16px]"
                  defaultValue={formData.location}
                  options={Countries}
                  onChange={(value) =>
                    // setFieldValue("location", value.value)
                    setFormData((prev) => ({
                      ...prev,
                      location: value,
                    }))
                  }
                />
              </div>

              <ButtonWithBack
                backAction={previousStep}
                btnAction={handleClickForm}
                disabled={!formData.location}
              />
            </div>
          </div>
        ) : null}

        {currentIndex === 3 ? (
          <div className="">
            <div className="flex flex-col gap-4 justify-center w-full">
              <UploadInput
                preview={preview}
                setPreview={setPreview}
                selectedFile={selectedFile}
                setSelectedFile={handleSelectedFile}
              />

              <ButtonWithBack
                backAction={previousStep}
                btnAction={handleClickForm}
              />
            </div>
          </div>
        ) : null}

        {currentIndex === 4 ? (
          <div className="">
            <div className="flex flex-col gap-6 justify-center w-full">
              <WrappedInput
                label="LinkedIn"
                type="url"
                placeholder={"Enter your linkedin url"}
                id="linkedIn"
                value={formData.linkedIn}
                onChange={handleChange}
              />
              <WrappedInput
                label="Instagram"
                type="url"
                placeholder={"Enter your instagram url"}
                id="instagram"
                value={formData.instagram}
                onChange={handleChange}
              />
              <WrappedInput
                label="X"
                type="url"
                placeholder={"Enter your X url"}
                id="twitter"
                value={formData.twitter}
                onChange={handleChange}
              />

              <ButtonWithBack
                submitLoading={submitLoading}
                backAction={previousStep}
                btnAction={handleClickForm}
              />
            </div>
          </div>
        ) : null}
      </div>
      <div className="auth-onboarding  p-5 w-1/2 lg:block hidden relative">
        <div className="fixed top-[-140px] right-[-140px] rotate-[320deg]">
          <img src="/bg-node-yellow.svg" alt="" className="" />
        </div>
        <FormDebug className="hidden" form={{ formData, preview }} />
        <TalentReviewCard
          name={user?.name}
          email={user?.email}
          preview={preview}
          showDetails={currentIndex !== 0}
          {...formData}
        />
        <div className="absolute bottom-[0px] left-[0px] ">
          <img src="/bg-node-yellow2.svg" alt="" className="" />
        </div>
      </div>
    </div>
  );
}

export default TalentOnboarding;
