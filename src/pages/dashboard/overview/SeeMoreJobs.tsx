import React from "react";
import {
  Back,
  ButtonOutline,
  SearchComponent,
  BorderlessSelect,
  JobItem,
} from "../../../components";
const selectOptions = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 2" },
];
export default function SeeMoreJobs() {
  return (
    <div>
      <Back className={`mb-[64px]`} link={"/dashboard"} />
      <div className="flex items-start justify-between mb-10">
        <h3 className="fonnt-medium text-[20px] text-[#212121]">
          Hi, Jane! Welcome to the Nodes Job center
        </h3>

        <ButtonOutline className="max-w-max">Saved</ButtonOutline>
      </div>

      <div className="flex justify-between items-center mb-[64px]">
        <div className="max-w-[240px]">
          <SearchComponent padding="px-4 py-[13px]" />
        </div>

        <div className="flex justify-end gap-[32px]">
          <BorderlessSelect label="Role" options={selectOptions} />
          <BorderlessSelect label="Skills" options={selectOptions} />

          <BorderlessSelect label="Rate" options={selectOptions} />

          <BorderlessSelect label="Working hours" options={selectOptions} />

          <BorderlessSelect label="Job type" options={selectOptions} />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <JobItem />
        <JobItem />
        <JobItem />
      </div>
    </div>
  );
}
