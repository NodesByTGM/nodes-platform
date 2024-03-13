import React from "react";
import { ActionIcon } from "../components";

export default function AddedProject({ data }) {
  return (
    <div className="flex gap-4 px-6 py-[24.5px] rounded-lg bg-[#F2F3F2] ">
      <div className="h-[96px] w-[200px] relative">
        <img className="h-full w-full rounded-[5px]" src={data.img} alt="" />
      </div>
      <div className="flex flex-1 flex-col gap-[10px]">
        <h3 className="text-[#000000] text-base font-medium">
          Name of project
        </h3>

        <div className="flex gap-4 items-start">
          <span className="flex-1 text-sm font-normal text-[#000000]">
            Lorem ipsum dolor sit amet consectetur. Cum amet id lectus viverra
            faucibus. Arcu eget hendrerit ut dictumst id. Lorem ipsum dolor sit
            amet consectetur. Cum amet id lec...
          </span>
          <div className="ml-4 grid grid-cols-2 gap-4">
            <div>
              <ActionIcon edit />
            </div>
            <div>
              {" "}
              <ActionIcon erase />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
