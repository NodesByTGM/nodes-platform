import React from "react";

export default function AnalyticsComponent({ item }) {
  return (
    <div>
      <div className="bg-[#ffffff] rounded border border-[#EFEFEF]  px-4 pt-4 pb-[34px]  flex flex-col gap-6 font-medium text-base text-[#212121]">
        <p className="">
          {" "}
          <span className="">{item?.title} </span>{" "}
        </p>
        <span className="text-[40px]">{item?.metric}</span>
      </div>
    </div>
  );
}
