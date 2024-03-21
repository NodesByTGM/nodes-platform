import React from "react";
import { Button } from "../components";

export default function EmptySection({ description, buttonText }) {
  return (
    <div>
      <div>
        <div className="mb-6"></div>
        <div className="mx-auto max-w-[274px] flex flex-col justify-center items-center ">
          <h3 className="capitalize text-center font-medium text-[20px] text-[#212121]">
            Hi, Kainechukwu!
          </h3>
          <span className="mt-2  text-center font-normal text-[20px] text-[#212121]">
            {description}
          </span>
        </div>

        <div className=" w-full mb-10">
          <img
            src="/img/EmptyJobAndEventSection.png"
            alt=""
            className="w-full"
          />
        </div>

        <Button className="max-w-max mx-auto">{buttonText}</Button>
      </div>
    </div>
  );
}
