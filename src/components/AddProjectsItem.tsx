import React from "react";
import { FaTimes } from "react-icons/fa";
export default function AddProjectsItem({ data }) {
  return (
    <div className="h-40 relative">
      <img className="h-full w-full rounded-[5px]" src={data.img} alt="" />
      <div className="absolute top-[9px] right-[9px] rounded-full flex items-center justify-center h-6 w-6 text-primary bg-[#ffffff]">
        <FaTimes />
      </div>
    </div>
  );
}
