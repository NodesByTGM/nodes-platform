/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Input, FormDebug, Tooltip, Select, Button } from "../../components";
import AppConfig from "../../utilities/config";
import { useFormik } from "formik";
import { CautionCircleIcon } from "../../assets/svg";
import { Link } from "react-router-dom";
import { Check } from "react-feather";
import { useSettingsContext } from "../../context/hooks";

import {
  accountSettingsSchema,
  AccountSettingsValidationType,
} from "../../utilities/validation";

const CheckButton = ({ setFieldValue, values, label, value }) => {
  return (
    <div
      onClick={() => setFieldValue("visibility", value)}
      className={` cursor-pointer flex items-center gap-2`}
    >
      <div
        className={`${
          values?.visibility.toLowerCase() == value
            ? "bg-customsecondary text-white"
            : "bg-white"
        } size-5 rounded-full border border-primary flex items-center justify-center `}
      >
        <Check className="size-4" />
      </div>
      <span className="font-normal text-sm text-[#000000]">{label}</span>
    </div>
  );
};

export default function Account() {
  const { pageName } = useSettingsContext();
  const handleClickForm = (e?: any) => {
    console.log(JSON.stringify(e, null, 2));
  };

  const formik = useFormik<AccountSettingsValidationType>({
    initialValues: {
      name: "",
      email: "",
      username: "",
      day: "",
      month: "",
      year: "",
      visibility: "public",
    },
    validationSchema: accountSettingsSchema,
    validateOnBlur: true,
    onSubmit: handleClickForm,
  });

  const {
    setFieldValue,
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    isValid,
    handleBlur,
  } = formik;

  //   const handleSelect = ({ id, value }: any) => {
  //     console.log({ id, value });
  //     if (id.toLowerCase() == "day") {
  //       setFieldValue("day");
  //     }
  //     if (id.toLowerCase() == "month") {
  //       values.month = value;
  //     }
  //     if (id.toLowerCase() == "year") {
  //       values.year = value;
  //     }
  //   };

  return (
    <div>
      <span className="hidden">Page is: {pageName}</span>
      <FormDebug
        className="hidden"
        form={{ values, touched, errors, isValid }}
      />
      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
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

        <div>
          <div className="flex gap-2 items-center">
            <div className="text-sm font-medium ">Date of Birth*</div>
            <Tooltip
              id="dob"
              text={() => (
                <div>
                  This will not be shown publicly, unless you change it in the
                  settings. Providing your birthday helps make sure that you get
                  the right Nodes experience for your age. For more details,
                  please visit our{" "}
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
              options={AppConfig.DATE_OPTIONS.DAYS}
              onSelect={({ value }) => setFieldValue("day", value)}
              error={errors.day}
              //  touched={touched.day}
              handleBlur={handleBlur}
            />
            <Select
              className="flex-1"
              placeholder={"Month"}
              id="month"
              options={AppConfig.DATE_OPTIONS.MONTHS}
              onSelect={({ value }) => setFieldValue("month", value)}
              error={errors.month}
              //  touched={touched.month}
            />
            <Select
              className="flex-1"
              placeholder={"Year"}
              id="year"
              options={AppConfig.DATE_OPTIONS.YEARS}
              onSelect={({ value }) => setFieldValue("year", value)}
              error={errors.year}
              //  touched={touched.year}
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <span className="font-medium text-base text-[#000000]">
            Profile visibility
          </span>
          <div className="flex gap-4 flex-col">
            <CheckButton
              values={values}
              setFieldValue={setFieldValue}
              label={"Public"}
              value="public"
            />

            <CheckButton
              values={values}
              setFieldValue={setFieldValue}
              label={"Private"}
              value="private"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <span className="font-medium text-base text-[#000000]">
            Reset your password
          </span>
          <span className="text-[#212121] font-normal text-base">
            We believe in the power of every individual's creative spark.
          </span>
          <Button className="max-w-max text-[#ffffff] bg-[#0C5C56] ">
            Reset your password
          </Button>
        </div>
        <div className="flex flex-col gap-6">
          <span className="font-medium text-base text-[#000000]">
            Delete your account
          </span>
          <span className="text-[#212121] font-normal text-base">
            Once you delete your account, you can’t undo it. Please be certain.{" "}
          </span>
          <Button className="max-w-max text-[#ffffff] !bg-[#D11F54] ">
            Delete your password
          </Button>
        </div>
      </form>
    </div>
  );
}
