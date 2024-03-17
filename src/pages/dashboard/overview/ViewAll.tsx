import React, { useState } from "react";
import { TrendingItem, Breadcrumbs, LabeledSelect } from "../../../components";

export default function ViewAll() {
  const [links] = useState([
    {
      id: 1,
      title: "Dashboard",
      url: "/",
    },
    {
      id: 2,
      title: "Top Movies",
      url: "/",
    },
  ]);

  const [options] = useState([
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 2" },
  ]);
  return (
    <div>
      <div className="mb-[48px]">
        <Breadcrumbs links={links} />
      </div>
      <div className="mb-[64px]">
        <div className="relative h-[160px] w-full rounded-lg flex items-center justify-center">
          <span className="z-20 text-[24px] font-medium text-[#ffffff]">
            Hidden Gems
          </span>
          <img
            src="/img/ProjectThumbnailSample.png"
            alt=""
            className="size-full absolute rounded-lg"
          />
          <div className="size-full absolute bg-[#00000080] rounded-lg"></div>
        </div>
      </div>
      <div className="mb-[64px]">
        <div className="flex justify-between border-b border-[#D6D6D6] pb-6">
          <LabeledSelect label={"FILTER BY"} options={options} />
          <LabeledSelect label={"SORT BY"} options={options} />
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-3 gap-6">
          <TrendingItem />
          <TrendingItem />
          <TrendingItem />
          <TrendingItem />
          <TrendingItem />
          <TrendingItem />
          <TrendingItem />
          <TrendingItem />
          <TrendingItem />
        </div>
      </div>
    </div>
  );
}
