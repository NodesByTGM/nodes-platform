import React from "react";
import "../../assets/LandingPageCarousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Carousel() {
  const images = [
    "/landingPageImg/LandingPageCarouselImg1.png",
    "/landingPageImg/LandingPageCarouselImg2.png",
    "/landingPageImg/LandingPageCarouselImg3.png",
    "/landingPageImg/LandingPageCarouselImg4.png",
    "/landingPageImg/LandingPageCarouselImg5.png",
  ];
  return (
    <div className="pt-20">
      <Swiper
        className="mySwiper landingPageSwiper"
        slidesPerView={4.5}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={5}
        modules={[Autoplay]}
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
