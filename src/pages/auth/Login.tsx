/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GoogleIcon } from "../../assets/svg";
import { Button, Input, PasswordInput, ButtonOutline, AuthOnboardingLogo } from "../../components";
import { Title } from "../../components/Typography";
import { useAuth } from "../../context/hooks";
import { mainClient } from "../../utilities/client";
import { handleAxiosError } from "../../utilities/common";
import AppConfig from "../../utilities/config";
import { initalizeFirebaseApp } from "../../utilities/firebase";
import { useDispatch } from "react-redux";
import { loginUser } from "../../api/reducers/userSlice";
// import FormDebug from "../../components/FormDebug";

import {
  // FormikHelpers,
  useFormik,
} from "formik";
import { loginSchema, LoginValidationType } from "../../utilities/validation";

function Login() {
  initalizeFirebaseApp();
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { setUser } = useAuth();
  const [socialLogin, setSocialLogin] = useState(true);

  const [submitLoading, setSubmitLoading] = useState(false);

  const handleFormSubmit = (e: any) => {
    setSubmitLoading(true);

    if (!isValid) {
      console.log(e);
      toast.error(AppConfig.ERROR_MESSAGES.ValidationError);
    } else {
      mainClient
        .post(AppConfig.API_ENDPOINTS.Auth.LoginURL, values)
        .then((r) => {
          if (r?.data?.status === "success") {
            const result = r?.data?.result;
            const user = result?.user;
            const accessToken = result?.accessToken;

            toast.success("Login successful!");
            setUser(user);
            dispatch(loginUser(user));
            localStorage.setItem("bearerToken", accessToken);

            if (localStorage.getItem("bearerToken") == accessToken) {
              navigate("/dashboard");
            } else {
              toast.error("Something went wrong");
            }

            // navigate("/profile");
          } else toast.error(r.data.message);
          setSubmitLoading(false);
        })
        .catch((e) => {
          console.log(e);
          setSubmitLoading(false);

          handleAxiosError(e);
        });
      return;
    }
  };

  const formik = useFormik<LoginValidationType>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    validateOnBlur: true,
    onSubmit: handleFormSubmit,
  });

  const {
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    isValid,
    handleBlur,
  } = formik;

  const handleGoogleSignUp = async (e: any) => {
    e.preventDefault();

    // Instantiate a GoogleAuthProvider object
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/user.birthday.read");

    try {
      // Sign in with a pop-up window
      const result = await signInWithPopup(auth, provider);

      // Pull signed-in user credential.
      const user = result.user;
      console.log(user.displayName);
      // console.log(user)
    } catch (err: any) {
      // Handle errors here.
      const { errorMessage, errorCode } = err;

      switch (errorCode) {
        case "auth/operation-not-allowed":
          toast.error("Email/password accounts are not enabled.");
          break;
        case "auth/operation-not-supported-in-this-environment":
          toast.error("HTTP protocol is not supported. Please use HTTPS.");
          break;
        case "auth/popup-blocked":
          toast.error(
            "Popup has been blocked by the browser. Please allow popups for this website."
          );
          break;
        case "auth/popup-closed-by-user":
          toast.error(
            "Popup has been closed by the user before finalizing the operation. Please try again."
          );
          break;
        default:
          toast.error(errorMessage);
          break;
      }
    }
  };

  return (
    <div className="">
      {/* <FormDebug form={{ values, touched, errors, isValid }} /> */}
  
      <AuthOnboardingLogo link={{text1: 'Sign Up', text2: 'New to Nodes?', url: AppConfig.PATHS.Auth.Register}}/>
      <div className="mb-10">
        <Title className="!text-[24px] !font-medium !text-[#000000]">
          Welcome Back!
        </Title>
        <p className="text-[18px] font-normal text-[#000000]">
          Sign in to your creative space!
        </p>
      </div>
      <div className="flex flex-col items-center ">
        <ButtonOutline
          className="!rounded-lg "
          onClick={handleGoogleSignUp}
        >
          <div className="flex   items-center justify-center gap-2">
            <span>
              <GoogleIcon />
            </span>
            <span className=" text-base font-normal text-[#212121]">Sign up with Google</span>
          </div>
        </ButtonOutline>
        <div className="mb-10 mt-10 relative w-full flex items-center">
          <div className="bg-[#D9D9D9] h-[1px] flex-1"></div>

          <span className="max-w-max px-3 bg-[#ffffff] text-center text-base text-[#828282]">
            or sign in with email
          </span>
          <div className="bg-[#D9D9D9] h-[1px] flex-1"></div>
        </div>
      </div>

      <div className="">
        {socialLogin ? (
          <Button
            className="text-[#ffffff] font-normal text-base bg-primary "
            onClick={() => setSocialLogin(false)}
          >
            Continue with email
          </Button>
        ) : null}
        {socialLogin ? (
          <p className="text-center text-xs mt-8">
            By creating an account you agree with our{" "}
            <span className="underline">Terms of Service</span> and{" "}
            <span className="underline">Privacy Policy</span>
          </p>
        ) : null}
      </div>

      {!socialLogin ? (
        <form
          onSubmit={(e) => {
            e?.preventDefault();
            handleSubmit(e);
          }}
          className="flex flex-col gap-[23px] justify-center w-full "
        >
          <Input
            placeholder={AppConfig.PLACEHOLDERS.Email}
            id="email"
            type="email"
            label="Username or Email address"
            error={errors.email}
            value={values.email}
            touched={touched.email}
            onChange={handleChange("email")}
            onBlur={handleBlur}
            labelStyle={"!text-[#212121] !text-base"}
            className="placeholder:text-[#757575] placeholder:font-normal placeholder:text-base"
          />
          <PasswordInput
            forgotPasswordLink
            placeholder={AppConfig.PLACEHOLDERS.Password}
            id="password"
            type="password"
            error={errors.password}
            value={values.password}
            touched={touched.password}
            onChange={handleChange("password")}
            onBlur={handleBlur}
            labelStyle={"!text-[#212121] !text-base"}
            className="placeholder:text-[#757575] placeholder:font-normal placeholder:text-base"
          />

          <Button
            isLoading={submitLoading}
            className="mb-4 rounded-lg"
            disabled={!isValid}
            type="submit"
          >
            Sign In
          </Button>
          <div className="text-center">
            New to Nodes?{" "}
            <Link to={AppConfig.PATHS.Auth.Register} className="text-primary">
              Sign Up
            </Link>
          </div>
        </form>
      ) : null}
    </div>
  );
}

export default Login;
