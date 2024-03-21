import React from "react";

export default function SectionNavs({ navs, setSelectedNav, selectedNav }) {
  return (
    <div>
      {" "}
      <div className="flex items-center  gap-[8px] overflow-x-auto  ">
        {navs.map((nav) => (
          <div
            onClick={() => setSelectedNav(nav)}
            key={nav?.label}
            className={`${
              selectedNav?.label?.toLowerCase() == nav?.label?.toLowerCase()
                ? "border-primary text-primary "
                : "border-transparent text-[#727272] "
            } flex cursor-pointer flex-col items-center justify-center text-nowrap border-b-[2px] pb-2   pt-2 px-4 font-semibold  `}
          >
            <span className="text-base font-medium ">{nav?.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
