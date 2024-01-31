import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BackIcon } from "../../assets/svg";
import { Button, Input } from "../../components";
import { Title } from "../../components/Typography";
import { mainClient } from "../../utilities/client";
import { handleAxiosError } from "../../utilities/common";
import AppConfig from "../../utilities/config";

function Register() {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0)
    // const [sent, setSent] = useState(0)
    const [formData, setFormData] = useState({
        email: ''
    });

    const handleChange = (e: any) => {
        const { id, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleClickForm = (e: any) => {
        handleSubmit(e)
        // if (currentIndex !== 0) {
        //     handleSubmit(e)
        // } else {
        //     setCurrentIndex(1)
        // }
    };

    const handleSubmit = (e: any) => {
        e?.preventDefault();
        mainClient.post(AppConfig.API_ENDPOINTS.Auth.ForgotPasswordURL, formData)
            .then((r => {
                if (r.status === 200) {
                    toast.success(r.data.message)
                } else
                    toast.error(r.data.message)
            }))
            .catch(e => {
                handleAxiosError(e)
            })
    };

    return (
        <div className="px-5">
            <div onClick={() => navigate(-1)} className="flex items-center mb-10 gap-2 cursor-pointer"><BackIcon /> Go back</div>
            {currentIndex === 0 ? (
                <div className="flex flex-col gap-4 justify-center w-full">
                    <Title>Reset your password</Title>
                    <p>Forgot your password? Enter the email address you usually use to sign in to Nodes.</p>

                    <div className="w-full">
                        <Input
                            label="Email address"
                            type="email"
                            placeholder={AppConfig.PLACEHOLDERS.Email}
                            id="email"
                            value={formData.email}
                            onChange={handleChange} />
                    </div>

                    <Button
                        className="mt-8"
                        disabled={!formData.email}
                        onClick={handleClickForm}>
                        Send email
                    </Button>

                </div>
            ) : null}
        </div>
    )
}

export default Register