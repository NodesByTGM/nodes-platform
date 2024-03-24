import React from "react";
import { UserPost, UserPostInitials, PostInteraction } from "../../components";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

type ICommunityPost = {
  canShare?: boolean;
  canReply?: boolean;
};
export default function CommunityPost({
  canShare = true,
  canReply = true,
}: ICommunityPost) {
  return (
    <div className="flex flex-col w-full">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex gap-2 items-center font-medium text-sm">
          <UserPostInitials />
          <span className="text-[#000000]">Minato Namikaze</span>
          <div className="size-1 rounded-full bg-[#D9D9D9]"></div>
          <span className=" text-[#828282]">2 hours ago</span>
        </div>

        <div className="">
          <IoEllipsisHorizontalSharp />
        </div>
      </div>
      <span className="mb-10 text-[#000000] text-base font-normal">
        Lorem ipsum dolor sit amet consectetur. Feugiat senectus ut aenean
        commodo dictum malesuada. Imperdiet orci magnis donec malesuada mi massa
        magna lectus viverra. Nunc quam congue vulputate etiam dapibus vel
        suscipit cras pretium. Ut donec vulputate etiam consectetur vel.
      </span>
      <div className="flex mb-10">
        <img
          src="/img/CommunityPostImgSample.png"
          alt=""
          className="rounded-md h-[173px] w-full max-w-[274px]"
        />
      </div>
      <div className="flex justify-end">
        <PostInteraction canShare={canShare} />
      </div>
      {canReply ? (
        <div className="mt-8">
          <UserPost isReply />
        </div>
      ) : null}
    </div>
  );
}
