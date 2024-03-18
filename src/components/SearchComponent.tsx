import React from "react";

export default function SearchComponent({ padding = "py-[9px] pl-4" }) {
  return (
    <div className={"w-full"}>
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Search"
          className={`${padding} ring-0 focus:border-primary outline-none   w-full border text-base  rounded-[5px] border-[#D6D6D6] placeholder:text-[#757575]`}
        />
      </div>{" "}
    </div>
  );
}
