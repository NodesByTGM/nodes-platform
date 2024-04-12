import React, { useState } from "react";

import { CiHeart } from "react-icons/ci";
import { TfiComment } from "react-icons/tfi";
import {
  CarouselSection,
  TrendingItem,
  CommentBox,
  Back,
} from "../../../components";
export default function ViewDetail() {
  const [commentOpen, setCommentOpen] = useState(false);

  return (
    <div className=''>
      <Back className={`mb-[64px]`} link={"/dashboard"} />
      <div className="mb-[64px] flex items-start justify-between gap-6">
        <div className="flex gap-4 flex-col text-[#000000] max-w-[500px]">
          <span className="text-[#000000] font-normal text-sm">Top Movies</span>
          <span className="text-[#000000] text-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </span>
          <span className="text-[#000000] font-normal text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.{" "}
          </span>

          <span className="mt-4 font-medium text-base">
            Posted on 25 Jan 2024
          </span>

          <div className="flex flex-col gap-6">
            <span className="mt-[325px]">What do you think?</span>

            <div className="flex gap-4">
              <div className="flex gap-2 items-center">
                <span className="">
                  <CiHeart className="size-8 text-primary" />
                </span>
                <span className="text-[#000000] font-medium text-base">32</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="">
                  <TfiComment className="size-6 text-primary" />
                </span>
                <span className="text-[#000000] font-medium text-base">32</span>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full">
              <div
                onClick={() => setCommentOpen(true)}
                className="flex items-center justify-center text-[#ffffff] font-medium text-base rounded-full bg-customsecondary max-h-max max-w-max p-4 "
              >
                AA
              </div>
              <div
                onClick={() => setCommentOpen(true)}
                className="cursor-pointer text-sm font-normal text-[#757575] flex flex-1 items-center border border-[#D6D6D6] py-[17px] px-4 rounded-[5px]"
              >
                Add a comment
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[560px]">
          <img
            src="/img/placeholder/ViewDetail.png"
            alt=""
            className="h-full w-full"
          />
        </div>
      </div>

      <CarouselSection borderBottom title="More like this" hasCarousel={false}>
        <div className="grid grid-cols-3 gap-6">
          <TrendingItem />
          <TrendingItem />
          <TrendingItem />
        </div>
      </CarouselSection>

      <CommentBox opened={commentOpen} setOpened={setCommentOpen} />
    </div>
  );
}
