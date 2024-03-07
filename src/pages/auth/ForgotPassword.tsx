/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BackIcon } from "../../assets/svg";
import { Button, Input } from "../../components";
import { Title } from "../../components/Typography";
import { mainClient } from "../../utilities/client";
import { handleAxiosError } from "../../utilities/common";
import AppConfig from "../../utilities/config";
import { emailSchema, EmailValidationType } from "../../utilities/validation";

import {
  // FormikHelpers,
  useFormik,
} from "formik";
function Register() {
  const navigate = useNavigate();
  //   const [currentIndex, setCurrentIndex] = useState(0);
  // const [sent, setSent] = useState(0)

  const [submitLoading, setSubmitLoading] = useState(false);
  //   const handleChange = (e: any) => {
  //     const { id, value } = e.target;
  //     setFormData((prev) => ({
  //       ...prev,
  //       [id]: value,
  //     }));
  //   };

  const handleClickForm = () => {
    handleEmailSending();
    // if (currentIndex !== 0) {
    //     handleEmailSending(e)
    // } else {
    //     setCurrentIndex(1)
    // }
  };

  const formik = useFormik<EmailValidationType>({
    initialValues: {
      email: "",
    },
    validationSchema: emailSchema,
    validateOnBlur: true,
    onSubmit: handleClickForm,
  });

  const handleEmailSending = () => {
    setSubmitLoading(true);
    console.log(values);

    mainClient
      .post(AppConfig.API_ENDPOINTS.Auth.ForgotPasswordURL, values)
      .then((r) => {
        setSubmitLoading(false);
        if (r.status === 200) {
          toast.success(r.data.message);
          navigate(AppConfig.PATHS.Auth.ResetPassword);
        } else toast.error(r.data.message);
      })
      .catch((e) => {
        setSubmitLoading(false);
        handleAxiosError(e);
      });
  };

  const {
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    isValid,
    handleBlur,
  } = formik;

  return (
    <div className="px-5">
      <div
        onClick={() => navigate(-1)}
        className="flex items-center mb-10 gap-2 cursor-pointer"
      >
        <BackIcon /> Go back
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 justify-center w-full"
      >
        <div className="flex flex-col gap-2">
          <Title>Reset your password</Title>
          <p className="font-normal text-[18px] text-[#000000]">
            Forgot your password? Simply enter the email address associated with
            your Nodes account.
          </p>
        </div>

        <div className="w-full mt-6">
          <Input
            label="Email address"
            type="email"
            placeholder={AppConfig.PLACEHOLDERS.Email}
            id="email"
            error={errors.email}
            value={values.email}
            touched={touched.email}
            onChange={handleChange("email")}
            onBlur={handleBlur}
          />
        </div>

        <Button
          isLoading={submitLoading}
          className="mt-3"
          disabled={!isValid}
          type="submit"
        >
          Send email
        </Button>
      </form>
    </div>
  );
}

export default Register;
