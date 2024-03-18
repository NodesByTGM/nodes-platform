import React, { ReactNode } from "react";
import { Navigation, Pagination } from "swiper/modules";
import {
  HeaderAndDescription,
  TrendingItem,
  MovieItem,
  EventItem,
  CustomSwiper,
} from "../../components";

type ICarouselSection = {
  hasCarousel?: boolean;
  trend?: boolean;
  movie?: boolean;
  event?: boolean;
  children?: ReactNode | ReactNode[];
  borderBottom?: boolean;
  openCommunity?: boolean;
  viewAll?: boolean;
  title?: string;
  description?: string;
  navigateTo?: () => void;
};
export default function CarouselSection({
  hasCarousel = true,
  trend,
  movie,
  event,
  openCommunity,
  borderBottom,
  viewAll,
  title = "",
  description = "",
  navigateTo,
  children,
}: ICarouselSection) {
  return (
    <div className={`flex flex-col !max-w-[100%] `}>
      <div className="mb-6">
        <HeaderAndDescription
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
          <CustomSwiper
            modules={[Pagination, Navigation]}
            navigation={true}
            pagination={true}
          >
            {Array(6)
              .fill(null)
              .map((_, i) => (
                <div key={i}>
                  {trend || movie || event ? (
                    <div className="">
                      {trend && <TrendingItem />}
                      {movie && <MovieItem />}
                      {event && <EventItem />}
                    </div>
                  ) : (
                    <EventItem />
                  )}
                </div>
              ))}
          </CustomSwiper>
        </div>
      ) : null}

      {children}
    </div>
  );
}
