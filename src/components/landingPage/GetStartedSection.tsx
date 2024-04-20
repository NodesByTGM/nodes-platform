import React from "react";
import { Button } from "../../components";
import { PaleSection } from "../../components/landingPage";
export default function GetStartedSection() {
  return (
    <div className="landingPageMainDiv py-[108px]">
      <PaleSection>
        <div className=" flex flex-col lg:flex-row gap-[154px] items-center justify-between">
          <div className="flex flex-col max-w-[685px] font-medium text-primary">
            <h3 className="text-center lg:text-start text-[40px] mb-4">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <span className="text-center lg:text-start text-[20px] mb-10">
              Lorem ipsum dolor sit amet consectetur. Risus egestas aliquet
              accumsan libero ipsum facilisis nibh.{" "}
            </span>
            <Button className="px-[48px] max-w-max mx-auto lg:mx-0">
              Get started for free
            </Button>
          </div>
          <div className="">
            <div className="flex flex-col gap-4">
              <img src="/landingPageImg/BarCodeBlack.svg" alt="" className="" />
              <span className="text-base font-medium text-primary text-center">
                Scan to download
              </span>
            </div>
          </div>
        </div>
      </PaleSection>
    </div>
  );
}
