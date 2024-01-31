import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CautionCircleIcon } from "../../assets/svg";
import { Button, Checkbox, Select, Input, PasswordInput, Tooltip } from "../../components";
import { Title } from "../../components/Typography";
import { mainClient } from "../../utilities/client";
import { handleAxiosError, validateObjectValues } from "../../utilities/common";
import AppConfig from "../../utilities/config";

function Register() {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0)
    const [checked, setChecked] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        dob: Date.now(),
        password: '',
        confirmPassword: ''
    });
    const [date, setDate] = useState({
        day: '',
        month: '',
        year: '',
    });

    const handleChange = (e: any) => {
        const { id, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleClickForm = (e: any) => {
        if (currentIndex !== 0) {
            handleSubmit(e)
        } else {
            setCurrentIndex(1)
        }
    };

    const handleSubmit = (e: any) => {
        e?.preventDefault();
        let form = { ...formData, dob: new Date(`${date.day}-${date.month}-${date.year}`) }
        const { confirmPassword, ...data } = form;
        mainClient.post(AppConfig.API_ENDPOINTS.Auth.RegisterURL, data)
            .then((r => {
                if (r.status === 200) {
                    toast.success(r.data.message)
                    toast.success('Please login with your set password.')
                    navigate("/")
                } else
                    toast.error(r.data.message)
            }))
            .catch(e => {
                handleAxiosError(e)
            })
    };

    const handleSelect = ({ id, value }: any) => {
        setDate((prev) => ({
            ...prev,
            [id]: value,
        }));
    }
    return (
        <div className="">
            <div className="flex justify-between items-center mb-10">
                <Link to="/"><div><img src="/logo.svg" alt="" className="w-8" /></div></Link>
                <div className="text-sm"><span>Already using Nodes?{" "}</span>
                    <Link to={AppConfig.PATHS.Auth.Login} className="text-primary cursor-pointer">Log in</Link>
                </div>
            </div>
            <div className="mb-4">
                <Title>Welcome to Nodes!</Title>
                <p>Where creativtity knows no limits.</p>
            </div>
            <div className="flex flex-col gap-4 justify-center w-full">
                <div className="flex lg:flex-row flex-col gap-5">
                    <div className="w-full">
                        <Input
                            required
                            placeholder={AppConfig.PLACEHOLDERS.Fullname}
                            id="name" label="Full name"
                            value={formData.name}
                            onChange={handleChange} />
                    </div>
                    <div className="w-full">
                        <Input
                            required
                            placeholder={AppConfig.PLACEHOLDERS.Username}
                            id="username" label="Username"
                            value={formData.username}
                            onChange={handleChange} />
                    </div>

                </div>
                <Input
                    required
                    placeholder={AppConfig.PLACEHOLDERS.Email}
                    id="email"
                    type="email"
                    value={formData.email}
                    label="Email address"
                    onChange={handleChange} />

                {/* DOB */}
                <div>
                    <div className="flex gap-2 items-center">
                        <div className="text-sm font-medium ">Date of Birth*</div>
                        <Tooltip id="dob" text={() => (
                            <div>
                                This will not be shown publicly, unless you change it in the settings.
                                Providing your birthday helps make sure that you get the right Nodes experience for your age.
                                For more details, please visit our <Link to="/" className="underline">Privacy Policy</Link>.
                            </div>
                        )}><CautionCircleIcon /> </Tooltip>
                    </div>
                    <div className="flex gap-2">
                        <Select
                            className="flex-1"
                            placeholder={'Day'} id="day"
                            options={AppConfig.DATE_OPTIONS.MONTHS}
                            onSelect={handleSelect} />
                        <Select
                            className="flex-1"
                            placeholder={'Month'} id="month"
                            options={AppConfig.DATE_OPTIONS.DAYS}
                            onSelect={handleSelect} />
                        <Select
                            className="flex-1"
                            placeholder={'Year'} id="year"
                            options={AppConfig.DATE_OPTIONS.YEARS}
                            onSelect={handleSelect} />
                    </div>
                </div>
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

                {/* {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword ? (
                    <div className="text-xs text-danger -mt-3">
                        Passwords don't match
                    </div>
                ) : null} */}
                <div className={`text-xs text-danger -mt-3 
                ${formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword ? 'opacity-100' : 'opacity-0'} `}>
                    Passwords don't match
                </div>

                <div className="flex items-center gap-2 text-xs">
                    <Checkbox checked={checked} setChecked={setChecked} />
                    <span>I agree with Nodes <span className="underline">Terms of Service</span> and <span className="underline">Privacy Policy</span>.</span>
                </div>

                <Button
                    className="mt-8"
                    disabled={!checked && !validateObjectValues(formData)}
                    onClick={handleClickForm}>
                    Sign Up
                </Button>

            </div>
        </div>
    )
}

export default Register