import React from "react";
import { HeroSectionPlanCTA } from "../../components/landingPage";
import {
  NodesCommunitySection,
  CTASection,
  GetStartedSection,
} from "../../components/landingPage";
import ScrollAnimation from "react-animate-on-scroll";
import { ScrollAnimationDelay } from "../../utilities/constants";
export default function BusinessPage() {
  return (
    <div className="min-h-[100vh] ">
      <HeroSectionPlanCTA />

      <ScrollAnimation animateIn="fadeIn" delay={ScrollAnimationDelay}>
        <NodesCommunitySection
          title="Lorem ipsum dolor sit amet consectetur."
          description="Lorem ipsum dolor sit amet consectetur."
        />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" delay={ScrollAnimationDelay}>
        <GetStartedSection />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" delay={ScrollAnimationDelay}>
        <CTASection />
      </ScrollAnimation>
    </div>
  );
}
