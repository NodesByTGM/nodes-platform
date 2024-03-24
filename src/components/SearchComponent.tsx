import React from "react";

export default function SearchComponent({
  padding = "py-[9px] pl-4",
  placeholder = "Search",
}: {
  padding?: string;
  placeholder?: string;
}) {
  return (
    <div className={"w-full  relative"}>
      <div className="w-full relative">
        <input
          type="text"
          placeholder={placeholder}
          className={`${padding} ring-0 focus:border-primary outline-none   w-full border text-base  rounded-[5px] border-[#D6D6D6] placeholder:text-[#757575]`}
        />
      </div>{" "}
    </div>
  );
}
