import React from "react";
import { Button } from "../index";
import { CiLocationOn } from "react-icons/ci";
import { GoLink } from "react-icons/go";
import { Interaction } from "../../components";
export default function Individual() {
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
        <div className="mb-[51px] font-medium text-base flex justify-center gap-6">
          <div className="flex items-center gap-[4px]">
            <CiLocationOn className="size-[20px]" />

            <span>Location</span>
          </div>
          <div className="flex items-center gap-[4px]">
            <GoLink className="size-[20px]" />

            <span>Add website</span>
          </div>
        </div>

        <div className="mb-10">
          <Interaction data={bio} />
        </div>
        <Button>
          <span className="text-base font-medium">Edit Your Profile</span>
        </Button>
      </div>
    </div>
  );
}
