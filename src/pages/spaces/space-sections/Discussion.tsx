import React from "react";
import { YellowCards } from "../../../components";
import UserPost from "../../../components/community/UserPost.tsx";
import CommunityCard from "../../../components/community/CommunityCard.tsx";

import CommunityPost from "../../../components/community/CommunityPost.tsx";

export default function Discussion() {
  return (
    <div>
      <div className="flex gap-6">
        <div className="flex flex-col gap-6 w-[400px]">
          <YellowCards
            title="About this space"
            subTitle="This space is created to blah blah blah"
            bottomText="Invite a friend"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="">
                  {" "}
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25 12.3334C25.0046 14.0932 24.5934 15.8292 23.8 17.4C22.8592 19.2824 21.413 20.8656 19.6233 21.9724C17.8335 23.0792 15.771 23.6659 13.6667 23.6667C11.9068 23.6713 10.1708 23.2601 8.6 22.4667L1 25L3.53333 17.4C2.73991 15.8292 2.32875 14.0932 2.33333 12.3334C2.33415 10.229 2.92082 8.16651 4.02763 6.37677C5.13444 4.58704 6.71767 3.14079 8.6 2.20004C10.1708 1.40661 11.9068 0.99545 13.6667 1.00004H14.3333C17.1125 1.15336 19.7374 2.32639 21.7055 4.29452C23.6737 6.26265 24.8467 8.88757 25 11.6667V12.3334Z"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex gap-2 flex-col text-sm text-[#212121]">
                  <span className="font-medium">Be considerate</span>
                  <span className="font-normal">
                    Lorem ipsum dolor sit amet consectetur. Donec ipsum turpis
                    ut non aliquet mattis.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="">
                  {" "}
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25 12.3334C25.0046 14.0932 24.5934 15.8292 23.8 17.4C22.8592 19.2824 21.413 20.8656 19.6233 21.9724C17.8335 23.0792 15.771 23.6659 13.6667 23.6667C11.9068 23.6713 10.1708 23.2601 8.6 22.4667L1 25L3.53333 17.4C2.73991 15.8292 2.32875 14.0932 2.33333 12.3334C2.33415 10.229 2.92082 8.16651 4.02763 6.37677C5.13444 4.58704 6.71767 3.14079 8.6 2.20004C10.1708 1.40661 11.9068 0.99545 13.6667 1.00004H14.3333C17.1125 1.15336 19.7374 2.32639 21.7055 4.29452C23.6737 6.26265 24.8467 8.88757 25 11.6667V12.3334Z"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex gap-2 flex-col text-sm text-[#212121]">
                  <span className="font-medium">Be considerate</span>
                  <span className="font-normal">
                    Lorem ipsum dolor sit amet consectetur. Donec ipsum turpis
                    ut non aliquet mattis.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 2V6"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 2V6"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 10H21"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex gap-2 flex-col text-sm text-[#212121]">
                  <span className="font-medium">Be considerate</span>
                  <span className="font-normal">
                    Lorem ipsum dolor sit amet consectetur. Donec ipsum turpis
                    ut non aliquet mattis.
                  </span>
                </div>
              </div>
            </div>
          </YellowCards>
          <YellowCards title="Admins">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="">
                  {" "}
                  <div className="size-8 font-medium text-sm flex items-center justify-center rounded-full text-[#ffffff] bg-gray-400"></div>
                </div>
                <div className="flex gap-2 flex-col text-sm text-[#212121]">
                  <span className="font-normal">Firstname Last name</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="">
                  {" "}
                  <div className="size-8 font-medium text-sm flex items-center justify-center rounded-full text-[#ffffff] bg-gray-400"></div>
                </div>
                <div className="flex gap-2 flex-col text-sm text-[#212121]">
                  <span className="font-normal">Firstname Last name</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="">
                  {" "}
                  <div className="size-8 font-medium text-sm flex items-center justify-center rounded-full text-[#ffffff] bg-gray-400"></div>
                </div>
                <div className="flex gap-2 flex-col text-sm text-[#212121]">
                  <span className="font-normal">Firstname Last name</span>
                </div>
              </div>
            </div>
          </YellowCards>
          <YellowCards
            title="Rules"
            subTitle="Something about rules"
            bottomText="Invite a friend"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="">
                  {" "}
                  <div className="size-8 font-medium text-sm flex items-center justify-center rounded-full text-[#ffffff] bg-customsecondary">
                    1
                  </div>
                </div>
                <div className="flex gap-2 flex-col text-sm text-[#212121]">
                  <span className="font-medium">Be considerate</span>
                  <span className="font-normal">
                    Lorem ipsum dolor sit amet consectetur. Donec ipsum turpis
                    ut non aliquet mattis.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="">
                  {" "}
                  <div className="size-8 font-medium text-sm flex items-center justify-center rounded-full text-[#ffffff] bg-customsecondary">
                    2
                  </div>
                </div>
                <div className="flex gap-2 flex-col text-sm text-[#212121]">
                  <span className="font-medium">Be considerate</span>
                  <span className="font-normal">
                    Lorem ipsum dolor sit amet consectetur. Donec ipsum turpis
                    ut non aliquet mattis.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="">
                  {" "}
                  <div className="size-8 font-medium text-sm flex items-center justify-center rounded-full text-[#ffffff] bg-customsecondary">
                    3
                  </div>
                </div>
                <div className="flex gap-2 flex-col text-sm text-[#212121]">
                  <span className="font-medium">Be considerate</span>
                  <span className="font-normal">
                    Lorem ipsum dolor sit amet consectetur. Donec ipsum turpis
                    ut non aliquet mattis.
                  </span>
                </div>
              </div>
            </div>
          </YellowCards>
        </div>
        <div className="flex-1 ">
          <div className="flex flex-col gap-6">
            <div className="bg-[#ffffff] px-6 py-[28px] rounded-lg border border-[#EFEFEF]">
              <UserPost isAskMember />
            </div>

            <CommunityCard>
              <CommunityPost />
            </CommunityCard>
          </div>
        </div>
      </div>
    </div>
  );
}
