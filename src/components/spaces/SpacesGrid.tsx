import React from "react";
import SpacesCard from "./SpacesCard";
export default function SpacesGrid({ title, data,  }) {
  return (
    <div>
      <h3 className="font-medium text-base text-[#212121] mb-6">{title}</h3>
      <div className="grid grid-cols-3 gap-6">
        {data?.map((item) => (
          <div key={item?.id} className="">
            <SpacesCard data={item}/>
          </div>
        ))}
      </div>
    </div>
  );
}
