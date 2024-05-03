import React from "react";
import { HeroSectionCTA } from "../../components/landingPage";
export default function LandingPageCTA() {
  return (
    <div className='pt-[64px] landingPageMainDiv'>
      <div className="text-center flex flex-col mx-auto max-w-[1037px]">
        <span className="text-[16px] mb:text-[24px] font-medium text-[#212121] ">Introducing Nodes</span>
        <span className="mt-6 text-[40px] leading:[20px] md:text-[64px] md:leading-[96px] font-semibold  ">A playground for <span className="text-customprimary">creatives</span> about  <span className="text-customprimary">brands</span> to <span className="text-customprimary">connect</span> </span>
        <div className=" mt-[40px] max-w-max mx-auto">
          <HeroSectionCTA />
        </div>
      </div>
    </div>
  );
}
