/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";
import { Navigation, Pagination } from "swiper/modules";
import {
  HeaderAndDescription,
  TrendingItem,
  MovieItem,
  EventItem,
  JobItem,
  CustomSwiper,
} from "../../components";

type ICarouselSection = {
  isBusiness?: boolean;
  hasCarousel?: boolean;
  trend?: boolean;
  movie?: boolean;
  event?: boolean;
  job?: boolean;
  children?: ReactNode | ReactNode[];
  borderBottom?: boolean;
  openCommunity?: boolean;
  viewAll?: boolean;
  seeMore?: boolean;
  title?: string;
  description?: string;
  data?: Array<any>;
  navigateTo?: () => void;
  refetchJobs?: () => void
};
export default function CarouselSection({
  data = [],
  isBusiness = false,
  hasCarousel = true,
  trend,
  movie,
  event,
  job,
  openCommunity,
  borderBottom,
  viewAll,
  seeMore,
  title = "",
  description = "",
  navigateTo,
  children,
  refetchJobs
}: ICarouselSection) {
  return (
    <div className={`flex flex-col !max-w-[100%] `}>
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
      {hasCarousel ? (
        <div className="!max-w-[100%]">
          {data?.length > 0 ? (
            <CustomSwiper
              modules={[Pagination, Navigation]}
              navigation={true}
              pagination={true}
            >
              {data.map((item, i) => (
                <div key={i}>
                  {trend || movie || event || job ? (
                    <div className="">
                      {trend && (
                        <div className="w-[250px] md:w-[350px] ">
                          <TrendingItem />
                        </div>
                      )}
                      {movie && <MovieItem />}
                      {event && <EventItem className={"!w-[310px]"} />}
                      {job && (
                        <JobItem
                          data={item}
                          refetchJobs={() => refetchJobs && refetchJobs()}
                          isBusiness={isBusiness}
                          className={"!w-[310px]"}
                        />
                      )}
                    </div>
                  ) : (
                    <EventItem className={"!w-[310px]"} />
                  )}
                </div>
              ))}
            </CustomSwiper>
          ) : (
            <CustomSwiper
              modules={[Pagination, Navigation]}
              navigation={true}
              pagination={true}
            >
              {Array(6)
                .fill(null)
                .map((_, i) => (
                  <div key={i}>
                    {trend || movie || event || job ? (
                      <div className="">
                        {trend && (
                          <div className="w-[250px] md:w-[350px] ">
                            <TrendingItem />
                          </div>
                        )}
                        {movie && <MovieItem />}
                        {event && <EventItem className={"!w-[310px]"} />}
                        {job && (
                          <JobItem
                            isBusiness={isBusiness}
                            className={"!w-[310px]"}
                          />
                        )}
                      </div>
                    ) : (
                      <EventItem className={"!w-[310px]"} />
                    )}
                  </div>
                ))}
            </CustomSwiper>
          )}
        </div>
      ) : null}

      {children}
    </div>
  );
}
