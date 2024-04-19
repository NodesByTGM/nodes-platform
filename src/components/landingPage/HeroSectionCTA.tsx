import React from "react";

import { NavLink } from "react-router-dom";
export default function HeroSectionCTA() {
  return (
    <div>
      <div className="flex gap-4 mx-auto">
        <NavLink to={"/"}>
          <button
            className={`border border-primary !py-4 !px-[48px] !text-base max-w-max !rounded-lg !bg-primary !text-white`}
          >
            Get started now
          </button>
        </NavLink>
        <NavLink to={"/"}>
          <button
            className={`border-primary text-primary p-4 rounded-[8px]  border `}
          >
            <div className="flex items-center gap-2">
              {" "}
              <span className="font-medium text-base">
                {" "}
                Learn more about us
              </span>
            </div>
          </button>
        </NavLink>
      </div>
    </div>
  );
}
