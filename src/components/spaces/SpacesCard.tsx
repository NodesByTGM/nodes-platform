import React from "react";

const PeopleEmoji = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3327 14V12.6667C11.3327 11.9594 11.0517 11.2811 10.5516 10.781C10.0515 10.281 9.37326 10 8.66602 10H3.33268C2.62544 10 1.94716 10.281 1.44706 10.781C0.946967 11.2811 0.666016 11.9594 0.666016 12.6667V14"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.00065 7.33333C7.47341 7.33333 8.66732 6.13943 8.66732 4.66667C8.66732 3.19391 7.47341 2 6.00065 2C4.52789 2 3.33398 3.19391 3.33398 4.66667C3.33398 6.13943 4.52789 7.33333 6.00065 7.33333Z"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.334 13.9993V12.6659C15.3335 12.0751 15.1369 11.5011 14.7749 11.0341C14.4129 10.5672 13.9061 10.2336 13.334 10.0859"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.666 2.08594C11.2396 2.2328 11.748 2.5664 12.1111 3.03414C12.4742 3.50188 12.6712 4.07716 12.6712 4.66927C12.6712 5.26138 12.4742 5.83666 12.1111 6.3044C11.748 6.77214 11.2396 7.10574 10.666 7.2526"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const CommentsEmoji = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 6.66669C13.0023 7.5466 12.7967 8.41461 12.4 9.20002C11.9296 10.1412 11.2065 10.9328 10.3116 11.4862C9.41677 12.0396 8.3855 12.3329 7.33333 12.3334C6.45342 12.3356 5.58541 12.1301 4.8 11.7334L1 13L2.26667 9.20002C1.86995 8.41461 1.66437 7.5466 1.66667 6.66669C1.66707 5.61452 1.96041 4.58325 2.51381 3.68839C3.06722 2.79352 3.85884 2.0704 4.8 1.60002C5.58541 1.20331 6.45342 0.997725 7.33333 1.00002H7.66667C9.05623 1.07668 10.3687 1.66319 11.3528 2.64726C12.3368 3.63132 12.9233 4.94379 13 6.33335V6.66669Z"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default function SpacesCard({ data }) {
  return (
    <div className="flex gap-6 items-start p-6 rounded-[5px] border border-[#EFEFEF] bg-[#ffffff]  ">
      <div className="rounded-lg size-[64px] bg-[#D9D9D9]"></div>

      <div className="flex flex-col gap-2 text-[#212121] flex-1">
        <span className="font-medium text-base ">{data?.title}</span>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <PeopleEmoji />
            <span className="text-xs font-normal">{data?.numberOfMembers}</span>
          </div>
          <div className="flex gap-2">
            <CommentsEmoji />
            <span className="text-xs font-normal">{data?.numberOfPosts}</span>
          </div>
          <span className="text-sm font-normal">{data?.description}</span>

          <span className="cursor-pointer text-primary font-medium text-sm ml-auto">
            {" "}
            Join space
          </span>
        </div>
      </div>
    </div>
  );
}
