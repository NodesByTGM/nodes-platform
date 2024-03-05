import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BackIcon, CautionCircleIcon } from "../../assets/svg";
import {
  Button,
  Checkbox,
  Input,
  OTPInput,
  PasswordInput,
  Select,
  TalentCTA,
  Tooltip,
} from "../../components";
import { Title } from "../../components/Typography";
import { useAuth } from "../../context/hooks";
import { mainClient } from "../../utilities/client";
import {
  convertSecondsToTime,
  handleAxiosError,
  validateObjectValues,
} from "../../utilities/common";
import AppConfig from "../../utilities/config";
import { FormikHelpers, useFormik } from "formik";
import FormDebug from "../../components/FormDebug";
import { signupSchema, SignupValidationType } from "../../utilities/validation";

function Register() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [checked, setChecked] = useState(false);
  const [sent, setSent] = useState(false);
  const [resendAllowed, setResendAllowed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(AppConfig.OTP_COUNTDOWN);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    dob: Date.now(),
    password: "",
    confirmPassword: "",
    otp: "",
  });

  const handleFormSubmit = (
    values: SignupValidationType,
    formikHelpers: FormikHelpers<SignupValidationType>
  ) => {
    console.log(values);
  };

  const formik = useFormik<SignupValidationType>({
    initialValues: {
      name: "",
      email: "",
      username: "",
      dob: Date.now(),
      password: "",
      confirmPassword: "",
      otp: "",
    },
    validationSchema: signupSchema,
    validateOnBlur: true,
    onSubmit: handleFormSubmit,
  });

  const { handleChange, handleSubmit, errors, touched, values, isValid, handleBlur } =
    formik;

  const [date, setDate] = useState({
    day: "",
    month: "",
    year: "",
  });

  //   const handleChange = (e: any) => {
  //     const { id, value } = e.target;
  //     setFormData((prev) => ({
  //       ...prev,
  //       [id]: value,
  //     }));
  //   };

  const handleClickForm = (e?: any) => {
    console.log("formData: " + JSON.stringify(formData));
    for (const key in formData) {
      console.log(`Signups - ${key}: ${formData[key]}`);
    }
    if (currentIndex === 0) {
      if (!sent) {
        sendOTP();
      }
    } else {
      handleRegistration(e);
    }
    if (currentIndex < 1 && sent) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleRegistration = (e: any) => {
    e?.preventDefault();
    const form = {
      ...formData,
      dob: new Date(`${date.day}-${date.month}-${date.year}`),
    };
    const { confirmPassword, ...data } = form;
    mainClient
      .post(AppConfig.API_ENDPOINTS.Auth.RegisterURL, data)
      .then((r) => {
        if (r.status === 200) {
          toast.success(r.data.message);
          setUser(r.data.user);
          navigate(AppConfig.PATHS.Upgrades.Talent.Onboarding);
        } else toast.error(r.data.message);
      })
      .catch((e) => {
        handleAxiosError(e);
      });
  };

  const handleSelect = ({ id, value }: any) => {
    setDate((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const previousStep = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const sendOTP = () => {
    mainClient
      .post(AppConfig.API_ENDPOINTS.Auth.SendOTP, { email: formData.email })
      .then((r) => {
        if (r.status === 200) {
          toast.success(r.data.message);
          setSent(true);
          setResendAllowed(false);
          setCurrentIndex(1);
          setTimeLeft(AppConfig.OTP_COUNTDOWN);
        }
      });
  };

  const handleSetOTP = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      otp: value,
    }));
  };

  useEffect(() => {
    if (!resendAllowed && sent) {
      const countdownInterval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 0) {
            clearInterval(countdownInterval);
            setResendAllowed(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(countdownInterval);
    }
  }, [sent]);

  return (
    <div className="flex min-h-[100vh] justify-center">
      <div className="p-20 px-24 pt-10 lg:w-1/2">
        {currentIndex === 0 ? (
          <div>
            <div className="flex justify-between items-center mb-10">
              <Link to="/">
                <div>
                  <img src="/logo.svg" alt="" className="w-8" />
                </div>
              </Link>
              <div className="text-sm">
                <span>Already using Nodes? </span>
                <Link
                  to={AppConfig.PATHS.Auth.Login}
                  className="text-primary cursor-pointer"
                >
                  Log in
                </Link>
              </div>
            </div>
            <div className="mb-4">
              <Title>Welcome to Nodes!</Title>
              <p>Where creativtity knows no limits.</p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 justify-center w-full"
            >
              <div className="flex lg:flex-row flex-col gap-5">
                <div className="w-full">
                  <Input
                    required
                    placeholder={AppConfig.PLACEHOLDERS.Fullname}
                    id="name"
                    label="Full name"
                    error={errors.name}
                    value={values.name}
                    touched={touched.name}
                    onChange={handleChange("name")}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="w-full">
                  <Input
                    required
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
              </div>
              <Input
                required
                placeholder={AppConfig.PLACEHOLDERS.Email}
                id="email"
                type="email"
                label="Email address"
                error={errors.email}
                value={values.email}
                touched={touched.email}
                onChange={handleChange("email")}
                onBlur={handleBlur}
              />

              {/* DOB */}
              <div>
                <div className="flex gap-2 items-center">
                  <div className="text-sm font-medium ">Date of Birth*</div>
                  <Tooltip
                    id="dob"
                    text={() => (
                      <div>
                        This will not be shown publicly, unless you change it in
                        the settings. Providing your birthday helps make sure
                        that you get the right Nodes experience for your age.
                        For more details, please visit our{" "}
                        <Link to="/" className="underline">
                          Privacy Policy
                        </Link>
                        .
                      </div>
                    )}
                  >
                    <CautionCircleIcon />{" "}
                  </Tooltip>
                </div>
                <div className="flex gap-2">
                  <Select
                    className="flex-1"
                    placeholder={"Day"}
                    id="day"
                    options={AppConfig.DATE_OPTIONS.MONTHS}
                    onSelect={handleSelect}
                  />
                  <Select
                    className="flex-1"
                    placeholder={"Month"}
                    id="month"
                    options={AppConfig.DATE_OPTIONS.DAYS}
                    onSelect={handleSelect}
                  />
                  <Select
                    className="flex-1"
                    placeholder={"Year"}
                    id="year"
                    options={AppConfig.DATE_OPTIONS.YEARS}
                    onSelect={handleSelect}
                  />
                </div>
              </div>
              <PasswordInput
                check
                required
                type="password"
                placeholder={"+8 characters"}
                id="password"
                error={errors.password}
                value={values.password}
                touched={touched.password}
                onChange={handleChange("password")}
                onBlur={handleBlur}
              />
              <PasswordInput
                required
                label="Confirm password"
                type="password"
                placeholder={AppConfig.PLACEHOLDERS.ConfirmPassword}
                id="confirmPassword"
                error={errors.confirmPassword}
                value={values.confirmPassword}
                touched={touched.confirmPassword}
                onChange={handleChange("confirmPassword")}
                onBlur={handleBlur}
              />

              {/* {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword ? (
                                <div className="text-xs text-danger -mt-3">
                                    Passwords don't match
                                </div>
                            ) : null} */}
              <div
                className={`text-xs text-danger -mt-3 
                            ${
                              formData.password &&
                              formData.confirmPassword &&
                              formData.password !== formData.confirmPassword
                                ? "opacity-100"
                                : "opacity-0"
                            } `}
              >
                Passwords don't match
              </div>

              <div className="flex items-center gap-2 text-xs">
                <Checkbox checked={checked} setChecked={setChecked} />
                <span>
                  I agree with Nodes{" "}
                  <span className="underline">Terms of Service</span> and{" "}
                  <span className="underline">Privacy Policy</span>.
                </span>
              </div>

              <Button
                className="mt-8"
                disabled={!checked && !validateObjectValues(formData)}
                onClick={handleClickForm}
              >
                Sign Up
              </Button>
            </form>
          </div>
        ) : null}

        {currentIndex === 1 ? (
          <div>
            <FormDebug form={{ values, touched, errors }} />
            <div
              onClick={previousStep}
              className="flex items-center mb-10 gap-2 cursor-pointer"
            >
              <BackIcon /> Go back
            </div>

            <div className="text-center">
              <Title className="!text-2xl">We emailed you a code</Title>
              <p className="mb-5">Enter the verification code sent to: </p>
              <p className="text-primary">{formData.email}</p>
            </div>

            <OTPInput onChange={handleSetOTP} btnAction={handleClickForm} />
            <div className="text-center mt-6">
              {resendAllowed ? (
                <span>
                  Did you get your code?{" "}
                  <span onClick={sendOTP} className="text-primary">
                    Send a new code
                  </span>
                </span>
              ) : (
                <span className="text-placeholder">
                  Resend code in {convertSecondsToTime(timeLeft)}
                </span>
              )}
            </div>
          </div>
        ) : null}
      </div>
      <div
        className={clsx(
          "bg-light p-5 w-1/2 lg:block hidden",
          currentIndex === 0 ? "bg-light" : "bg-primary"
        )}
      >
        {currentIndex === 0 ? (
          <div className="flex flex-col justify-center mt-20 items-center">
            <FormDebug form={{ values, touched, errors }} />
            <div className="">
              <img src="/img/auth1.png" alt="" className="w-[350px]" />
              <img
                src="/img/auth2.png"
                alt=""
                className="w-[350px] relative -mt-20 ml-32"
              />
              <img
                src="/img/auth3.png"
                alt=""
                className="w-[350px] relative -mt-20"
              />
            </div>
          </div>
        ) : (
          <TalentCTA />
        )}
      </div>
    </div>
  );
}

export default Register;
