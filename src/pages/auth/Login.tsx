import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Input, PasswordInput } from "../../components";
import { useAuth } from "../../context/hooks";
import { mainClient } from "../../utilities/client";
import { handleAxiosError, validateObjectValues } from "../../utilities/common";
import AppConfig from "../../utilities/config";
import { GoogleIcon } from "../../assets/svg";
import { Title } from "../../components/Typography";

function Login() {
    const navigate = useNavigate();
    const { setUser } = useAuth()
    const [socialLogin, setSocialLogin] = useState(true)

    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
        if (!validateObjectValues(formData)) {
            toast.error(AppConfig.ERROR_MESSAGES.ValidationError);
        } else {
            mainClient.post(AppConfig.API_ENDPOINTS.Auth.LoginURL, formData)
                .then((r => {
                    if (r.status === 200) {
                        toast.success("Login successful!")
                        setUser(r.data.data.user)
                        navigate("/")
                        setFormData({
                            email: '',
                            password: '',
                        })
                    } else
                        toast.error(r.data.data.message)
                }))
                .catch(e => {
                    console.log(e)
                    handleAxiosError(e)
                })
            return;
        }
    };

    return (
        <div className="">
            <div className="flex justify-between items-center mb-10">
                <Link to="/"><div><img src="/logo.svg" alt="" className="w-8" /></div></Link>
                <div className="text-sm"><span>New to Nodes?{" "}</span>
                    <Link to={AppConfig.PATHS.Auth.Register} className="text-primary cursor-pointer">Sign Up</Link>
                </div>
            </div>
            <div className="mb-10">
                <Title>Your creative evolution starts here!</Title>
                <p>Sign up now and become part of the Nodes community.</p>
            </div>
            <div className="flex flex-col items-center gap-5">
                <Button theme="dark">
                    <span><GoogleIcon /></span>
                    <span>Sign up with Google</span>
                </Button>
                <div className="w-full mt-5">
                    <hr className="border-gray-200" />
                </div>
                <span className="bg-light -mt-8 px-3 bg-gry text-center">or</span>
                {socialLogin ? (
                    <Button theme="secondary" onClick={() => setSocialLogin(false)}>Continue with email</Button>
                ) : null}
                {socialLogin ? (
                    <p className="text-center text-xs">
                        By creating an account you agree with our {" "}
                        <span className="underline">Terms of Service</span> and {" "}
                        <span className="underline">Privacy Policy</span>
                    </p>
                ) : null}


            </div>
            {!socialLogin ? (
                <div className="flex flex-col gap-2 justify-center w-full mt-2">
                    <Input
                        placeholder={AppConfig.PLACEHOLDERS.Email}
                        id="email"
                        type="email"
                        label="Email address"
                        value={formData.email}
                        onChange={handleChange} />
                    <PasswordInput
                        placeholder={AppConfig.PLACEHOLDERS.Password}
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange} />

                    <Button
                        className="my-4"
                        disabled={!validateObjectValues(formData)}
                        onClick={handleSubmit}>Sign In</Button>
                    <div className="text-center">New to Nodes? <Link to={AppConfig.PATHS.Auth.Register} className="text-primary">Sign Up</Link></div>

                </div>
            ) : null}
        </div>
    )
}

export default Login
