import React from "react";
import { HeroSectionPlanCTA } from "../../components/landingPage";
import { WebsiteCopyWrite } from "../../utilities/constants";

import { TipsSection, GetStartedSection } from "../../components/landingPage";
import ScrollAnimation from "react-animate-on-scroll";
import { ScrollAnimationDelay } from "../../utilities/constants";
export default function TalentPage() {
  return (
    <div className="min-h-[100vh] ">
      <HeroSectionPlanCTA
        title={WebsiteCopyWrite.TalentPage.HeroSectionPlanCTA.Title}
        description={WebsiteCopyWrite.TalentPage.HeroSectionPlanCTA.Description}
      />

      <ScrollAnimation animateIn="fadeIn" delay={ScrollAnimationDelay}>
        <TipsSection
          title={WebsiteCopyWrite.TalentPage.TipsSection.Title}
          description={WebsiteCopyWrite.TalentPage.TipsSection.Description}
          tips={WebsiteCopyWrite.TalentPage.TipsSection.Tips}
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" delay={ScrollAnimationDelay}>
        <GetStartedSection
          header={WebsiteCopyWrite.TalentPage.GetStartedSection.Title}
          description={
            WebsiteCopyWrite.TalentPage.GetStartedSection.Description
          }
          descriptionClass="max-w-[505px]"
        />
      </ScrollAnimation>
    </div>
  );
}
