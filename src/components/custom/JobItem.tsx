/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { CiCalendar } from "react-icons/ci";
import { BookMarkIcon, ItemDeleteIcon, Modal, JobPost } from "../../components";
export default function JobItem({
  className,
  isBusiness = false,
  data
}: {
  className?: string;
  isBusiness?: boolean;
  data?: any;
}) {
  const [viewJobOpen, setViewjobOpen] = useState(false);

  return (
    <div
      className={`${className} bg-[#ffffff] text-[#000000] w-full p-6 rounded-lg border border-[#EFEFEF] flex flex-col gap-8`}
    >
      <div className="flex items-start justify-between">
        <div className="">
          <img src="/img/SmallCheck.png" alt="" className="size-[72px]" />
        </div>

        {isBusiness ? (
          <div className="">
            <ItemDeleteIcon />
          </div>
        ) : (
          <div className="">
            <BookMarkIcon />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 text-[#000000] text-base">
        <span className="font-medium">{data?.description ? data.description : 'Job description/title'}</span>
        <span className="font-normal">{data?.name ? data.name : 'Name of company'}</span>
      </div>

      <span className="font-medium text-[18px]">{data?.payRate ? data.payRate : '$10-1k/hr'}</span>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="">
            <CiCalendar />
          </span>
          <span className="fonnt-normal text-base">{data?.workRate ? data.workRate : '20 hrs/wk'}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="">
            <TfiLocationPin />
          </span>
          <span className="font-normal text-base">{data?.location ? data.location : 'Lagos | Nigeria'}</span>
        </div>
      </div>

      {isBusiness ? (
        <div className="flex items-center justify-between">
          <div className="flex justify-end text-primary font-normal text-base cursor-pointer">
            22 Participants
          </div>
          <div className="flex justify-end text-primary font-medium text-sm cursor-pointer">
            View details
          </div>
        </div>
      ) : (
        <div
          onClick={() => setViewjobOpen(true)}
          className="flex justify-end text-primary font-medium text-sm cursor-pointer"
        >
          View job
        </div>
      )}

      <Modal
        sizeClass="sm:max-w-[1020px]"
        open={viewJobOpen}
        setOpen={setViewjobOpen}
      >
        <div className="">
          <JobPost details={data} closeModal={() => setViewjobOpen(false)} />
        </div>
      </Modal>
    </div>
  );
}
