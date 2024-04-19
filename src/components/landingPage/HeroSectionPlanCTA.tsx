import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "..";
export default function HeroSectionPlanCTA({
  textColor = "text-[#212121]",
  solidBtnColor = "!bg-primary !text-white",
  outlineBtnColor = "border-primary text-primary",
}) {
  return (
    <div className="landingPageMainDiv">
      <div className="flex flex-col mx-auto max-w-[1096px] text-center">
        <h1 className={`font-medium text-[56px] ${textColor}`}>
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <span
          className={`font-normal text-[20px] max-w-[725px] mx-auto mt-4 ${textColor}`}
        >
          Lorem ipsum dolor sit amet consectetur. Risus egestas aliquet accumsan
          libero ipsum facilisis nibh.{" "}
        </span>

        <div className="flex mt-[48px] gap-4 mx-auto">
          <NavLink to={"/"}>
            <Button
              className={`!py-4 !px-[48px] !text-base max-w-max !border-none !rounded ${solidBtnColor}`}
            >
              Get started now
            </Button>
          </NavLink>
          <button className={`${outlineBtnColor} p-4 rounded-[4px]  border `}>
            <div className="flex items-center gap-2">
              {" "}
              <span className="font-medium text-base">
                {" "}
                Learn more about us
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
