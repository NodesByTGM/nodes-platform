import React from "react";

export default function Analytics({ details }) {
  const analytics = [
    {
      title: "No. of Clicks",
      metric: "20",
    },
    {
      title: "No. of Saves",
      metric: "20",
    },
    {
      title: "No. of Applicants",
      metric: details?.applicants?.length,
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 gap-6">
        {analytics.map((item, index) => (
          <div
            key={index}
            className="bg-[#ffffff] rounded border border-[#EFEFEF]  px-4 pt-4 pb-[34px]  flex flex-col gap-6 font-medium text-base text-[#212121]"
          >
            <p className="">
              {" "}
              <span className="">{item.title} </span>{" "}
              <span className="text-red-500">{`${
                index !== 2 ? "*" : ""
              }`}</span>
            </p>
            <span className="text-[40px]">{item.metric}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
