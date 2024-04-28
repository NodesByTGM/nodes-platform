/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import PeopleCardFieldPill from "./PeopleCardFieldPill";
import CommunityCardDescription from "./CommunityCardDescription";
import { subscriptionType } from "../../utilities/constants";
// import { SkillsSection } from "../landingPage";
type ICommunityPeopleCard = {
  isConnected?: boolean;
  data?: any;
};
export default function CommunityPeopleCard({
  data,
  isConnected = false,
}: ICommunityPeopleCard) {
  return (
    <div className="p-6 w-full h-full flex flex-col gap-6 border border-[#EFEFEF] rounded-lg      ">
      <div className="h-[192px] bg-secondary rounded"></div>
      <div className="flex gap-2 items-center text-primary">
        <span className=" font-medium text-base">{data?.name}</span>
        <div className="size-1 bg-[#085A55] rounded-full"></div>
        <span className="font-normal text-xs">
          {subscriptionType[data?.type]} User
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {data?.skills?.map((skill, index) => (
          <div className="">
            {index < 4 ? (
              <div key={skill + index} className="max-w-max">
                <PeopleCardFieldPill text={skill} />
              </div>
            ) : null}
          </div>
        ))}

        {data?.skills?.length == 0 ? (
          <PeopleCardFieldPill text={"No skills specified"} />
        ) : null}
      </div>

      <div className="mt-auto">
        {" "}
        <CommunityCardDescription
          title={data?.headline ? data?.headline : "--"}
          description={data?.bio ? data?.bio : "--"}
        />
      </div>

      <div className=" flex items-center justify-between gap-4 text-customprimary font-medium text-sm">
        <span className="">View profile</span>
        {isConnected ? (
          <span className="">Message</span>
        ) : (
          <span className="">Connect</span>
        )}
      </div>
    </div>
  );
}
