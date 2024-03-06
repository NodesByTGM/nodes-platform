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
} from "../../components";
import { Title } from "../../components/Typography";
import { useAuth } from "../../context/hooks";
import { IUser } from "../../interfaces/auth";
import { mainClient } from "../../utilities/client";
import { handleAxiosError } from "../../utilities/common";
import AppConfig from "../../utilities/config";
// import FormDebug from "../../components/FormDebug";

function TalentOnboarding() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [checked, setChecked] = useState<any>({
    connect: false,
    job: false,
    showcase: false,
    projects: false,
    other: false,
  });
  const [tags, setTags] = useState<any>([]);
  const [preview, setPreview] = useState("");
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [formData, setFormData] = useState({
    skills: [],
    location: "",
    avatar: "",
    linkedIn: "",
    instagram: "",
    twitter: "",
    somethingElse: "",
  });

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
      setCurrentIndex(currentIndex + 1);
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
      // const binaryAvatar: any = await convertToBase64(selectedFile)
      mainClient
        .post(AppConfig.API_ENDPOINTS.Upgrades.TalentURL, {
          ...formData,
          skills: formData.skills.join(", "),
        //   avatar: `data:image/jpeg;base64,${binaryAvatar}`
          avatar: preview
        })
        .then((r) => {
          if (r.status === 200) {
            toast.success(r.data.message);
            const newUser = {
              ...user,
              type: AppConfig.ACCOUNT_TYPES.TALENT,
            } as IUser;
            setUser(newUser);
            navigate("/");
          } else toast.error(r.data.message);
        })
        .catch((e) => {
          handleAxiosError(e);
        });
    };
    submitForm();
  };

  const handleSelectedFile = (e: any) => {
    // handle avatar image
    setSelectedFile(e);
  };

  const previousStep = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    if (user) {
      if (user.type === AppConfig.ACCOUNT_TYPES.TALENT) {
        toast.success("Your account is already upgraded");
        navigate("/");
      }
    }
  }, [user]);

//   useEffect(() => {
//     formData.avatar = preview;
//   }, [preview]);

  const handleChecked = (id: string) => {
    const value = checked[id];
    setChecked({
      ...checked,
      [id]: !value,
    });
  };

  const indexQuestion = {
    1: "What do you want to do on Nodes?",
    2: "What do you do?",
    3: "Where are you located?",
    4: "Let’s see what you look like",
    5: "Social media",
  };

  return (
    <div className="flex min-h-[100vh] justify-center">
      <div className="p-20 px-24 pt-10 lg:w-1/2">
        <div className="flex justify-between items-center mb-10">
          <Link to="/">
            <div>
              <img src="/logo.svg" alt="" className="w-8" />
            </div>
          </Link>
        </div>

        <div className="mb-10">
          <p className="mb-4">Step {currentIndex + 1}/5</p>
          <Title className="!text-2xl">{indexQuestion[currentIndex + 1]}</Title>
        </div>

        {currentIndex === 0 ? (
          <div className="">
            {/* <div className="mb-10">
              <p className="mb-4">Step 1/4</p>
              <Title className="!text-2xl">What do you do?</Title>
            </div> */}
            <div className="flex flex-col gap-4 justify-center w-full">
              <WrappedCheckboxInput
                label="Connect with fellow creatives"
                checked={checked.connect}
                setChecked={() => handleChecked("connect")}
              />
              <WrappedCheckboxInput
                label="Find exciting job opportunities and gigs."
                checked={checked.job}
                setChecked={() => handleChecked("job")}
              />
              <WrappedCheckboxInput
                label="Increase visibility and showcase my work."
                checked={checked.showcase}
                setChecked={() => handleChecked("showcase")}
              />
              <WrappedCheckboxInput
                label=" Explore and discover inspiring projects."
                checked={checked.projects}
                setChecked={() => handleChecked("projects")}
              />
              <WrappedCheckboxInput
                label="Something else"
                checked={checked.other}
                setChecked={() => handleChecked("other")}
              />

              {checked.other && (
                <div className="">
                  <TextArea
                    required
                    placeholder={"Tell us more..."}
                    id="somethingElse"
                    value={formData.somethingElse}
                    onChange={handleChange}
                  />
                </div>
              )}

              <ButtonWithBack
                backAction={previousStep}
                btnAction={handleClickForm}
                disabled={
                  (!checked.connect &&
                    !checked.job &&
                    !checked.showcase &&
                    !checked.projects &&
                    !checked.other) ||
                  (checked.other && !formData.somethingElse)
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
              <TextArea
                required
                placeholder={"Location"}
                id="location"
                value={formData.location}
                onChange={handleChange}
              />

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
                backAction={previousStep}
                btnAction={handleClickForm}
              />
            </div>
          </div>
        ) : null}
      </div>
      <div className="bg-primary p-5 w-1/2 lg:block hidden">
        {/* <FormDebug form={{ formData, preview }} /> */}
        <TalentReviewCard
          name={user?.name}
          email={user?.email}
          preview={preview}
          showDetails={currentIndex !== 0}
          {...formData}
        />
      </div>
    </div>
  );
}

export default TalentOnboarding;
