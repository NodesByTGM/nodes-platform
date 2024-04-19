import React from "react";
import {
  CTASection,
  GetStartedSection,
  AboutUsHeroSection,
  OurStorySection,
  OurvaluesSection,
  OurTeamSection,
} from "../../components/landingPage";
export default function AboutUsPage() {
  return (
    <div className="min-h-[100vh] ">
      <AboutUsHeroSection />
      <OurStorySection />
      <OurvaluesSection />
      <OurTeamSection />
      <CTASection />
      <GetStartedSection />
    </div>
  );
}
