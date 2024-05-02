import React from "react";
import { MoreHorizontal } from "react-feather";
export default function NotificationItem({
  last = false,
  unread = false,
}: {
  last?: boolean;
  unread?: boolean;
}) {
  return (
    <div
      className={`cursor-pointer ${
        unread ? "bg-[#D6DE211A]" : "bg-[#ffffff]"
      }  flex items-center gap-3 pl-6 w-full  `}
    >
      <div className="">
        {" "}
        <div className="size-[48px] bg-[#E8E8E8] rounded-full flex items-center justify-center text-[#757575]">
          AB
        </div>
      </div>
      <div
        className={`${
          !last ? "border-[#E2E8F0]" : "border-transparent"
        } border-b pr-6 flex items-center gap-3 pt-6 pb-8`}
      >
        {" "}
        <div className="flex-1 text-primary text-sm font-normal">
          <span className="!font-medium">Ashwin Bose</span> just gave your
          comment on{" "}
          <span className="font-medium">insert name of article/post.</span>
        </div>
        <div className="flex flex-col items-center justify-cennter">
          <span className="text-xs font-medium text-[#757575]">2m</span>
          <MoreHorizontal className="text-[#1E293B]" />
        </div>
      </div>
    </div>
  );
}
