import React from "react";
import {
  CTASection,
  GetStartedSection,
  // AboutUsHeroSection,
  OurStorySection,

  // OurTeamSection,
} from "../../components/landingPage";
import ScrollAnimation from "react-animate-on-scroll";
import { ScrollAnimationDelay } from "../../utilities/constants";
import { WebsiteCopyWrite } from "../../utilities/constants";

export default function AboutUsPage() {
  return (
    <div className="min-h-[100vh] ">
      {/* <AboutUsHeroSection /> */}

      <ScrollAnimation animateIn="fadeIn" delay={ScrollAnimationDelay}>
        <OurStorySection />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" delay={ScrollAnimationDelay}>
        <CTASection faq={WebsiteCopyWrite.AboutUsPage.CTASection.FAQ} />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" delay={ScrollAnimationDelay}>
        <GetStartedSection
          header={WebsiteCopyWrite.AboutUsPage.GetStartedSection.Title}
          description={
            WebsiteCopyWrite.AboutUsPage.GetStartedSection.Description
          }
          descriptionClass="max-w-[505px]"
        />
      </ScrollAnimation>
    </div>
  );
}
