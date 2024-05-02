import React from "react";

export default function ItemLoader() {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="animate-pulse size-[48px] bg-gray-100 rounded-full "></div>

        <div className="flex-1">
          {" "}
          <div className="animate-pulse  flex flex-col gap-3 w-full">
            <div className="w-full bg-gray-100 h-3"> </div>
            <div className="w-full bg-gray-100 h-3"> </div>
          </div>
        </div>
      </div>
    </div>
  );
}


