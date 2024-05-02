import React from "react";
import { MoreHorizontal } from "react-feather";
export default function NotificationItem({
  last = false,
  unread = false,
  active = false,
}: {
  last?: boolean;
  unread?: boolean;
  active?: boolean;
}) {
  return (
    <div
      className={`hover:bg-gray-50  cursor-pointer ${
        active ? "bg-[#D6DE211A]" : "bg-[#ffffff] "
      }  flex items-center gap-3 pl-6 w-full  `}
    >
      <div className=" relative">
        {unread ? (
          <div className="h-full absolute top-0 bottom-0 flex items-center left-[-14px] ">
            {" "}
            <div className="size-2 rounded-full bg-[#00B207]"></div>
          </div>
        ) : null}{" "}
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
