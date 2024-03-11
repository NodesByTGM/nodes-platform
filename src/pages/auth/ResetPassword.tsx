/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BackIcon } from "../../assets/svg";
import { Button, PasswordInput } from "../../components";
import { Title } from "../../components/Typography";
import { mainClient } from "../../utilities/client";
import { handleAxiosError } from "../../utilities/common";
import AppConfig from "../../utilities/config";
import {
  resetPasswordSchema,
  ResetPasswordType,
} from "../../utilities/validation";

import {
  // FormikHelpers,
  useFormik,
} from "formik";

function Register() {
  const navigate = useNavigate();
  const params = useParams();
  const { accountId, token } = params;
  const [valid, setValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resetPasswordLoading, setResetPasswordLoading] = useState(false);

  const handleClickForm = (values: any) => {
    setResetPasswordLoading(true);

    const data = {
      password: values.password,
    };

    mainClient
      .post(
        `${AppConfig.API_ENDPOINTS.Auth.ResetPasswordURL}/${accountId}/${token}`,
        data
      )
      .then((r) => {
        setResetPasswordLoading(false);
        if (r.status === 200) {
          toast.success(r.data.message);
          navigate(AppConfig.PATHS.Auth.Login);
        } else toast.error(r.data.message);
      })
      .catch((e) => {
        setResetPasswordLoading(false);
        handleAxiosError(e);
      });
  };
  const formik = useFormik<ResetPasswordType>({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordSchema,
    validateOnBlur: true,
    onSubmit: handleClickForm,
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

  // const handleChange = (e: any) => {
  //     const { id, value } = e.target
  //     setFormData((prev) => ({
  //         ...prev,
  //         [id]: value,
  //     }));
  // };

  const checkResetLink = () => {
    setLoading(true);
    mainClient
      .get(
        `${AppConfig.API_ENDPOINTS.Auth.CheckResetLinkURL}/${accountId}/${token}`
      )
      .then((r) => {
        if (r.status === 200) {
          setValid(true);
          setLoading(false);
        } else setValid(false);
      })
      .catch((e) => {
        setLoading(false);
        setValid(false);
        handleAxiosError(e);
      });
  };

  useEffect(() => {
    checkResetLink();
  }, []);

  return (
    <div className="px-5">
      <div
        onClick={() => navigate(AppConfig.PATHS.Auth.Login)}
        className="flex items-center mb-10 gap-2 cursor-pointer"
      >
        <BackIcon /> Go back
      </div>
      {valid && !loading ? (
        <form
          onSubmit={(e) => {
            e?.preventDefault();
            handleSubmit();
          }}
          className="flex flex-col gap-4 justify-center w-full"
        >
          <Title>Reset your password</Title>
          <p>Choose a new password.</p>

          <div className="w-full flex flex-col gap-4">
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
          </div>

          <Button
            isLoading={resetPasswordLoading}
            className="mt-8"
            disabled={!isValid}
            type="submit"
          >
            Reset password
          </Button>
        </form>
      ) : (
        <div>
          {loading ? "Please wait while we verify your token" : "Invalid link "}
        </div>
      )}
    </div>
  );
}

export default Register;
