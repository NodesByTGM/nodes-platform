import React from "react";

export default function CommunityCard({ children, shadow = false }) {
  return (
    <div
      className={`${
        shadow ? "custom-shadow" : ""
      } border border-[#EFEFEF] bg-[#ffffff] px-6 py-7 w-full rounded-lg`}
    >
      {children}
    </div>
  );
}
