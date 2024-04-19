import React from "react";
import {
  LandingPageCTA,
  LandingPageCarousel,
  SkillsSection,
  FeaturesSection,
  NodesCommunitySection,
  CTASection,
  GetStartedSection,
} from "../../components/landingPage";
export default function LandingPage() {
  return (
    <div className="min-h-[100vh] ">
      <div className="">
        <LandingPageCTA />
        <LandingPageCarousel />
        <SkillsSection />
        <FeaturesSection />
        <NodesCommunitySection />
        <GetStartedSection />
        <CTASection />
      </div>
    </div>
  );
}
