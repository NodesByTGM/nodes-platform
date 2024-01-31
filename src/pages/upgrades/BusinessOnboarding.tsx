import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
    AccountReviewCard,
    BusinessReviewCard,
    ButtonWithBack,
    Input,
    TagInput,
    TextArea,
    UploadInput,
    WrappedInput,
    WrappedTextArea
} from "../../components";
import { Title } from "../../components/Typography";
import { useAuth } from "../../context/hooks";
import { mainClient } from "../../utilities/client";
import { convertToBase64, handleAxiosError } from "../../utilities/common";
import AppConfig from "../../utilities/config";

function BusinessOnboarding() {
    const { user } = useAuth()
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0)
    const [preview, setPreview] = useState("");
    const [previewA, setPreviewA] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFileA, setSelectedFileA] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        avatar: '',
        logo: '',
        website: '',
        location: '',
        industry: '',
        tagline: '',
        size: '',
        type: '',
        linkedIn: '',
        instagram: '',
        twitter: '',
        profession: ''
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
            console.log(formData, selectedFile, selectedFileA, preview, previewA)
            handleSubmit(e)
        }
    };

    const handleSubmit = (e: any) => {
        e?.preventDefault();
        const { linkedIn, instagram, twitter } = formData
        const oneSocial = linkedIn || twitter || instagram
        if (!(
            formData.tagline &&
            formData.industry &&
            formData.size &&
            formData.type &&
            oneSocial
            // && selectedFile
        )) {
            toast.error("Your Company logo, tagline, industry, company size and company type are compulsory to fill");
        } else {
            const submitForm = async () => {
                // const binaryLogo = await convertToBase64(selectedFile)
                // const data = { ...formData, logo: `data:image/jpeg;base64,${binaryLogo}` }
                const data = formData
                if (selectedFileA) {
                    const binaryAvatar: any = await convertToBase64(selectedFileA)
                    data.avatar = `data:image/jpeg;base64,${binaryAvatar}`
                }
                mainClient.post(AppConfig.API_ENDPOINTS.Upgrades.BusinessURL, data)
                    .then((r => {
                        if (r.status === 200) {
                            toast.success(r.data.message)
                            navigate('/')
                        } else
                            toast.error(r.data.message)
                    }))
                    .catch(e => {
                        handleAxiosError(e)
                    })
            }
            submitForm()
        }
    };

    const handleSelectedFile = (e: any) => {
        // handle logo image
        setSelectedFile(e)
    }

    const handleSelectedFileA = (e: any) => {
        // handle avatar image
        setSelectedFileA(e)
    }

    const previousStep = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    useEffect(() => {
        if (user) {
            if (user.type === AppConfig.ACCOUNT_TYPES.BUSINESS) {
                toast.success("Your account is already upgraded")
                navigate('/')
            } else {
                setFormData((prev) => ({
                    ...prev,
                    name: user.name
                }));
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
                            <Title className="!text-2xl">Company details</Title>
                        </div>
                        <div className="flex flex-col gap-4 justify-center w-full">
                            <Input
                                required
                                placeholder={'Enter the name of your company'}
                                id="companyName" label="Name of company"
                                value={formData.companyName}
                                onChange={handleChange} />
                            <UploadInput
                                revokeAfterUpload={false}
                                preview={preview}
                                centered={false}
                                uploadText={'Upload a company logo'}
                                setPreview={setPreview}
                                selectedFile={selectedFile}
                                setSelectedFile={handleSelectedFile} />
                            <WrappedInput
                                label="Company website"
                                type="url"
                                placeholder={"Enter the company website"}
                                id="website"
                                value={formData.website}
                                onChange={handleChange} />
                            <WrappedTextArea
                                label="Company tagline"
                                placeholder={"Tell us what a little about the company."}
                                rows={2}
                                id="tagline"
                                value={formData.tagline}
                                onChange={handleChange} />
                            <ButtonWithBack backAction={previousStep} btnAction={handleClickForm} />

                        </div>
                    </div>
                ) : null}

                {currentIndex === 1 ? (
                    <div className="">
                        <div className="mb-10">
                            <p className="mb-4">Step 2/4</p>
                            <Title className="!text-2xl">Company details</Title>
                        </div>
                        <div className="flex flex-col gap-4 justify-center w-full">
                            <WrappedInput
                                label="Company industry"
                                placeholder={"Example: Health"}
                                id="industry"
                                value={formData.industry}
                                onChange={handleChange} />
                            <WrappedInput
                                label="Company size"
                                placeholder={"Example: 0-1 employees, 2-10 employees etc"}
                                id="size"
                                value={formData.size}
                                onChange={handleChange} />
                            <WrappedInput
                                label="Company type"
                                placeholder={"Example: Public company, self employed etc"}
                                id="type"
                                value={formData.type}
                                onChange={handleChange} />
                            <ButtonWithBack backAction={previousStep} btnAction={handleClickForm} />

                        </div>
                    </div>
                ) : null}

                {currentIndex === 2 ? (
                    <div className="">
                        <div className="mb-10">
                            <p className="mb-4">Step 3/4</p>
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

                            <ButtonWithBack
                                backAction={previousStep}
                                btnAction={handleClickForm}
                                disabled={!(formData.linkedIn || formData.instagram || formData.twitter)} />

                        </div>
                    </div>
                ) : null}

                {currentIndex === 3 ? (
                    <div className="">
                        <div className="mb-10">
                            <p className="mb-4">Step 4/4</p>
                            <Title className="!text-2xl">What do you do at {formData.companyName}</Title>
                        </div>
                        <div className="flex flex-col gap-4 justify-center w-full">

                            {/* <Input
                                placeholder={"Professional title"}
                                id="profession"
                                value={formData.profession}
                                description="Example: Hiring manager, Producer, Director"
                                onChange={handleChange} /> */}
                            <TagInput
                                placeholder={"Professional title"}
                                id="profession"
                                options={AppConfig.PROFESSION_OPTIONS}
                                max={1}
                                description="Example: Hiring manager, Producer, Director"
                                onSelect={handleSelect}
                            />
                            <TextArea
                                placeholder={"Location"}
                                rows={2}
                                id="location"
                                value={formData.location}
                                onChange={handleChange} />
                            {/* <Select
                                id="location"
                                searchable
                                placeholder={'Select Location'}
                                onSelect={handleSelect}
                                optionType={"objects"}
                                options={countries} /> */}
                            <UploadInput
                                preview={previewA}
                                setPreview={setPreviewA}
                                selectedFile={selectedFileA}
                                setSelectedFile={handleSelectedFileA}
                                revokeAfterUpload={false} />

                            <ButtonWithBack backAction={previousStep} btnAction={handleClickForm} />

                        </div>
                    </div>
                ) : null}
            </div>
            <div className="bg-light p-5 w-1/2 lg:block hidden">
                {currentIndex < 3 ? (
                    <BusinessReviewCard {...formData} logo={preview} />
                ) : <AccountReviewCard {...formData} logo={preview} avatar={previewA} />}
            </div>
        </div>
    )
}

export default BusinessOnboarding