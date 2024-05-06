import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { GoLink } from "react-icons/go";
import { DefaultAvatar } from "../../components";
export default function PublicIndividualId({ profileData }) {
  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="size-[100px] ">
        {profileData?.avatar?.url ? (
          <img
            className=" h-full w-full"
            src={profileData?.avatar?.url}
            alt=""
          />
        ) : (
          <DefaultAvatar />
        )}
      </div>
      <span className="font-medium text-[24px] capitalize">
        {" "}
        {`${profileData?.name ? profileData?.name : "--"}`}
      </span>
      <div className="flex gap-4 font-normal text-base text-[#757575] ">
        <span className="">
          {" "}
          {profileData?.height ? profileData?.height + " cm" : "-"}
        </span>{" "}
        <span className="">
          {" "}
          {profileData?.age ? profileData?.age + " years" : "-"}
        </span>
      </div>
      <div className="mb-6 font-medium text-base text-[#757575] flex justify-center gap-6">
        <div className="flex items-center gap-[4px]">
          <CiLocationOn className="size-[20px]" />

          <span> {profileData?.location ? profileData?.location : "-"} </span>
        </div>
        <div className="flex items-center gap-[4px]">
          <GoLink className="size-[20px]" />

          <span> {profileData?.website ? profileData?.website : "-"} </span>
        </div>
      </div>
    </div>
  );
}
