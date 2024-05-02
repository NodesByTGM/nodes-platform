/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { SectionTitles } from "../../components/landingPage";
import { WebsiteCopyWrite } from "../../utilities/constants";

export default function TipsSection({
  title = WebsiteCopyWrite.LandingPage.NodesCommunitySection.Header,
  description = WebsiteCopyWrite.LandingPage.NodesCommunitySection.Description,
  tips = [],
}: {
  title: string;
  description: string;
  tips: Array<any>;
}) {
  return (
    <div className="landingPageMainDiv pt-[60px] sm:pt-[108px]">
      <div className="mx-auto text-center">
        <SectionTitles
          title={title}
          description={description}
          descriptionClass="max-w-[580px] mx-auto"
        />
      </div>
      <div className="grid grid-cols-3 gap-8">
        {tips.map((tip, index) => (
          <div key={tip?.id} className="bg-[#D6DE211A] border border-[#D6DE21] rounded-[16px] flex flex-col gap-[138px]">
           <span className="text-[24px] font-medium text-[#212121]">{tip.title}</span>  


           <div className="flex justify-end w-full">
            <span className="font-medium text-[96px] text-[#D6DE21]">0{index+1}</span></div> 
          </div>
        ))}
      </div>
    </div>
  );
}
