import React from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { CiCalendar } from "react-icons/ci";
import { BookMarkIcon } from "../../components";
export default function JobItem({className}: {className?: string}) {
  return (
    <div
      className={`${className} bg-[#ffffff] text-[#000000] w-full p-6 rounded-lg border border-[#EFEFEF] flex flex-col gap-8`}
    >
      <div className="flex items-start justify-between">
        <div className="">
          <img src="/img/SmallCheck.png" alt="" className="size-[72px]" />
         
        </div>
        <div className="">
          <BookMarkIcon />
        </div>
      </div>

      <div className="flex flex-col gap-4 text-[#000000] text-base">
        <span className="font-medium">Job description/title</span>
        <span className="font-normal">Name of company</span>
      </div>

      <span className="font-medium text-[18px]">$10-1k/hr</span>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="">
            <CiCalendar />
          </span>
          <span className="fonnt-normal text-base">20 hrs/wk</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="">
            <TfiLocationPin />
          </span>
          <span className="fonnt-normal text-base">Lagos | Nigeria</span>
        </div>
      </div>

      <div className="flex justify-end text-primary font-medium text-sm cursor-pointer">
        View job
      </div>
    </div>
  );
}
