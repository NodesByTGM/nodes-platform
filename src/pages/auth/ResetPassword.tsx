import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BackIcon } from "../../assets/svg";
import { Button, PasswordInput } from "../../components";
import { Title } from "../../components/Typography";
import { mainClient } from "../../utilities/client";
import { handleAxiosError } from "../../utilities/common";
import AppConfig from "../../utilities/config";

function Register() {
    const navigate = useNavigate();
    const params = useParams();
    const { accountId, token } = params;
    const [valid, setValid] = useState(false)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e: any) => {
        const { id, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = (e: any) => {
        e?.preventDefault();
        const { confirmPassword, ...data } = formData
        mainClient.post(`${AppConfig.API_ENDPOINTS.Auth.ResetPasswordURL}/${accountId}/${token}`, data)
            .then((r => {
                if (r.status === 200) {
                    toast.success(r.data.message)
                    navigate(AppConfig.PATHS.Auth.Login)
                } else
                    toast.error(r.data.message)
            }))
            .catch(e => {
                handleAxiosError(e)
            })
    };


    const checkResetLink = () => {
        mainClient.get(`${AppConfig.API_ENDPOINTS.Auth.CheckResetLinkURL}/${accountId}/${token}`)
            .then((r => {
                if (r.status === 200) {
                    setValid(true)
                    setLoading(false)
                } else
                    setValid(false)
            }))
            .catch(_ => {
                setValid(false)
            })
    };

    useEffect(() => {
        checkResetLink()
    }, [])

    return (
        <div className="px-5">
            <div onClick={() => navigate(-1)} className="flex items-center mb-10 gap-2 cursor-pointer"><BackIcon /> Go back</div>
            {valid && !loading ? (
                <div className="flex flex-col gap-4 justify-center w-full">
                    <Title>Reset your password</Title>
                    <p>Choose a new password.</p>

                    <div className="w-full">
                        <PasswordInput
                            check required
                            type="password"
                            placeholder={"+8 characters"}
                            id="password"
                            value={formData.password}
                            onChange={handleChange} />
                        <PasswordInput
                            required
                            label="Confirm password"
                            type="password"
                            placeholder={AppConfig.PLACEHOLDERS.ConfirmPassword}
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange} />
                    </div>

                    <Button
                        className="mt-8"
                        disabled={formData.password !== formData.confirmPassword}
                        onClick={handleSubmit}>
                        Reset password
                    </Button>

                </div>
            ) : (
                <div>
                    {loading ? 'Please wait while we verify your token' : 'Invalid link '}
                </div>
            )}
        </div>
    )
}

export default Register