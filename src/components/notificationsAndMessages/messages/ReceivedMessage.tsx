import React from "react";
import { BiCheckDouble } from "react-icons/bi";

export default function ReceivedMessage() {
  return (
    <div className="w-full flex items-center gap-3 justify-start">
      <div className="max-w-max max-h-max">
        <img
          src="/img/placeholder/MessageHeaderImg.svg"
          alt=""
          className="rounded-full size-9"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-start gap-3">
          <div className="flex-1 ">
            {" "}
            <div className="flex flex-col justify-start  items-start gap-2">
              <div className="text-sm text-primary font-normal max-w-[340px] bg-[#ffffff] border border-[#EFEFEF] p-5 rounded-t-[20px] rounded-br-[20px]">
                Got it. And what's your take on incorporating animations? I've
                seen them on many sites lately.
              </div>

              <div className="flex mr-auto gap-[6.62px]">
                <BiCheckDouble className="text-customprimary" />

                <span className="font-medium text-xs text-customprimary">
                  10:43 AM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
