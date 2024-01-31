import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
    ButtonWithBack,
    TagInput,
    TalentReviewCard,
    TextArea,
    UploadInput,
    WrappedInput
} from "../../components";
import { Title } from "../../components/Typography";
import { useAuth } from "../../context/hooks";
import { IUser } from "../../interfaces/auth";
import { mainClient } from "../../utilities/client";
import { handleAxiosError } from "../../utilities/common";
import AppConfig from "../../utilities/config";

function TalentOnboarding() {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0)
    const [preview, setPreview] = useState("");
    const [selectedFile, setSelectedFile] = useState<any>(null);
    const [formData, setFormData] = useState({
        skills: [],
        location: '',
        avatar: '',
        linkedIn: '',
        instagram: '',
        twitter: '',
    });

    const handleChange = (e: any) => {
        const { id, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSelect = ({ id, value }: { id: string, value: string }) => {
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    }

    const handleClickForm = (e?: any) => {
        if (currentIndex < 3) {
            setCurrentIndex(currentIndex + 1)
        } else {
            handleSubmit(e)
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
            mainClient.post(AppConfig.API_ENDPOINTS.Upgrades.TalentURL, {
                ...formData,
                skills: formData.skills.join(", "),
                // avatar: `data:image/jpeg;base64,${binaryAvatar}`
            })
                .then((r => {
                    if (r.status === 200) {
                        toast.success(r.data.message)
                        const newUser = {
                            ...user,
                            type: AppConfig.ACCOUNT_TYPES.TALENT
                        } as IUser
                        setUser(newUser)
                        navigate("/")
                    } else
                        toast.error(r.data.message)
                }))
                .catch(e => {
                    handleAxiosError(e)
                })
        }
        submitForm()
    };

    const handleSelectedFile = (e: any) => {
        // handle avatar image
        setSelectedFile(e)
    }

    const previousStep = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    useEffect(() => {
        if (user) {
            if (user.type === AppConfig.ACCOUNT_TYPES.TALENT) {
                toast.success("Your account is already upgraded")
                navigate('/')
            }
        }
    }, [user])

    return (
        <div className="flex min-h-[100vh] justify-center">
            <div className="p-20 px-24 pt-10 lg:w-1/2">
                <div className="flex justify-between items-center mb-10">
                    <Link to="/"><div><img src="/logo.svg" alt="" className="w-8" /></div></Link>
                </div>
                {currentIndex === 0 ? (
                    <div className="">
                        <div className="mb-10">
                            <p className="mb-4">Step 1/4</p>
                            <Title className="!text-2xl">What do you do?</Title>
                        </div>
                        <div className="flex flex-col gap-4 justify-center w-full">
                            <TagInput id="skills"
                                onSelect={handleSelect}
                                options={AppConfig.SKILL_OPTIONS}
                                description="Example: Modelling, Video editing" />
                            <ButtonWithBack
                                backAction={previousStep}
                                btnAction={handleClickForm}
                                disabled={formData.skills.length == 0} />
                        </div>
                    </div>
                ) : null}

                {currentIndex === 1 ? (
                    <div className="">
                        <div className="mb-10">
                            <p className="mb-4">Step 2/4</p>
                            <Title className="!text-2xl">Where are you located?</Title>
                        </div>
                        <div className="flex flex-col gap-4 justify-center w-full">
                            <TextArea
                                required
                                placeholder={"Location"}
                                id="location"
                                value={formData.location}
                                onChange={handleChange} />

                            <ButtonWithBack
                                backAction={previousStep}
                                btnAction={handleClickForm}
                                disabled={!formData.location} />

                        </div>
                    </div>
                ) : null}

                {currentIndex === 2 ? (
                    <div className="">
                        <div className="mb-10">
                            <p className="mb-4">Step 3/4</p>
                            <Title className="!text-2xl">Let’s see what you look like</Title>
                        </div>
                        <div className="flex flex-col gap-4 justify-center w-full">
                            <UploadInput
                                preview={preview}
                                setPreview={setPreview}
                                selectedFile={selectedFile}
                                setSelectedFile={handleSelectedFile} />

                            <ButtonWithBack
                                backAction={previousStep}
                                btnAction={handleClickForm} />

                        </div>
                    </div>
                ) : null}


                {currentIndex === 3 ? (
                    <div className="">
                        <div className="mb-10">
                            <p className="mb-4">Step 4/4</p>
                            <Title className="!text-2xl">Social media</Title>
                        </div>
                        <div className="flex flex-col gap-6 justify-center w-full">
                            <WrappedInput
                                label="LinkedIn"
                                type="url"
                                placeholder={"Enter your linkedin url"}
                                id="linkedIn"
                                value={formData.linkedIn}
                                onChange={handleChange} />
                            <WrappedInput
                                label="Instagram"
                                type="url"
                                placeholder={"Enter your instagram url"}
                                id="instagram"
                                value={formData.instagram}
                                onChange={handleChange} />
                            <WrappedInput
                                label="X"
                                type="url"
                                placeholder={"Enter your X url"}
                                id="twitter"
                                value={formData.twitter}
                                onChange={handleChange} />

                            <ButtonWithBack backAction={previousStep} btnAction={handleClickForm} />

                        </div>
                    </div>
                ) : null}
            </div>
            <div className="bg-primary p-5 w-1/2 lg:block hidden">
                <TalentReviewCard name={user?.name} preview={preview}{...formData} />
            </div>
        </div>
    )
}

export default TalentOnboarding