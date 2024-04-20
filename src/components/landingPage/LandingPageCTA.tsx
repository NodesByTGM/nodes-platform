import React from "react";
import { HeroSectionCTA } from "../../components/landingPage";
export default function LandingPageCTA() {
  return (
    <div className='pt-[64px] landingPageMainDiv'>
      <div className="text-center flex flex-col mx-auto max-w-[853px]">
        <span className="text-[24px] font-medium text-[#212121] ">Introducing Nodes</span>
        <span className="mt-6 text-[60px] md:text-[84px] font-semibold leading:[20px] md:leading-[96px]">Something <span className="text-customprimary">cool</span> about Nodes</span>
        <div className=" mt-[40px] max-w-max mx-auto">
          <HeroSectionCTA />
        </div>
      </div>
    </div>
  );
}
