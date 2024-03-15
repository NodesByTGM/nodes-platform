import React, { useContext } from "react";
import { CiLocationOn } from "react-icons/ci";
import { GoLink } from "react-icons/go";
import { ProfileContext } from "../../context/profile";

export default function IndividualId() {
  const { profileData, user } = useContext(ProfileContext);

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="size-[100px] ">
        <img
          className=" h-full w-full"
          src="/img/ProfilePlaceholder.png"
          alt=""
        />
      </div>
      <span className="font-medium text-[24px] ">
        {" "}
        {`${profileData?.user?.name ? profileData?.user?.name : user?.name}`}
      </span>
      <span className="font-normal text-base text-[#757575] ">
        {profileData?.user?.age ? "" : "Height and Age"}
      </span>
      <div className="mb-6 font-medium text-base text-[#757575] flex justify-center gap-6">
        <div className="flex items-center gap-[4px]">
          <CiLocationOn className="size-[20px]" />

          <span>
            {" "}
            {profileData?.user?.location
              ? profileData?.user?.location
              : "Add Location"}{" "}
          </span>
        </div>
        <div className="flex items-center gap-[4px]">
          <GoLink className="size-[20px]" />

          <span>
            {" "}
            {profileData?.user?.location
              ? profileData?.user?.website
              : "Add website"}{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
