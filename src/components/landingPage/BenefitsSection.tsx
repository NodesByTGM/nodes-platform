import React from "react";
import { WebsiteCopyWrite } from "../../utilities/constants";

export default function BenefitsSection() {
  const benefits = WebsiteCopyWrite.LandingPage.BenefitsSection.Benefits
  return (
    <div className="pt-20 pb-[120px] flex gap-6">
      <div className="hidden lg:flex h-full">
        <img src="/landingPageImg/BenefitsSectionImg.png" alt="" className="xl:h-[748px] xl:w-[967.5px]" />
      </div>
      <div className="grid  gap-6 mx-auto lg:mx-0">
        {benefits.map((item) => (
          <div
            key={item.title}
            className="rounded-[16px] bg-[#D6DE211A] p-6 sm:p-10 w-full flex flex-col "
          >
            <h3 className="text-primary text-base md:text-[24px] font-medium">
              {item.title}
            </h3>
           
          </div>
        ))}
      </div>
    </div>
  );
}
