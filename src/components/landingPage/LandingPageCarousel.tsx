import React from "react";
import "../../assets/LandingPageCarousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";

export default function Carousel() {
  const images = [
    "/landingPageImg/LandingPageCarouselImg1.png",
    "/landingPageImg/LandingPageCarouselImg2.png",
    "/landingPageImg/LandingPageCarouselImg3.png",
    "/landingPageImg/LandingPageCarouselImg4.png",
    "/landingPageImg/LandingPageCarouselImg5.png",
    "/landingPageImg/LandingPageCarouselImg1.png",
    "/landingPageImg/LandingPageCarouselImg2.png",
    "/landingPageImg/LandingPageCarouselImg3.png",
    "/landingPageImg/LandingPageCarouselImg4.png",
    "/landingPageImg/LandingPageCarouselImg5.png",
  ];
  return (
    <div className="pt-20 relative">
      <div className="absolute h-full w-20   z-[400] top-0 bottom-0 left-0 bg-gradient-to-r from-[#ffffff] to-transparent opacity-50"></div>
      <div className="absolute h-full w-20  z-[400] top-0 bottom-0 right-0 bg-gradient-to-l from-[#ffffff] to-transparent opacity-50"></div>

      <Swiper
        className="mySwiper landingPageSwiper"
        slidesPerView={4.5}
        speed={7000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={true}
        freeMode={true}
        spaceBetween={5}
        modules={[Autoplay, FreeMode]}
      >
        <div className="flex items-end">
          {images.map((image) => (
            <div key={image} className="w-full">
              <SwiperSlide>
                <img src={image} alt="" className="" />
              </SwiperSlide>
            </div>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
