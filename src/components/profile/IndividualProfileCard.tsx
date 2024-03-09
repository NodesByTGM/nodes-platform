import React, { useContext } from "react";
import AppConfig from "../../utilities/config";
import { ProfileContext } from "../../context/profile";

import { Link } from "react-router-dom";
import { Button } from "../index";
import { CiLocationOn } from "react-icons/ci";
import { GoLink } from "react-icons/go";
import { Interaction } from "../../components";
export default function Individual() {
  const { profileType } = useContext(ProfileContext);

  const bio = {
    id: "1",
    title: "Your headline and bio goes her",
    text: " Share more about yourself and what you hope to accomplish",
    img: null,
  };
  return (
    <div className="w-[400px] max-h-max flex text-[#212121]">
      <div className="profile-card-shadow p-6 pt-10 flex flex-col justify-center items-center bg-white rounded-lg">
        <div className="size-[100px] mb-6">
          <img
            className=" h-full w-full"
            src="/img/ProfilePlaceholder.png"
            alt=""
          />
        </div>
        <span className="font-medium text-[24px] mb-6">Jane Doe</span>
        <span className="font-normal text-base text-[#757575] mb-6">
          Height and Age
        </span>
        <div className="mb-[24px] font-medium text-base text-[#757575] flex justify-center gap-6">
          <div className="flex items-center gap-[4px]">
            <CiLocationOn className="size-[20px]" />

            <span>Add Location</span>
          </div>
          <div className="flex items-center gap-[4px]">
            <GoLink className="size-[20px]" />

            <span>Add website</span>
          </div>
        </div>

        {profileType.toLowerCase() == "talent" ? (
          <div className="flex items-center justify-center gap-6 mb-10">
            <span className="text-base font-normal text-[#000000]">
              26 Followers
            </span>
            <span className="text-base font-normal text-[#000000]">
              32 Following
            </span>
          </div>
        ) : null}

        <div className="mb-10">
          <Interaction data={bio} />
        </div>
        <Link
          className="w-full"
          to={AppConfig.PATHS.Dashboard.Profile.EditProfile}
        >
          <Button>
            <span className="text-base font-medium">Edit Your Profile</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
