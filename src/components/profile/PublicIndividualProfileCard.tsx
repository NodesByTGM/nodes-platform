import React from "react";
import PublicIndividualId from "./PublicIndividualId";

import { Link } from "react-router-dom";
import { ButtonOutline } from "../index";

import { Interaction } from "../../components";
export default function PublicIndividualProfileCard({profileType, profileData}) {

  const bio = {
    id: "1",
    title: "Your headline and bio goes here",
    text: " Share more about yourself and what you hope to accomplish",
    img: null,
  };
  return (
    <div className="profileLeftCard max-h-max flex text-[#212121]">
      <div className="w-full profile-card-shadow p-6 pt-10 flex flex-col justify-center items-center bg-white rounded-lg">
          <PublicIndividualId profileData={profileData} />
       

        {profileType?.toLowerCase() == "pro" ? (
          <div className="flex items-center justify-center gap-6 mb-10">
            <span className="text-base font-normal text-[#000000]">
              0 Followers
            </span>
            <span className="text-base font-normal text-[#000000]">
              0 Following
            </span>
          </div>
        ) : null}

        <div className="mb-10 w-full">
          <Interaction
            data={bio}
            headline={profileData?.headline}
            bio={profileData?.bio}
          />
        </div>
        <div
          className={`${
            profileType?.toLowerCase() == "standard"
              ? "grid-cols-1"
              : "grid-cols-2"
          } w-full grid  gap-6 `}
        >
          {profileType?.toLowerCase() !== "standard" && (
            <Link
              to={'#'}
              className="w-full"
            >
              <ButtonOutline>Share Profile</ButtonOutline>
            </Link>
          )}
         
        </div>
      </div>
    </div>
  );
}
