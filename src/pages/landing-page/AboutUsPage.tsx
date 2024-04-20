import React from "react";
import {
  CTASection,
  GetStartedSection,
  AboutUsHeroSection,
  OurStorySection,
  OurvaluesSection,
  OurTeamSection,
} from "../../components/landingPage";
import ScrollAnimation from "react-animate-on-scroll";
import { ScrollAnimationDelay } from "../../utilities/constants";

export default function AboutUsPage() {
  return (
    <div className="min-h-[100vh] ">
      <AboutUsHeroSection />

      <ScrollAnimation animateIn="fadeIn" delay={ScrollAnimationDelay}>
        <OurStorySection />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" delay={ScrollAnimationDelay}>
        <OurvaluesSection />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" delay={ScrollAnimationDelay}>
        <OurTeamSection />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" delay={ScrollAnimationDelay}>
        <CTASection />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" delay={ScrollAnimationDelay}>
        <GetStartedSection />
      </ScrollAnimation>
    </div>
  );
}
