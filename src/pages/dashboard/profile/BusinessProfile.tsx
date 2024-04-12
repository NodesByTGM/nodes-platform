import React from "react";
import { useDashboardContext } from "../../../context/hooks";
import { BusinessProfileCard } from "../../../components";
export default function BusinessProfile() {
  const { user } = useDashboardContext();

  return (
    <div className="">
      {" "}
      <div className="mb-10 flex flex-col gap-2 border-b border-[#D6D6D6] pb-[24px]">
        {" "}
        <h3 className="font-semibold text-[#212121] text-[20px]">
          Business Profile{" "}
        </h3>
        <span className="text-[#212121] font-normal text-base">
          See what other people will see when they view your profile{" "}
        </span>
      </div>
      <div className="flex gap-x-8 h-full">
        <pre className="hidden">{JSON.stringify(user, null, 2)}</pre>

        <div className="max-h-max">
          <BusinessProfileCard />
        </div>
      </div>
    </div>
  );
}
