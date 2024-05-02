import React from "react";
import { MoreHorizontal } from "react-feather";

export default function MessagesHeader() {
  return (
    <div className="flex gap-[10px] messageMainPadding pt-[34px] pb-[26px] border-b border-[#E3E8E7]">
      <div className="max-w-max max-h-max">
        <img
          src="/img/placeholder/MessageHeaderImg.svg"
          alt=""
          className="rounded-full size-12"
        />
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-[3px] w-full">
          <span className="font-semibold text-[20px] text-[#171C1B]">
            Robert Fox
          </span>
          <div className="flex items-center gap-1">
            <div className="size-2 rounded-full bg-[#00B207]"></div>
            <span className="font-normal text-base text-[#465352]">
              Active Now
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center border border-[#E3E8E7] rounded-full size-[52px] cursor-pointer">
        <div className="">
          <MoreHorizontal className="text-[#ACB9B8]" />
        </div>
      </div>
    </div>
  );
}
