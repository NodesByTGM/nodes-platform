import React from "react";
import { HeroSectionPlanCTA } from "../../components/landingPage";
import {
  // NodesCommunitySection,
  // CTASection,
  TipsSection,
  GetStartedSection,
} from "../../components/landingPage";
import { WebsiteCopyWrite } from "../../utilities/constants";

import ScrollAnimation from "react-animate-on-scroll";
import { ScrollAnimationDelay } from "../../utilities/constants";
export default function BusinessPage() {
  return (
    <div className="min-h-[100vh] ">
      <HeroSectionPlanCTA
        title={WebsiteCopyWrite.BusinessPage.HeroSectionPlanCTA.Title}
        description={
          WebsiteCopyWrite.BusinessPage.HeroSectionPlanCTA.Description
        }
      />

      <ScrollAnimation animateIn="fadeIn" delay={ScrollAnimationDelay}>
        <TipsSection
         title={WebsiteCopyWrite.BusinessPage.TipsSection.Title}
         description={
           WebsiteCopyWrite.BusinessPage.TipsSection.Description
         }
         tips={WebsiteCopyWrite.BusinessPage.TipsSection.Tips}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" delay={ScrollAnimationDelay}>
        <GetStartedSection
          header={WebsiteCopyWrite.BusinessPage.GetStartedSection.Title}
          description={
            WebsiteCopyWrite.BusinessPage.GetStartedSection.Description
          }
          descriptionClass="max-w-[505px]"
        />
      </ScrollAnimation>

      {/* <ScrollAnimation animateIn="fadeIn" delay={ScrollAnimationDelay}>
        <CTASection />
      </ScrollAnimation> */}
    </div>
  );
}
