/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button, PasswordInput } from "../../components";
import AppConfig from "../../utilities/config";
import {
  resetPasswordSchema,
  ResetPasswordType,
} from "../../utilities/validation";
import { toast } from "react-toastify";

import {
  // FormikHelpers,
  useFormik,
} from "formik";

export default function ResetPassword() {
  const handleFormSubmit = (e: any) => {
    if (!isValid) {
      toast.error(AppConfig.ERROR_MESSAGES.ValidationError);
    } else {
      console.log(e);
      return;
    }
  };

  const formik = useFormik<ResetPasswordType>({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordSchema,
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

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center gap-4 mb-10">
        <h3 className="text-[#000000] text-[20px] font-medium">
          Welcome Back!
        </h3>
        <span className="text-[#000000] text-base font-normal">
          Nice to see you again
        </span>
      </div>
      <div className="">
        <form
          onSubmit={(e) => {
            e?.preventDefault();
            handleSubmit(e);
          }}
          className="flex flex-col gap-6 justify-center w-full mt-2"
        >
          <PasswordInput
            isAdmin
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
            isLoading={false}
            className="my-4"
            disabled={!isValid}
            type="submit"
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}
