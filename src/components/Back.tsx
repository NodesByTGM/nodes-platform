import React from "react";
import { useNavigate } from "react-router-dom";

export default function Back({
  className,
  link = "",
  text = "Go back",
}: {
  className?: string;
  link?: string | number;
  text?: string;
}) {
  const navigate = useNavigate();
  const handleNavigation = () => {
    if (typeof link === "number" || link === String(-1)) {
      window.history.back();
    } else {
      navigate(link);
    }
  };
  return (
    <div
      onClick={() => {
        handleNavigation();
      }}
      className={`${className} cursor-pointer  text-[#000000] flex gap-2 items-center `}
    >
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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className=" text-base font-normal ">{text}</span>
    </div>
  );
}
