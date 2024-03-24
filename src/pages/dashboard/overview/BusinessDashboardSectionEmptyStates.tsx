import React from "react";

const Header = ({ title, subTitle }) => {
  return (
    <div className="w-full flex justify-between ">
      <div className="flex flex-col text-[#212121] gap-2">
        <h3 className="font-medium text-[20px]">{title}</h3>
        <span className="font-normal text-[18px]">{subTitle}</span>
      </div>
    </div>
  );
};

export default function BusinessDashboardSectionEmptyStates({
  user,
  addJobOrEvents,
  type,
}) {
  return (
    <div>
      <div className="mb-6">
        {" "}
        <Header
          title={`${type == "job" ? "Jobs by you" : "Exclusive events"}`}
          subTitle={`${
            type == "job"
              ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          }`}
        />
      </div>
      <div className="mx-auto max-w-[239px] flex flex-col justify-center items-center ">
        <h3 className="capitalize text-center font-medium text-base text-[#212121]">
          Hi, {user?.name}
        </h3>
        <span className="mt-8  text-center font-normal text-base text-[#212121]">
          Nothing to see here yet, Create{" "}
          {`${type == "job" ? "a job post" : "an event"}`} to get started.{" "}
        </span>

        <h3
          onClick={() => addJobOrEvents()}
          className="cursor-pointer mt-10 text-primary font-medium text-base"
        >
          {`Create ${type == "job" ? "job post" : "an event"}`}
        </h3>
      </div>

      <div className=" w-full">
        <img src="/img/EmptyJobAndEventSection.png" alt="" className="w-full" />
      </div>
    </div>
  );
}
