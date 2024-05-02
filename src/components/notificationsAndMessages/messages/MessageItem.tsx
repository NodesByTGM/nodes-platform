import React from "react";
export default function MessageItem({
  last = false,
  unread = false,
  active = false,
}: {
  last?: boolean;
  unread?: boolean;
  active?: boolean;
}) {
  return (
    <div className={`hover:bg-gray-50 cursor-pointer ${active ? "!bg-[#D6DE211A]" : "bg-[#ffffff]"}`}>
      {" "}
      <div
        className={`${
          !last ? "border-[#E2E8F0]" : "border-transparent"
        } border-b   flex items-start gap-3 pl-6 w-full pt-6 pb-8 pr-6`}
      >
        <div className="">
          {" "}
          <div className="size-[48px] bg-[#E8E8E8] rounded-full flex items-center justify-center text-[#757575]">
            AB
          </div>
        </div>
        <div className={`  pr-6 flex items-center gap-3`}>
          {" "}
          <div className="flex-1   text-primary text-sm font-normal">
            <div className="flex flex-col">
              {" "}
              <span className="font-medium text-base">Cameron Williamson</span>
              <span className="font-normal text-sm truncate h-[28x] w-[198px] text-nowrap">
                Not too bad, just trying to catch up on some work. How about
                you?
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[13px] ">
          <span className="text-xs font-medium text-[#757575]">5s</span>
          {unread ? (
            <div className="rounded-full size-6 flex items-center justify-center bg-[#D6DE21] text-[#ffffff]">
              1
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
