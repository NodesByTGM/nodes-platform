import React from "react";
import { HeroSectionPlanCTA } from "../../components/landingPage";
import {
  NodesCommunitySection,
  CTASection,
  GetStartedSection,
} from "../../components/landingPage";
export default function TalentPage() {
  return (
    <div className="min-h-[100vh] ">
      <HeroSectionPlanCTA />

      <NodesCommunitySection
        title="Lorem ipsum dolor sit amet consectetur."
        description="Lorem ipsum dolor sit amet consectetur."
      />
      <GetStartedSection />
      <CTASection />
    </div>
  );
}
