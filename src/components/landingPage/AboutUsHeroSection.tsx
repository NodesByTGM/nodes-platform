import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "..";
import { WebsiteCopyWrite } from "../../utilities/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

export default function AboutUsHeroSection() {
  return (
    <div className="">
      <div className=" relative !z-[1]">
        <div className="z-[222] mb-10 sm:absolute top-0 bottom-0 left-0 right-0 max-w-[525px] max-h-max mx-auto sm:my-auto">
          <div className="flex flex-col text-primary sm:text-[#ffffff] text-center">
            <span className="text-primary font-medium text-[24px] sm:text-[48px] md:text-[64px] mb-4">
              {WebsiteCopyWrite.AboutUsPage.HeroSectionPlanCTA.Title}
            </span>

            <span className="text-[#000000] text-base md:text-[20px] font-normal">
              {WebsiteCopyWrite.AboutUsPage.HeroSectionPlanCTA.Description}
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
              className={` border-primary  text-primary  px-4 py-4 rounded-[4px]  border `}
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
        <div className="  min-h-[300px] md:min-h-[450px] lg:min-h-[550px] xl:min-h-[748px]  ">
          <Swiper
            className="mySwiper landingPageSwiper"
            slidesPerView={1}
            speed={80000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            loop={true}
            freeMode={true}
            spaceBetween={-2}
            modules={[Autoplay, FreeMode]}
          >
            <SwiperSlide>
              <div className="!z-[-1] h-[748px] aboutUsHeroSection"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="!z-[-1] h-[748px] aboutUsHeroSection"></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
