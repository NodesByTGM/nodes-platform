import { FormikHelpers, useFormik } from "formik";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Input, PasswordInput } from "../../components";
import { H4 } from "../../components/Typography";
import { useAuth } from "../../context/hooks";
import { mainClient } from "../../utilities/client";
import { handleAxiosError } from "../../utilities/common";
import AppConfig from "../../utilities/config";
import { LoginSchema, LoginValidationType } from "../../validations/auth";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const searchParams = new URLSearchParams(location.search);
  const nextUrl = searchParams.get("next");

  const handleFormSubmit = (
    values: LoginValidationType,
    formikHelpers: FormikHelpers<LoginValidationType>
  ) => {
    setLoading(true);
    mainClient
      .post(AppConfig.API_ENDPOINTS.Auth.LoginURL, values)
      .then((r) => {
        setUser(r.data.user);
        toast.success("Login successful!");
        if (nextUrl) {
          navigate(nextUrl);
        } else {
          navigate(AppConfig.PATHS.Dashboard.Profile);
        }
      })
      .catch((e) => {
        handleAxiosError(e);
        formikHelpers.resetForm();
      })
      .finally(() => setLoading(false));
    return;
  };

  const formik = useFormik<LoginValidationType>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    validateOnBlur: true,
    onSubmit: handleFormSubmit,
  });

  const { handleChange, handleSubmit, errors, touched, values, isValid } =
    formik;
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center mb-8">
        <H4 className="text-primary" weight="semibold">
          Log In to your Account
        </H4>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 justify-center w-full mt-2">
          <Input
            placeholder={AppConfig.PLACEHOLDERS.Email}
            id="email"
            type="email"
            label="Email address"
            error={errors.email}
            value={values.email}
            touched={touched.email}
            onChange={handleChange("email")}
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
          />

          <div>
            <Button
              type="submit"
              className="my-4"
              compact={false}
              loading={loading}
              disabled={!isValid}
            >
              Sign In
            </Button>
          </div>
          <div className="text-center">
            New to Nodes?{" "}
            <Link to={AppConfig.PATHS.Auth.Register} className="text-primary">
              Sign Up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
