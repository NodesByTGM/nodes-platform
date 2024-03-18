import React from "react";
import { useNavigate } from "react-router-dom";

export default function Back({
  className,
  link = "",
  text = "Go back",
}: {
  className?: string;
  link: string;
  text?: string;
}) {
  const navigate = useNavigate();
  return (
    <div className={`${className} flex gap-2 items-center `}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <span
        onClick={() => navigate(link)}
        className=" text-base font-normal text-[#000000] cursor-pointer"
      >
        {text}
      </span>
    </div>
  );
}
