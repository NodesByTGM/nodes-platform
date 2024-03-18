import React from "react";
import { BookMarkIcon, Button } from "../../components";
import { LiaTimesSolid } from "react-icons/lia";
import { TfiLocationPin } from "react-icons/tfi";
import { CiCalendar } from "react-icons/ci";
import { PiSuitcase } from "react-icons/pi";
export default function JobPost({closeModal}) {
  return (
    <div className={`flex flex-col gap-[48px] text-[#000000]`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-[#D9D9D9] rounded-[2px] mr-[3px] size-6"></div>
          <span className="font-medium text-[20px]">Name of company</span>
          <span className="mx-4">
            <svg
              width="3"
              height="19"
              viewBox="0 0 3 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.98 18.86H0.98V0.639999H2.98V18.86Z" fill="black" />
            </svg>
          </span>
          <span className="font-normal text-[20px]">Posted 9 hours ago</span>
        </div>
        <div onClick={() => closeModal()} className="cursor-pointer text-[#000000] text-base">
          {" "}
          <LiaTimesSolid />
        </div>
      </div>
      <div className="flex  items-center justify-between">
        <span className="font-medium text-[24px]">Job title</span>

        <div className="flex items-center justify-between gap-4">
          <BookMarkIcon />
          <Button className={"max-w-max text-white"}>Apply</Button>
        </div>
      </div>
      <span className="font-medium text-[20px]">$10-1k/hr</span>
      <div className="p-4 bg-[#D6DE211A] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="">
            <TfiLocationPin />
          </span>
          <span className="font-medium text-base">Lagos | Nigeria</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="">
            <CiCalendar />
          </span>
          <span className="font-medium text-base">20 hrs/wk</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="">
            <PiSuitcase />
          </span>
          <span className="font-medium text-base">Contract</span>
        </div>
      </div>

      <div className="flex justify-between gap-6">
        <div className="flex flex-col gap-6 rounded-[4px] border border-[#EFEFEF] p-4 text-[#212121] font-medium">
          <span className="text-base">Experience </span>
          <span className="text-[20px]">1 - 3 years</span>
        </div>
        <div className="flex flex-col gap-6 rounded-[4px] border border-[#EFEFEF] p-4 text-[#212121] font-medium">
          <span className="text-base">Rate </span>
          <span className="text-[20px]">$10-1k/hr</span>
        </div>
        <div className="flex-1 flex flex-col gap-6 rounded-[4px] border border-[#EFEFEF] p-4 text-[#212121] font-medium">
          <span className="text-base">Skills </span>
          <div className="flex gap-6">
            <div className="rounded-[100px] py-2 px-[27.75px] bg-[#FBFCE9]">
              <span className="font-normal text-base text-[#000000]">
                Skill One
              </span>
            </div>
            <div className="rounded-[100px] py-2 px-[27.75px] bg-[#FBFCE9]">
              <span className="font-normal text-base text-[#000000]">
                Skill Two
              </span>
            </div>
            <div className="rounded-[100px] py-2 px-[27.75px] bg-[#FBFCE9]">
              <span className="font-normal text-base text-[#000000]">
                Skill Three
              </span>
            </div>
            <div className="rounded-[100px] py-2 px-[27.75px] bg-[#FBFCE9]">
              <span className="font-normal text-base text-[#000000]">
                Skill Four
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-6 text-[#212121] rounded-[4px] border border-[#EFEFEF]">
        <span className="font-medium text-base ">Job description</span>
        <span className="font-notmel text-sm">
          Lorem ipsum dolor sit amet consectetur. Tincidunt sit mattis
          pellentesque imperdiet etiam curabitur. Sit vitae vel et justo egestas
          sit enim turpis. Blandit in ullamcorper non vel volutpat. Quam
          condimentum faucibus auctor mattis sed consectetur viverra.
        </span>
        <span className="font-notmel text-sm">
          Lorem ipsum dolor sit amet consectetur. Tincidunt sit mattis
          pellentesque imperdiet etiam curabitur. Sit vitae vel et justo egestas
          sit enim turpis. Blandit in ullamcorper non vel volutpat. Quam
          condimentum faucibus auctor mattis sed consectetur viverra.
        </span>
        <span className="font-notmel text-sm">
          Lorem ipsum dolor sit amet consectetur. Tincidunt sit mattis
          pellentesque imperdiet etiam curabitur. Sit vitae vel et justo egestas
          sit enim turpis. Blandit in ullamcorper non vel volutpat. Quam
          condimentum faucibus auctor mattis sed consectetur viverra.
        </span>
      </div>
    </div>
  );
}
