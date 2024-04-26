/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { MdCancel } from "react-icons/md";
import Countries from "../../../../utilities/countries.json";
import { useDashboardContext } from "../../../../context/hooks";

import {
  verifyBusinessSchema,
  VerifyBusinessValidationType,
} from "../../../../utilities/validation";
import { FormDebug } from "../../../../components";
import { useVerifyBusinessMutation } from "../../../../api";
import {
  Button,
  ButtonOutline,
  Input,
  ProjectFileUpload,
  LocationSelect,
  DateSelect,
  ProfileImgUploader,
} from "../../../../components";
import AppConfig from "../../../../utilities/config";
import { useFormik, FormikProvider } from "formik";
import { toast } from "react-toastify";
import moment from "moment";
export default function VerifyBusiness({ setVerifyModal }) {
  const [
    verifyBusiness,
    { isLoading: verifyBusinessLoading, isSuccess: isVerifyBusinessSuccessful, isError: isVerifyError },
  ] = useVerifyBusinessMutation();
  const { user } = useDashboardContext();

  const handleClickForm = (values?: any) => {
    const data = {
      ...values,
    };
    verifyBusiness(data);
  };

  const formik = useFormik<VerifyBusinessValidationType>({
    initialValues: {
      logo: {
        id: "",
        url: "",
      },
      name: "",
      location: "",
      yoe: "",

      linkedIn: "",
      CAC: {
        id: "",
        url: "",
      },
    },
    validationSchema: verifyBusinessSchema,
    validateOnBlur: true,
    onSubmit: handleClickForm,
  });

  const {
    setFieldValue,
    // setValues,
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    isValid,
    handleBlur,
  } = formik;

  useEffect(() => {
    if (isVerifyBusinessSuccessful) {
      toast.success("Successfully Verified Business");
      setVerifyModal(false);
    }
  }, [isVerifyBusinessSuccessful]);

  useEffect(() => {
    if (isVerifyError) {
      toast.error("Failed to verify");
      setVerifyModal(false);
    }
  }, [isVerifyError]);
  

  return (
    <div>
      <FormDebug form={{ values, errors, touched }} className="hidden" />
      <div className="flex flex-col gap-8">
        {/* <pre className="">{JSON.stringify(details, null, 2)}</pre> */}
        <div className="flex items-center justify-between">
          <h3 className="text-[#000000] font-medium text-[20px]">
            Hi, {user?.name}! To get started please verify your business.
          </h3>
          <div
            onClick={() => setVerifyModal(false)}
            className="cursor-pointer max-w-max"
          >
            <MdCancel className="text-primary text-[24px]" />
          </div>
        </div>
        <span className="text-primary -mt-4 mb-2">
          To proceed please verify your business
        </span>

        <FormikProvider value={formik}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="grid grid-col-1 gap-6">
              <ProfileImgUploader
                value={values?.logo}
                onChange={(value) => {
                  console.log(value);
                  setFieldValue("logo", value);
                }}
              />
              <div className="w-full">
                <Input
                  required
                  placeholder={AppConfig.PLACEHOLDERS.ProjectName}
                  id="name"
                  label="Name of Business"
                  error={errors.name}
                  value={values.name}
                  touched={touched.name}
                  onChange={handleChange("name")}
                  onBlur={handleBlur}
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-medium text-base ">Location</span>
                <LocationSelect
                  paddingy="py-[16px]"
                  defaultValue={"values.location"}
                  options={Countries}
                  onChange={
                    (value) => setFieldValue("location", value)
                    // console.log(value)
                  }
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <span className="font-medium text-base ">
                  Year of Establishment
                </span>

                <DateSelect
                  labelStyle="!text-base"
                  required
                  id="yoe"
                  error={errors.yoe}
                  value={moment(values.yoe).format("yyyy-MM-DD")}
                  touched={touched.yoe}
                  onChange={handleChange("yoe")}
                  onBlur={handleBlur}
                />
              </div>
              <div className="w-full">
                <Input
                  placeholder={AppConfig.PLACEHOLDERS.LinkedIn}
                  id="linkedIn"
                  label="LinkedIn"
                  error={errors.linkedIn}
                  value={values.linkedIn}
                  touched={touched.linkedIn}
                  onChange={handleChange("linkedIn")}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col gap-10 mb-2">
                <ProjectFileUpload
                  value={values?.CAC?.url}
                  onChange={(value) => {
                    setFieldValue("CAC", value);
                  }}
                  label="Upload CAC Document"
                />
              </div>

              <div className="grid grid-cols-2 gap-8">
                <ButtonOutline
                  onClick={() => setVerifyModal(false)}
                  className=""
                >
                  Continue Later
                </ButtonOutline>
                <div className="">
                  <Button
                    type="submit"
                    isLoading={verifyBusinessLoading}
                    className={`${!isValid ? "opacity-50" : ""} `}
                    disabled={!isValid}
                  >
                    Verify Business
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </FormikProvider>
      </div>
    </div>
  );
}
