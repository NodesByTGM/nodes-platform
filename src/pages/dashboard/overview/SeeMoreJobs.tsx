import React from "react";
import { useParams } from "react-router-dom";
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
  const { type } = useParams();
  return (
    <div>
      <Back className={`mb-[64px]`} link={"/dashboard"} />
      <div className="flex items-start justify-between mb-10">
        <h3 className="fonnt-medium text-[20px] text-[#212121]">
          {type?.toLowerCase() == "business" ? (
            <span className="">Manage your job postings</span>
          ) : (
            <span className="">Hi, Jane! Welcome to the Nodes Job center</span>
          )}
        </h3>

        {type?.toLowerCase() == "business" ? (
          <ButtonOutline className="max-w-max">
            Create a new job posting
          </ButtonOutline>
        ) : (
          <ButtonOutline className="max-w-max">Saved</ButtonOutline>
        )}
      </div>

      <div className="flex justify-between items-center mb-[64px]">
        <div
          className={`${
            type?.toLowerCase() == "business"
              ? "w-full max-w-[455px]"
              : "max-w-[240px] w-full"
          } `}
        >
          <SearchComponent padding="px-4 py-[13px]" />
        </div>

        {type?.toLowerCase() !== "business" ? (
          <div className="flex justify-end gap-[32px]">
            <BorderlessSelect label="Role" options={selectOptions} />
            <BorderlessSelect label="Skills" options={selectOptions} />

            <BorderlessSelect label="Rate" options={selectOptions} />

            <BorderlessSelect label="Working hours" options={selectOptions} />

            <BorderlessSelect label="Job type" options={selectOptions} />
          </div>
        ) : null}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <JobItem isBusiness={type?.toLowerCase() == "business"} />
        <JobItem isBusiness={type?.toLowerCase() == "business"} />
        <JobItem isBusiness={type?.toLowerCase() == "business"} />
        <JobItem isBusiness={type?.toLowerCase() == "business"} />
        <JobItem isBusiness={type?.toLowerCase() == "business"} />
        <JobItem isBusiness={type?.toLowerCase() == "business"} />
        <JobItem isBusiness={type?.toLowerCase() == "business"} />
        <JobItem isBusiness={type?.toLowerCase() == "business"} />
        <JobItem isBusiness={type?.toLowerCase() == "business"} />
      </div>
    </div>
  );
}
