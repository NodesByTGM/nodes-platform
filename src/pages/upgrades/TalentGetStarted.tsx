/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BackIcon } from "../../assets/svg";
import {
  Button,
  Input,
  OTPInput,
  PasswordInput,
  TalentCTA,
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

function TalentSignUp() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sent, setSent] = useState(false);
  const [timeLeft, setTimeLeft] = useState(AppConfig.OTP_COUNTDOWN);
  const [resendAllowed, setResendAllowed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    otp: "",
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const sendOTP = () => {
    mainClient
      .post(AppConfig.API_ENDPOINTS.Auth.SendOTP, formData)
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

  const handleClickForm = () => {
    if (currentIndex === 1) {
      validateOTP();
    } else {
      sendOTP();
    }
  };

  const validateOTP = () => {
    mainClient
      .post(AppConfig.API_ENDPOINTS.Auth.VerfiyEmail, formData)
      .then((r) => {
        if (r.status === 200) {
          toast.success(r.data.message);
          navigate(AppConfig.PATHS.Upgrades.Talent.Onboarding);
        } else toast.error(r.data.message);
      })
      .catch((e) => {
        handleAxiosError(e);
      });
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

  useEffect(() => {
    if (user) {
      if (user.verified) {
        toast.success("Your account is already verified");
        navigate(AppConfig.PATHS.Upgrades.Talent.Onboarding);
      } else {
        setFormData({
          ...formData,
          name: user.name,
          email: user.email,
        });
      }
    }
  }, [user]);

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
        {currentIndex === 0 ? (
          <div className="">
            <div className="mb-4">
              <Title>Create, connect and impact!</Title>
              <p>
                Showcase your talent, build meaningful connections, and be part
                of a community that celebrates your unique perspective.
              </p>
            </div>
            <div className="flex flex-col gap-4 justify-center w-full">
              <Input
                required
                placeholder={AppConfig.PLACEHOLDERS.Fullname}
                id="name"
                label="Full name"
                value={formData.name}
                onChange={handleChange}
              />

              <Input
                required
                placeholder={AppConfig.PLACEHOLDERS.Email}
                id="email"
                type="email"
                value={formData.email}
                label="Email address"
                onChange={handleChange}
              />

              <PasswordInput
                label="Re-enter password"
                forgotPasswordLink
                required
                type="password"
                placeholder={"Re-enter your password"}
                id="password"
                value={formData.password}
                onChange={handleChange}
              />

              <Button
                className="my-8"
                disabled={
                  !validateObjectValues(formData) || (sent && !resendAllowed)
                }
                onClick={handleClickForm}
              >
                Continue
              </Button>

              {!resendAllowed && sent ? (
                <span className="text-placeholder text-sm text-center -mt-4">
                  Resend code in {convertSecondsToTime(timeLeft)}
                </span>
              ) : null}

              <Link to={AppConfig.PATHS.Auth.Register} className="text-center">
                Sign up as a business instead?
              </Link>
            </div>
          </div>
        ) : null}

        {currentIndex === 1 ? (
          <div>
            <div
              onClick={() => setCurrentIndex(0)}
              className="flex items-center mb-10 gap-2 cursor-pointer"
            >
              <BackIcon /> Go back
            </div>

            <div className="text-center">
              <Title className="!text-2xl">We emailed you a code</Title>
              <p className="mb-5">Enter the verification code sent to: </p>
              <p className="text-primary">{formData.email}</p>
            </div>

            <OTPInput onChange={handleSetOTP} btnAction={validateOTP} />
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
      <div className="bg-customsecondary p-5 w-1/2 lg:block hidden">
        <TalentCTA />
      </div>
    </div>
  );
}

export default TalentSignUp;
