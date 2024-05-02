import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { ScrollAnimationDelay } from "../../utilities/constants";
import {
  LandingPageCTA,
  LandingPageCarousel,
  SkillsSection,
  FeaturesSection,
  NodesCommunitySection,
  // CTASection,
  GetStartedSection,
} from "../../components/landingPage";
export default function LandingPage() {
  return (
    <div className="min-h-[100vh] ">
      <div className="">
        <LandingPageCTA />

        <LandingPageCarousel />

        <ScrollAnimation animateIn="fadeIn" delay={ScrollAnimationDelay}>
          <SkillsSection />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" delay={ScrollAnimationDelay}>
          <FeaturesSection />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" delay={ScrollAnimationDelay}>
          <NodesCommunitySection />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" delay={ScrollAnimationDelay}>
          <GetStartedSection />
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="fadeIn" delay={ScrollAnimationDelay}>
          <CTASection />
        </ScrollAnimation> */}
      </div>
    </div>
  );
}
