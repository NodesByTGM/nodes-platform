import React from "react";

export default function NotificationsNav({
  navs,
  setSelectedNav,
  selectedNav,
}) {
  return (
    <div>
      {" "}
      <div className="flex items-center  gap-[8px] overflow-x-auto  border-b border-[#F2F4F7]">
        {navs.map((nav) => (
          <div
            onClick={() => setSelectedNav(nav)}
            key={nav?.label}
            className={`${
              selectedNav?.label?.toLowerCase() == nav?.label?.toLowerCase()
                ? " text-customprimary "
                : " text-[#757575] "
            } flex cursor-pointer flex-col items-center justify-center text-nowrap    pt-2 font-semibold  `}
          >
            <div className="flex flex-col  ">
              <div className="flex gap-2 px-4">
                <span className="text-base font-medium ">{nav?.label}</span>
                {nav?.count && (
                  <div
                    className={`${
                      selectedNav?.label?.toLowerCase() ==
                      nav?.label?.toLowerCase()
                        ? "border-primary "
                        : "border-[#000000] "
                    } size-6 rounded-full bg-[#F2F4F7] flex items-center justify-center text-xs font-medium text-[#757575]`}
                  >
                    {nav.count}
                  </div>
                )}
              </div>
              <div
                className={`mt-2 w-full ${
                  selectedNav?.label?.toLowerCase() == nav?.label?.toLowerCase()
                    ? "h-[3px] rounded-t-[4px] bg-customprimary  "
                    : "h-[3px] rounded-t-[4px] bg-transparent "
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
