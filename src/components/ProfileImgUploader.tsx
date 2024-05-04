/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef, useEffect, MutableRefObject } from "react";
import { useUploadFileMutation } from "../api";
import { toast } from "react-toastify";
import { Loader,  DefaultAvatar } from "../components";
import { User } from "react-feather";
import AppConfig from "../utilities/config";

import { convertToBase64, checkFileSize } from "../utilities/common";

export default function ProfileImgUploader({ value, onChange }) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const [
    upload,
    {
      data: uploadResponse,
      isLoading: uploadFileLoading,
      isSuccess: uploadFileSuccess,
      error: uploadFileError,
      isError: isUploadError,
    },
  ] = useUploadFileMutation();

  const handleFileUpload = (e: any) => {
    const files = e.target.files;
    const file = files[0];
    if (!checkFileSize(file)) {
      toast.error(
        `File selected exceeded file limit size of ${AppConfig.FILE_SIZE_LIMIT}mb`
      );
      return;
    }
    setSelectedFile(file);
  };
  const handleFileConversion = async () => {
    if (selectedFile) {
      const res = await convertToBase64(selectedFile);
      let binary = "";
      // console.log(res, null, 2);
      if (res) {
        binary = String(res);
        // const binaryBlob = atob(binary);
        upload({ file: binary });
      }
    }
  };

  useEffect(() => {
    handleFileConversion();
  }, [selectedFile]);

  useEffect(() => {
    if (uploadFileSuccess) {
      // console.log("Data: " + JSON.stringify(uploadResponse, null, 2))

      onChange(uploadResponse?.result);
    }
  }, [uploadFileSuccess, uploadResponse?.result?.url]);

  useEffect(() => {
    if (isUploadError) {
      // toast.error(`File selected exceeded file limit size of ${AppConfig.FILE_SIZE_LIMIT}mb`);
      // console.log(JSON.stringify(uploadFileError?.message, null, 2))
      toast.error(uploadFileError?.message?.message);
    }
  }, [uploadFileError, isUploadError]);

  return (
    <div className="flex items-center gap-4">
      <div
        className={`${uploadFileLoading ? "animate-pulse" : ""} size-[100px] `}
      >
        {value && value?.url?.length > 0 ? (
          <img
            className=" h-full w-full rounded-full"
            src={value?.url}
            alt=""
          />
        ) : (
          // <img
          //   className=" h-full w-full rounded-full"
          //   src="/img/ProfilePlaceholder.png"
          //   alt=""
          // />
          <DefaultAvatar />
        )}

        <input
          ref={inputRef}
          multiple={false}
          type="file"
          accept=".png, .jpg"
          // value={value}
          onChange={handleFileUpload}
          className={`w-full hidden  p-4 transition-all outline-none bg-transparent border rounded-[5px] 
        border-grey-dark focus:border-primary disabled:text-placeholder 
        placeholder:text-placeholder text-ellipsis text-sm text-black`}
        />
      </div>
      <span
        onClick={() => inputRef.current?.click()}
        className="text-primary font-normal text-base cursor-pointer"
      >
        {uploadFileLoading ? (
          <div className="">
            <Loader className="size-6" />
          </div>
        ) : (
          "Replace"
        )}
      </span>
    </div>
  );
}
