/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { MdCancel } from "react-icons/md";
import { Button, Input, TextArea, FormDebug } from "../../../components";
import AppConfig from "../../../utilities/config";
import { useFormik, FormikProvider, FieldArray } from "formik";
import { jobSchema, jobValidationType } from "../../../utilities/validation";

export default function JobPostForm({ closeModal }) {
  const handleClickForm = (values?: any) => {
    const data = {
      ...values,
    };
    console.log(JSON.stringify(data, null, 2));
    // createUserProject(data);
  };
  const formik = useFormik<jobValidationType>({
    initialValues: {
      name: "",
      description: "",
      experience: "",
      payRate: 0,
      workRate: "",
      skills: [],
      jobType: 0,
    },
    validationSchema: jobSchema,
    validateOnBlur: true,
    onSubmit: handleClickForm,
  });

  const {
    // setFieldValue,
    // setValues,
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    isValid,
    handleBlur,
  } = formik;
  return (
    <div className={`text-[#000000]`}>
      <div className="flex items-center justify-between mb-[32px]">
        <span className="">Create a Job Post</span>

        <div
          onClick={() => closeModal()}
          className="cursor-pointer text-primary text-[16px]"
        >
          <MdCancel />
        </div>
      </div>

      <FormDebug
        form={{
          values,
          errors,
          touched,
          isValid,
        }}

        className='hidden'
      />
      <FormikProvider value={formik}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="flex flex-col gap-6"
        >
          <div className="w-full">
            <Input
              required
              placeholder={AppConfig.PLACEHOLDERS.JobTitle}
              id="name"
              label="Job Title"
              error={errors.name}
              value={values.name}
              touched={touched.name}
              onChange={handleChange("name")}
              onBlur={handleBlur}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full">
              <Input
                required
                placeholder={AppConfig.PLACEHOLDERS.Hours}
                id="hours"
                label="Hours required per week"
                // error={errors.name}
                // value={values.name}
                // touched={touched.name}
                // onChange={handleChange("name")}
                // onBlur={handleBlur}
              />
            </div>
            <div className="w-full">
              <Input
                required
                placeholder={AppConfig.PLACEHOLDERS.Hours}
                id="payRate"
                label="Rate per hour"
                error={errors.payRate}
                value={values.payRate}
                touched={touched.payRate}
                onChange={handleChange("payRate")}
                onBlur={handleBlur}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full">
              <Input
                required
                placeholder={AppConfig.PLACEHOLDERS.Hours}
                id="workRate"
                label="Rate per week"
                error={errors.workRate}
                value={values.workRate}
                touched={touched.workRate}
                onChange={handleChange("workRate")}
                onBlur={handleBlur}
              />
            </div>
            <div className="w-full">
              <Input
                required
                placeholder={AppConfig.PLACEHOLDERS.Hours}
                id="location"
                label="Location"
                // error={errors.name}
                // value={values.name}
                // touched={touched.name}
                // onChange={handleChange("name")}
                // onBlur={handleBlur}
              />
            </div>
          </div>
          <div className="w-full">
            <TextArea
              required
              placeholder={AppConfig.PLACEHOLDERS.JobDescription}
              id="description"
              label="Description"
              error={errors.description}
              value={values.description}
              touched={touched.description}
              onChange={handleChange("description")}
              onBlur={handleBlur}
            />
          </div>
          <Button
            type="submit"
            isLoading={false}
            className={`${!isValid ? "opacity-50" : ""} `}
            disabled={!isValid}
          >
            Create job posting
          </Button>
        </form>
      </FormikProvider>
    </div>
  );
}
