import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TrendingItem, Breadcrumbs, LabeledSelect } from "../../../components";
// import AppConfig from "../../../utilities/config";

export default function ViewAll() {
  const navigate = useNavigate();
  const [links] = useState([
    {
      id: 1,
      title: "Dashboard",
      url: "/dashboard",
    },
    {
      id: 2,
      title: "Top Movies",
      url: "#",
    },
  ]);

  const [options] = useState([
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 2" },
  ]);

  return (
    <div className="main-padding">
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
          <LabeledSelect
            onChange={() => {}}
            label={"FILTER BY"}
            options={options}
          />
          <LabeledSelect
            onChange={() => {}}
            label={"SORT BY"}
            options={options}
          />
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-3 gap-6">
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <div
                className="cursor-pointer"
                onClick={() => navigate(`${"/dashboard/view-detail/" + index}`)}
                key={index}
              >
                <TrendingItem />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
