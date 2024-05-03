import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "..";
export default function HeroSectionPlanCTA({
  textColor = "text-[#212121]",
  solidBtnColor = "!bg-primary !text-white",
  outlineBtnColor = "border-primary text-primary",
  title = "",
  description = "",
}) {
  return (
    <div className="landingPageMainDiv pt-[80px] pb-[60px] sm:pb-[108px]">
      <div className="flex gap-[64px]">
        <div className="flex flex-col w-full lg:max-w-[578px]">
          <h1
            className={`text-center lg:text-start font-medium text-[32px] md:text-[48px]  ${textColor}`}
          >
            {title}
          </h1>
          <span
            className={`text-center lg:text-start font-normal text-base md:text-[20px]   mt-4 ${textColor}`}
          >
            {description}
          </span>

          <div className="mx-auto lg:mx-0 grid sm:flex mt-[48px] gap-4 ">
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
                <span className="font-medium text-base mx-auto">
                  {" "}
                  Learn more about us
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src="/landingPageImg/PlanHerosectionImg.png"
            alt=""
            className=""
          />
        </div>
      </div>
    </div>
  );
}
