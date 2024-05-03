import React from "react";
import { WebsiteCopyWrite } from "../../utilities/constants";

export default function OurStorySection() {
  return (
    <div className="landingPageMainDiv ">
      <div className="py-[60px] md:py-[112px]">
        <div className="grid gap-20">
          <Section
            title={WebsiteCopyWrite.AboutUsPage.OurStorySection.title1}
            text1={
              WebsiteCopyWrite.AboutUsPage.OurStorySection.description1.text1
            }
            text2={
              WebsiteCopyWrite.AboutUsPage.OurStorySection.description1.text2
            }
          />

          <Section
            title={WebsiteCopyWrite.AboutUsPage.OurStorySection.title2}
            text1={
              WebsiteCopyWrite.AboutUsPage.OurStorySection.description2.text1
            }
            text2={
              WebsiteCopyWrite.AboutUsPage.OurStorySection.description2.text2
            }
          />
        </div>
      </div>
    </div>
  );
}

export function Section({ title, text1, text2 }) {
  return (
    <div className=" ">
      <div className="flex flex-col md:flex-row gap-20 justify-between items-start text-[#000000]">
        <div className="flex flex-col gap-4 max-w-[540px] md:min-w-[360px] lg:min-w-[540px]">
          <span className="font-medium text-[40px]">{title}</span>
        </div>
        <div className="text-[18px] font-normal flex flex-col gap-8">
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
      </div>
    </div>
  );
}
