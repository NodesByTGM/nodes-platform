import React from "react";

export default function JobAndEventsCard({ data }) {
  return (
    <div className="flex gap-4 text-[#000000] font-normal text-sm border-dash rounded-[4px] p-4 ">
      <img
        className="bg-gray-400 rounded-[4px] h-[160px] w-[160px]"
        src={data.img}
        alt=""
      />

      <div className="flex flex-col gap-4">
        <h3 className="font-medium text-base">{data.title}</h3>
        <span className="">{data.description}</span>
        <span className="underline">See more</span>
      </div>
    </div>
  );
}
