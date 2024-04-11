/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BackIcon, CautionCircleIcon } from "../../assets/svg";
// import moment from "moment";
import {
  Button,
  Checkbox,
  Input,
  OTPInput,
  PasswordInput,
  DateSelect,
  // BasicSelect,
  // ReactDateSelect,
  OnboardingCarousel,
  AuthOnboardingLogo,
  // TalentCTA,
  Tooltip,
} from "../../components";
import { Title } from "../../components/Typography";
import { useAuth } from "../../context/hooks";
import { mainClient } from "../../utilities/client";
import {
  convertSecondsToTime,
  handleAxiosError,
  // validateObjectValues,
} from "../../utilities/common";
import AppConfig from "../../utilities/config";
import { useFormik } from "formik";
import FormDebug from "../../components/FormDebug";
import { signupSchema, SignupValidationType } from "../../utilities/validation";
import { loginUser } from "../../api/reducers/userSlice";
import { useDispatch } from "react-redux";
import {returnMaxDate} from '../../utilities'

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setUser } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [checked, setChecked] = useState(false);
  const [sent, setSent] = useState(false);
  const [resendAllowed, setResendAllowed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(AppConfig.OTP_COUNTDOWN);
  const [sendOtpLoading, setSendOtpLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);


  const prepareDetails = (values) => {
    const payload = {
      name: values.name,
      username: values.username,
      email: values.email,
      dob: values.dob,
      otp: values.otp,
      password: values.password,
    };

    return payload;
  };

  const handleClickForm = (e?: any) => {
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
    setSubmitLoading(true);

    const data = prepareDetails(values);
    mainClient
      .post(AppConfig.API_ENDPOINTS.Auth.RegisterURL, data)
      .then((r) => {
        if (r?.data?.status === "success") {
          // console.log(JSON.stringify(r, null, 2));
          const result = r?.data?.result;
          const user = result?.user;
          const accessToken = result?.accessToken;

          // console.log(JSON.stringify(accessToken));
          localStorage.setItem("bearerToken", accessToken);
          toast.success(r.data.message);

          setUser(user);
          dispatch(loginUser(user));

          if (localStorage.getItem("bearerToken") == accessToken) {
            navigate(AppConfig.PATHS.Upgrades.Talent.Onboarding);
          } else {
            toast.error("Something went wrong");
          }
        } else toast.error(r.data.message);
        setSubmitLoading(false);
      })
      .catch((e) => {
        setSubmitLoading(false);
        handleAxiosError(e);
      });
  };

  const formik = useFormik<SignupValidationType>({
    initialValues: {
      name: "",
      email: "",
      username: "",
      dob: "",
      password: "",
      confirmPassword: "",
      otp: "",
    },
    validationSchema: signupSchema,
    validateOnBlur: true,
    onSubmit: handleClickForm,
  });

  const {
    // setFieldValue,
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    isValid,
    handleBlur,
  } = formik;

  const previousStep = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const sendOTP = () => {
    setSendOtpLoading(true);
    mainClient
      .post(AppConfig.API_ENDPOINTS.Auth.SendOTP, { email: values.email })
      .then((r) => {
        console.log(JSON.stringify(r, null, 2));
        if (r.status === 200) {
          toast.success(r.data.message);
          setSent(true);
          setResendAllowed(false);
          setCurrentIndex(1);
          setTimeLeft(AppConfig.OTP_COUNTDOWN);
        }
        setSendOtpLoading(false);
      })
      .catch((e) => {
        setSendOtpLoading(false);
        handleAxiosError(e);
      });
  };

  const handleSetOTP = (value: string) => {
    values.otp = value;
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

  // useEffect(() => {
  //   // Get the current date
  //   const currentDate = new Date();
    
  //   // Calculate the date 18 years from now
  //   const maxDate = new Date(currentDate.getFullYear() + 18, currentDate.getMonth(), currentDate.getDate());
    
  //   // Format the date as YYYY-MM-DD (required by the 'date' input type)
  //   const formattedMaxDate = maxDate.toISOString().split('T')[0];
    
  //   // Set the max attribute of the input field
  //   const dateInput = document.getElementById('date') as HTMLInputElement;
  //   dateInput.max = formattedMaxDate;
  // }, []);

  return (
    <div className="flex min-h-[100vh] max-h-[100vh]  w-full">
      <div className="bg-[#ffffff] px-20 pb-20 pt-[60px] lg:w-1/2 overflow-y-auto">
        {currentIndex === 0 ? (
          <div className="overflow-y-auto">
            <AuthOnboardingLogo
              link={{
                text1: "Log in",
                text2: "Already using Nodes?",
                url: AppConfig.PATHS.Auth.Login,
              }}
            />

            <div className="mb-10 flex flex-col gap-4">
              <h3 className="!text-[24px] !font-medium">Welcome to Nodes!</h3>
              <p>Where creativtity knows no limits.</p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 justify-center w-full"
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

              {/* <ReactDateSelect
                id="dob"
                label="Date of Birth"
                // required
                error={errors.dob}
                value={values.dob}
                touched={touched.dob}
                onChange={(date: unknown) => {
                  const myDOB = moment(new Date(date as string)).format("YYYY-MM-DD")
                  // console.log();
                  // handleChange("dob")
                  setFieldValue('dob', myDOB)
                  
                }}
                onBlur={handleBlur}
              /> */}

              {/* DOB */}
              <div>
                <div className="flex gap-2 items-center mb-1">
                  <div className="text-base font-medium ">Date of Birth*</div>
                  <Tooltip
                    id="dob-tip"
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
                <div className="w-full">
                  {/* {returnMaxDate()} */}
                  <DateSelect
                  max={returnMaxDate()}
                    labelStyle="!text-base"
                    required
                    id="dob"
                    error={errors.dob}
                    value={values.dob}
                    touched={touched.dob}
                    onChange={handleChange("dob")}
                    onBlur={handleBlur}
                  />
                  {/* {values.dob} */}
                  {/* <ReactDateSelect
                    id="dob"
                    // label="Date of Birth"
                    // required
                    maxDate={moment().subtract(18, "years")}
                    error={errors.dob}
                    value={values.dob}
                    touched={touched.dob}
                    onChange={(date: unknown) => {
                      const myDOB = moment(new Date(date as string)).format(
                        "YYYY-MM-DD"
                      );
                      // console.log();
                      // handleChange("dob")
                      setFieldValue("dob", myDOB);
                    }}
                    onBlur={handleBlur}
                  /> */}
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

              <div className="flex items-center gap-2 text-xs">
                <Checkbox checked={checked} setChecked={setChecked} />
                <span>
                  I agree with Nodes{" "}
                  <span className="underline">Terms of Service</span> and{" "}
                  <span className="underline">Privacy Policy</span>.
                </span>
              </div>

              <Button
                isLoading={sendOtpLoading}
                className={`${!checked || !isValid ? "opacity-50" : ""} mt-8`}
                disabled={!checked || !isValid}
                type="submit"
              >
                Sign Up
              </Button>
            </form>
          </div>
        ) : null}

        {currentIndex === 1 ? (
          <div>
            <div
              onClick={previousStep}
              className="flex items-center mb-10 gap-2 cursor-pointer"
            >
              <BackIcon /> Go back
            </div>

            <div className="text-center">
              <Title className="!text-2xl">We emailed you a code</Title>
              <p className="mb-5">Enter the verification code sent to: </p>
              <p className="text-primary">{values.email}</p>
            </div>

            <OTPInput
              submitLoading={submitLoading}
              onChange={handleSetOTP}
              btnAction={handleClickForm}
            />
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
      <FormDebug
        className="hidden"
        form={{ values, errors, touched, isValid }}
      />
      {currentIndex !== 0 ? <OnboardingCarousel /> : <OnboardingCarousel />}
    </div>
  );
}

export default Register;
