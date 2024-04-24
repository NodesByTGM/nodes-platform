import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "..";
export default function AboutUsHeroSection() {
  return (
    <div className="landingPageMainDiv pt-10 pb-[108px]">
      <div className="relative !z-[1]">
        <div className="mb-10 sm:absolute top-0 bottom-0 left-0 right-0 max-w-[525px] max-h-max mx-auto sm:my-auto">
          <div className="flex flex-col text-primary sm:text-[#ffffff] text-center">
            <span className="font-medium text-[24px] sm:text-[48px] md:text-[64px] mb-4">
              What is Nodes?
            </span>

            <span className="text-base md:text-[20px] font-normal">
              Lorem ipsum dolor sit amet consectetur. Risus egestas aliquet
              accumsan libero ipsum facilisis nibh.{" "}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-max mt-[48px] mx-auto">
            <NavLink to={"/"}>
              <Button
                className={`hidden sm:block !py-4 !px-[48px] !text-base max-w-max !border-none !rounded !bg-[#ffffff]  !text-white sm:!text-primary`}
              >
                Get started now
              </Button>
              <Button
                className={`block sm:hidden !py-4 !px-[48px] !text-base max-w-max !border-none !rounded !bg-primary !sm:bg-[#ffffff]  !text-white sm:!text-primary`}
              >
                Get started now
              </Button>
            </NavLink>
            <button
              className={` border-primary sm:border-[#ffffff] text-primary sm:text-[#ffffff] px-4 py-4 rounded-[4px]  border `}
            >
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
        <div className="bg-transparent sm:bg-primary min-h-[300px] md:min-h-[350px] lg:min-h-[450px] xl:min-h-[550px]  rounded-[16px]">
          <img
            src="/landingPageImg/AboutUsHeroSectionSvg.svg"
            alt=""
            className="!z-[-1] h-auto "
          />
        </div>
      </div>
    </div>
  );
}
