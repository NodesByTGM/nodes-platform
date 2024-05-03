/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";

import {
  HeaderAndDescription,
  TrendingItem,
  MovieItem,
  EventItem,
  JobItem,
  ContentItem,
} from "../../components";
import clsx from "clsx";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../../assets/ItemsCarousel.scss";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "react-feather";

// Import Swiper styles
import "swiper/css";
// import '../../carouselSwiper.scss'

type IItemsCarousel = {
  canViewMovieDetails?: boolean;
  canViewEventDetails?: boolean;
  canViewAndEditEventDetails?: boolean;
  canViewJob?: boolean;
  isBusiness?: boolean;
  trend?: boolean;
  movie?: boolean;
  event?: boolean;
  job?: boolean;
  content?: boolean;
  children?: ReactNode | ReactNode[];
  borderBottom?: boolean;
  openCommunity?: boolean;
  viewAll?: boolean;
  seeMore?: boolean;
  title?: string;
  description?: string;
  data?: Array<any>;
  navigateTo?: () => void;
  refetchJobs?: () => void;
  refetchEvents?: () => void;
};

export default function ItemsCarousel({
  data = [],
  canViewMovieDetails = false,
  canViewEventDetails = true,
  canViewAndEditEventDetails = false,
  canViewJob = false,
  isBusiness = false,
  trend,
  movie,
  event,
  job,
  content,
  openCommunity,
  borderBottom,
  viewAll,
  seeMore,
  title = "",
  description = "",
  navigateTo,
  children,
  refetchJobs,
  refetchEvents,
}: IItemsCarousel) {
  //random value to make each class unique so multiple carousels won't scroll at once
  const randomValue = String(Math.floor(Math.random() * 500));
  const prevClass = "prev" + randomValue;
  const nextClass = "next" + randomValue;
  const customPaginator = "custom-swiper-pagination" + randomValue;
  return (
    <div className="flex flex-col">
      {/* {prevClass}
      {nextClass} */}
      <div className="mb-6">
        <HeaderAndDescription
          seeMore={seeMore}
          navigateTo={navigateTo}
          openCommunity={openCommunity}
          viewAll={viewAll}
          title={title}
          description={description}
          titleClass=" text-[18px]"
        />
      </div>
      <div
        className={`${borderBottom ? " mb-10 border-b border-[#D6D6D6]" : ""} `}
      ></div>
      <div className="itemsSwiper ">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: `.${prevClass}`,
            nextEl: `.${nextClass}`,
          }}
          pagination={{
            el: `.${customPaginator}`,
            clickable: true,
            renderBullet: (_, className) => {
              return `<span class="${clsx(
                "h-2 w-2 rounded-full bg-grey-dark block",
                className
              )}"></span>`;
            },
          }}
          spaceBetween={40}
          slidesPerView={3.5}
          onSlideChange={() => {}}
          onSwiper={() => {}}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              // spaceBetween: 10,
            },
            "@0.45": {
              slidesPerView: 1.5,
              // spaceBetween: 20,
            },
            "@0.75": {
              slidesPerView: 2.5,
              // spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 2.5,
              // spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 3.5,
              // spaceBetween: 50,
            },
            // "@1.75": {
            //   slidesPerView: 4.5,
            //   // spaceBetween: 50,
            // },
            // "@2.00": {
            //   slidesPerView: 5.5,
            //   // spaceBetween: 50,
            // },
          }}
        >
          {data.map((item, i) => (
            <div className="w-full" key={item?.id ? item?.id : i}>
              <SwiperSlide key={item?.id}>
                {trend || movie || event || job || content ? (
                  <div className="">
                    {trend && (
                      <TrendingItem data={item} className={"!w-full h-full"} />
                    )}
                    {movie && (
                      <MovieItem
                        data={item}
                        canViewMovieDetails={canViewMovieDetails}

                        // className={"!w-full h-full"}
                      />
                    )}
                    {event && (
                      <EventItem
                        refetchEvents={() => refetchEvents && refetchEvents()}
                        data={item}
                        isBusiness={isBusiness}
                        canViewAndEditEventDetails={canViewAndEditEventDetails}
                        canViewEventDetails={canViewEventDetails}
                        className={"!w-full h-full"}
                      />
                    )}
                    {job && (
                      <JobItem
                        canViewJob={canViewJob}
                        data={item}
                        refetchJobs={() => refetchJobs && refetchJobs()}
                        isBusiness={isBusiness}
                        className={"!w-full h-full"}
                      />
                    )}
                    {content && (
                      <ContentItem data={item} className={"!w-full h-full"} />
                    )}
                  </div>
                ) : (
                  <EventItem className={"!w-[310px]"} />
                )}
              </SwiperSlide>
            </div>
          ))}
        </Swiper>

        <div className=" w-full  bottom-0 left-0 flex justify-between items-center mt-10 ">
          <div
            className={`${customPaginator} flex gap-2 items-center cursor-pointer`}
          ></div>

          <div className="custom-swiper-navigation flex items-center gap-[10px]">
            <div
              className={`${prevClass} cursor-pointer rounded-full w-10 h-10 border flex items-center justify-center text-grey-dark bg-[#ffffff]`}
            >
              <ChevronLeft className="text-grey-dark text-2xl" />
            </div>
            <div
              className={`${nextClass} cursor-pointer rounded-full w-10 h-10 border flex items-center justify-center text-grey-dark bg-[#ffffff]`}
            >
              <ChevronRight className=" text-grey-dark text-2xl" />
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
