import React from "react";
import { SectionTitles, BenefitsSection } from "../../components/landingPage";
import { WebsiteCopyWrite } from "../../utilities/constants";

export default function NodesCommunitySection({
  title =  WebsiteCopyWrite.LandingPage.NodesCommunitySection.Header,
  description = WebsiteCopyWrite.LandingPage.NodesCommunitySection.Description,
}) {
  return (
    <div className="landingPageMainDiv pt-[60px] sm:pt-[108px]">
      <div className="mx-auto text-center">
        <SectionTitles
          title={title}
          description={description}
          descriptionClass='max-w-[580px] mx-auto'
        />
      </div>
      <BenefitsSection />
    </div>
  );
}
