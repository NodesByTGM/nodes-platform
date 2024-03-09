import React from "react";

import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  flex?: boolean;
  error?: string;
  touched?: boolean;
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
  return (
    <div >
      {label ? (
        <div className="font-medium text-sm mb-1">
          {label}
          {required ? "*" : null}
        </div>
      ) : null}
      <div className="border-dash cursor-pointer flex flex-col gap-[10px] px-6 py-[53px] rounded-[5px] items-center justify-center">
        <span className="text-[#757575] font-normal text-base">
          Drag image here or browse your files{" "}
        </span>
        <span className="text-[#757575] font-normal text-base">
          Recommended image size: 00 x 00px
        </span>
      </div>
      <input
        value={value}
        onChange={onChange}
        className={`w-full hidden p-4 transition-all outline-none bg-transparent border rounded-[5px] 
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
