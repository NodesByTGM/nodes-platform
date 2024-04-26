import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/less/effect-fade";
import { carouselImages } from "../utilities/";
import { Autoplay, EffectFade } from "swiper/modules";

import "../onboardingSwiper.scss";
export default function OnboardingCarousel({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={`${className} onboardingSwiper relative h-full min-h-screen w-1/2 bg-gray-400`}
    >
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        modules={[Autoplay, EffectFade]}
        className="h-full "
      >
        {carouselImages.map((img) => (
          <SwiperSlide key={img.id} className="h-full">
            <img src={img.url} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="z-[100] absolute left-0 right-0 top-0 bottom-0 flex flex-col justify-center  items-center h-full">
        <div className="bg-white p-8  rounded-[16px] max-w-[440px] flex w-full flex-col gap-4">
          <h3 className="!text-2xl !font-semibold  !text-primary">
            Level up your creative journey with Nodes!
          </h3>
          {/* <p className="text-[18px] text-[#212121]">
            Showcase Your Talent: Put your work in front of the right people{" "}
          </p> */}
          <ol className="px-5 pb-5 flex flex-col gap-y-5 ">
            <li className="list-decimal">
              Showcase Your Talent: Put your work in front of the right people{" "}
            </li>
            <li className="list-decimal">
              Connect & Collaborate: Build your network and find your perfect
              creative match.{" "}
            </li>
            <li className="list-decimal">
              Grow Your Career: Discover opportunities and land your dream
              project.{" "}
            </li>
            <li className="list-decimal">
              Stay Inspired: Get access to the latest industry news and trends
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
