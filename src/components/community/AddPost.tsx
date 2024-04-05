/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import {
  ModalCancel,
  TitleInput,
  TextArea,
  Button,
  PaperClip,
  PictureIcon,
} from "../../components";
import AppConfig from "../../utilities/config";
import { useFormik } from "formik";
import { FormDebug } from "../../components";
import { useCommunityPostMutation } from "../../api";
import { toast } from "react-toastify";
import { postValidationType, postSchema } from "../../utilities/validation";
import { Plus } from "react-feather";
export default function AddPost({ closeModal, refetch }) {
  const [
    postToCommunity,
    { isLoading: postToCommunityLoading, isSuccess: isPostToCommunitySuccess },
  ] = useCommunityPostMutation();

  const handleClickForm = (values?: any) => {
    const data = {
      ...values,
    };
    console.log(JSON.stringify(data, null, 2));
    postToCommunity(data);
  };

  const formik = useFormik<postValidationType>({
    initialValues: {
      body: "",
      attachments: [
        // {
        //   id: "",
        //   url: "",
        // },
      ],
      hashtags: [""],
    },
    validationSchema: postSchema,
    validateOnBlur: true,
    onSubmit: handleClickForm,
  });

  const { handleChange, handleSubmit, errors, values, isValid, handleBlur } =
    formik;
  useEffect(() => {
    if (isPostToCommunitySuccess) {
      closeModal();
      refetch();
      toast.success("Post sent");
    }
  }, [isPostToCommunitySuccess]);
  return (
    <div>
      <div className="flex justify-between items-start">
        <span className="font-medium text-[#000000] text-[24px]">
          Ask the members a question
        </span>
        <div onClick={() => closeModal()} className="">
          {" "}
          <ModalCancel />
        </div>
      </div>
      <FormDebug form={{ values, errors, isValid }} className="hidden" />

      <div className="flex flex-col mt-6">
        <div className="mb-2">
          <TitleInput
            placeholder={AppConfig.PLACEHOLDERS.AddTitle}
            id="name"
            className="!border-none p-0 !placeholder:text-[#757575] !placeholder:text-[24px] !placeholder:font-medium "

            // error={errors.name}
            // value={values.name}
            // touched={touched.name}
            // onChange={handleChange("name")}
            // onBlur={handleBlur}
          />
        </div>
        <div className="">
          <TextArea
            placeholder={AppConfig.PLACEHOLDERS.WritePost}
            id="name"
            className="!border-none p-0 placeholder:text-[#757575] placeholder:text-sm "
            value={values.body}
            onChange={handleChange("body")}
            onBlur={handleBlur}
          />
        </div>

        <div className="mt-6 py-4 rounded mb-6 border border-[#EFEFEF] flex items-center justify-center w-full text-base text-[#757575]">
          Add 1 or 2 hashtags that represent your post
        </div>

        <div className="border-b border-[#D6D6D6] mb-6 flex justify-end w-full py-2">
          <span className="text-[#757575] font-medium">300 characters</span>
        </div>

        <div className="w-full flex items-center justify-between ">
          <div className="flex gap-2">
            <PaperClip />
            <PictureIcon />
          </div>
          <div className="max-w-max">
            {" "}
            <Button
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              type="submit"
              isLoading={postToCommunityLoading}
              className={`${!isValid ? "opacity-50" : ""} `}
              disabled={!isValid}
            >
              <span className="flex items-center gap-4">
                {" "}
                Post <Plus className="text-sm" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
