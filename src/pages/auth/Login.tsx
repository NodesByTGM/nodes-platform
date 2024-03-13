/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GoogleIcon } from "../../assets/svg";
import { Button, Input, PasswordInput } from "../../components";
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
          if (r.status === 200) {
            toast.success("Login successful!");
            setUser(r.data.user);
            dispatch(loginUser(r.data.user));
            localStorage.setItem("bearerToken", r.data?.user?.accessToken);

            navigate("/dashboard/profile");
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
      <div className="flex justify-between items-center mb-10">
        <Link to="/">
          <div>
            <img src="/logo.svg" alt="" className="w-8" />
          </div>
        </Link>
        <div className="text-sm">
          <span>New to Nodes? </span>
          <Link
            to={AppConfig.PATHS.Auth.Register}
            className="text-primary cursor-pointer"
          >
            Sign Up
          </Link>
        </div>
      </div>
      <div className="mb-10">
        <Title>Your creative evolution starts here!</Title>
        <p>Sign up now and become part of the Nodes community.</p>
      </div>
      <div className="flex flex-col items-center gap-5">
        <Button theme="dark" onClick={handleGoogleSignUp}>
          <div className="flex items-center justify-center gap-2">
            <span>
              <GoogleIcon />
            </span>
            <span>Sign up with Google</span>
          </div>
        </Button>
        <div className="w-full mt-5">
          <hr className="border-gray-200" />
        </div>
        <span className="bg-light -mt-8 px-3 bg-gry text-center">or</span>
        {socialLogin ? (
          <Button theme="secondary" onClick={() => setSocialLogin(false)}>
            Continue with email
          </Button>
        ) : null}
        {socialLogin ? (
          <p className="text-center text-xs">
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
          className="flex flex-col gap-2 justify-center w-full mt-2"
        >
          <Input
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
          />

          <Button
            isLoading={submitLoading}
            className="my-4"
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
