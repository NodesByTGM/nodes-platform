import React from "react";
import { PiSuitcase } from "react-icons/pi";
import { TfiLocationPin } from "react-icons/tfi";
import { CiCalendar } from "react-icons/ci";
export default function Details({ details }) {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between gap-6">
          <div className="flex flex-col gap-6 rounded-[4px] border border-[#EFEFEF] bg-[#ffffff] p-4 text-[#212121] font-medium">
            <span className="text-base">Experience </span>
            <span className="text-[20px]">{details?.experience}</span>
          </div>

          <div className="flex-1 flex flex-col gap-6 rounded-[4px] border border-[#EFEFEF] bg-[#ffffff]  p-4 text-[#212121] font-medium">
            <span className="text-base">Skills </span>
            <div className="flex gap-6">
              {details?.skills?.map((skill, index) => (
                <div
                  key={index}
                  className="rounded-[100px] py-2 px-[27.75px] bg-[#FBFCE9]"
                >
                  <span className="font-normal text-base text-[#000000]">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-4 bg-[#ffffff] flex items-center justify-between border border-[#EFEFEF]">
          <div className="flex items-center gap-2">
            <span className="">
              <TfiLocationPin />
            </span>
            <span className="font-medium text-base">
              Lagos | Nigeria <span className="text-red-400">*</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="">
              <CiCalendar />
            </span>
            <span className="font-medium text-base">{details?.workRate}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="">
              <PiSuitcase />
            </span>
            <span className="font-medium text-base">{details?.jobType}</span>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-6 text-[#212121] rounded-[4px] bg-[#ffffff] border border-[#EFEFEF]">
          <span className="font-medium text-base ">Job description</span>
          <span className="font-notmel text-sm">{details?.description}</span>
        </div>
      </div>
    </div>
  );
}
