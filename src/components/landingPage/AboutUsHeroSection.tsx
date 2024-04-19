import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "..";
export default function AboutUsHeroSection() {
  return (
    <div className="landingPageMainDiv pt-10 pb-[108px]">
      <div className="relative !z-[1]">
        <img
          src="/landingPageImg/AboutUsHeroSectionSvg.svg"
          alt=""
          className="!z-[-1]"
        />

        <div className="absolute top-0 bottom-0 left-0 right-0 max-w-[525px] max-h-max mx-auto my-auto">
          <div className="flex flex-col text-[#ffffff] text-center">
            <span className="font-medium text-[64px] mb-4">What is Nodes?</span>

            <span className="text-[20px] font-normal">
              Lorem ipsum dolor sit amet consectetur. Risus egestas aliquet
              accumsan libero ipsum facilisis nibh.{" "}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-max mt-[48px] mx-auto">
            <NavLink to={"/"}>
              <Button
                className={`!py-4 !px-[48px] !text-base max-w-max !border-none !rounded !bg-[#ffffff]  !text-primary`}
              >
                Get started now
              </Button>
            </NavLink>
            <button
              className={` border-[#ffffff] text-[#ffffff] p-4 rounded-[4px]  border `}
            >
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
    </div>
  );
}
