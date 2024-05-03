import React from 'react'
import { BiCheckDouble } from "react-icons/bi";

export default function SentMessage() {
  return (
    <div className="w-full flex justify-end">
    <div className="flex items-start gap-3">
      <div className="flex-1 ">
        {" "}
        <div className="flex flex-col  items-end gap-2">
          <div className="text-sm text-primary font-normal max-w-[340px] bg-[#FEFFEA] border border-[#EFEFEF] p-5 rounded-t-[20px] rounded-bl-[20px]">
            Animations can enhance user engagement, but use them judiciously.
            Subtle animations for transitions or highlighting elements can
            make the site feel dynamic without overwhelming users.
          </div>

          <div className="flex ml-auto gap-[6.62px]">
            <BiCheckDouble className="text-customprimary" />

            <span className="font-medium text-xs text-customprimary">
              10:43 AM
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-max max-h-max">
        <img
          src="/img/placeholder/MessageHeaderImg.svg"
          alt=""
          className="rounded-full size-9"
        />
      </div>
    </div>
  </div>
  )
}
