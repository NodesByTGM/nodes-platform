import React from "react";
import { Button } from "../../components";
import { PaleSection } from "../../components/landingPage";
import { WebsiteCopyWrite } from "../../utilities/constants";

export default function GetStartedSection() {
  return (
    <div className="landingPageMainDiv py-[108px]">
      <PaleSection>
        <div className=" flex flex-col lg:flex-row gap-[154px] items-center justify-between">
          <div className="flex flex-col max-w-[685px] font-medium text-primary">
            <h3 className="text-center lg:text-start text-[40px] mb-4">
              {WebsiteCopyWrite.LandingPage.GetStartedSection.Header}
            </h3>
            <span className="text-center lg:text-start text-[20px] mb-10">
             {WebsiteCopyWrite.LandingPage.GetStartedSection.Description}
            </span>
            <Button className="px-[48px] max-w-max mx-auto lg:mx-0">
              Get started for free!
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
