import React from "react";
import { PiSuitcase } from "react-icons/pi";
import { TfiLocationPin } from "react-icons/tfi";
import { CiCalendar } from "react-icons/ci";
import { formatDate } from "../../../utilities";

export default function Details({ details }) {
  return (
    <div>
      <pre className="text-blue-400 hidden">
        {JSON.stringify(details, null, 2)}
      </pre>
      <div className="flex flex-col gap-6">
        <div className="p-4 bg-[#ffffff] flex items-center justify-between border border-[#EFEFEF]">
          <div className="flex items-center gap-2">
            <span className="">
              <TfiLocationPin />
            </span>
            <span className="font-medium text-base">{details?.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="">
              <CiCalendar />
            </span>
            <span className="font-medium text-base">
              {formatDate(details?.dateTime)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="">
              <PiSuitcase />
            </span>
            <span className="font-medium text-base">
              {details?.paymentType}
            </span>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-6 text-[#212121] rounded-[4px] bg-[#ffffff] border border-[#EFEFEF]">
          <span className="font-medium text-base ">Other details</span>
          <span className="font-notmel text-sm">{details?.description}</span>
        </div>
      </div>
    </div>
  );
}
