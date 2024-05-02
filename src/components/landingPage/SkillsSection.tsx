import React from "react";
import { SectionTitles } from "../../components/landingPage";
import "../../assets/SkillsCarousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { WebsiteCopyWrite } from "../../utilities/constants";

import "swiper/css";

export default function SkillsSection() {
  const skills = [
    "Movie Production / Directing",
    "Fashion Design / Styling",
    "Photography / Videography",
    "Writing / Scripting",
    "Modeling / Runway",
    "Makeup Artistry",
    "Set Design / Art Direction",
    "Music / Sound Production",
  ];
  return (
    <div className="landingPageMainDiv py-[108px]">
      <div className="mx-auto text-center max-w-[766px]">
        <SectionTitles
          titleClass="!md:text-[40px]"
          title={WebsiteCopyWrite.LandingPage.SkillsSection.Header}
          description={WebsiteCopyWrite.LandingPage.SkillsSection.Description}
        />
      </div>
      {/* <div className="flex flex-wrap gap-10 mt-[108px]">
        {skills.map((skill) => (
          <div
            key={skill}
            className="text-primary bg-[#FBFCE9] font-normal text-base max-w-max px-10 py-4 rounded-full"
          >
            <span className="">{skill}</span>
          </div>
        ))}
      </div> */}
      <div className=" mt-[108px] relative">
        <div className="absolute h-full w-20   z-[400] top-0 bottom-0 left-0 bg-gradient-to-r from-[#ffffff] to-transparent opacity-50"></div>
        <div className="absolute h-full w-20  z-[400] top-0 bottom-0 right-0 bg-gradient-to-l from-[#ffffff] to-transparent opacity-50"></div>

        <Swiper
          className="mySwiper skillsSwiper"
          slidesPerView={4.5}
          speed={7000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          dir="rtl"
          loop={true}
          freeMode={true}
          spaceBetween={24}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, FreeMode]}
        >
          <div className="flex items-end">
            {skills.map((skill) => (
              <div key={skill} className="w-full">
                <SwiperSlide>
                  <div className="flex items-center justify-center text-primary bg-[#FBFCE9] font-normal text-nowrap text-base w-full px-10 py-4 rounded-full">
                    <span className="">{skill}</span>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </div>
        </Swiper>

        <Swiper
          className="mySwiper skillsSwiper mt-8"
          slidesPerView={4.5}
          speed={7000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          loop={true}
          freeMode={true}
          spaceBetween={24}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, FreeMode]}
        >
          <div className="flex items-end">
            {skills.map((skill) => (
              <div key={skill} className="w-full">
                <SwiperSlide>
                  <div className="flex items-center justify-center text-primary bg-[#FBFCE9] font-normal text-nowrap text-base w-full px-10 py-4 rounded-full">
                    <span className="">{skill}</span>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
}
