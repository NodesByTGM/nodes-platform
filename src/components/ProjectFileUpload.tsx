/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import { useUploadFileMutation } from "../api";
// import { checkFileSize } from "../utilities/common";
// import AppConfig from "../utilities/config";
import { mainClient } from "../utilities/client";
import AppConfig from "../utilities/config";

// import { toast } from "react-toastify";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  flex?: boolean;
  error?: string;
  touched?: boolean;
  onChange: (e) => void;
}
export default function ProjectFileUpload({
  className = "",
  value = "",
  label = "",
  description = "",
  touched = false,
  error,
  required,
  onChange,
  ...props
}: InputProps) {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [
    upload,
    { isLoading: uploadFileLoading, isSuccess: uploadFileSuccess },
  ] = useUploadFileMutation();

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    upload(formData);

    // if (!target.files || target.files.length === 0) {

    //   return;
    // }

    // console.log(`beforeselectedFile: ` + JSON.stringify(files, null, 2));

    // setSelectedFile(files[0]);
  };

  useEffect(() => {
    // console.log(`selectedFile: ` + JSON.stringify(selectedFile, null, 2));
   
    // upload(selectedFile);
  }, [selectedFile, upload]);

  useEffect(() => {
    onChange(selectedFile);
  }, [uploadFileSuccess]);

  // const uploadClient = () => {
  //   mainClient
  //     .post(AppConfig.API_ENDPOINTS.Uploads.UploadFile, selectedFile)
  //     .then((r) => {
  //       if (r.status === 200) {
  //         console.log(JSON.stringify(r, null, 2));
  //       }
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };
  return (
    <div>
      {label ? (
        <div className="font-medium text-sm mb-1">
          {label}
          {required ? "*" : null}
        </div>
      ) : null}
      <div
        onClick={() => inputRef.current?.click()}
        className="border-dash cursor-pointer flex flex-col gap-[10px] px-6 py-[53px] rounded-[5px] items-center justify-center"
      >
        {uploadFileLoading ? (
          <span className="">Uploading</span>
        ) : (
          <div className="flex flex-col gap-[10px] ">
            <span className="text-[#757575] font-normal text-base">
              Drag image here or browse your files{" "}
            </span>
            <span className="text-[#757575] font-normal text-base">
              Recommended image size: 00 x 00px
            </span>
          </div>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept=".png, .jpg"
        // value={value}
        onChange={handleFileUpload}
        className={`w-full hidden  p-4 transition-all outline-none bg-transparent border rounded-[5px] 
        border-grey-dark focus:border-primary disabled:text-placeholder 
        placeholder:text-placeholder text-ellipsis text-sm text-black ${className} `}
        {...props}
      />
      {description ? <div className="my-2 text-sm">{description}</div> : null}
      {touched && error ? (
        <div className="my-2 text-sm text-red-500">{error}</div>
      ) : null}
    </div>
  );
}
