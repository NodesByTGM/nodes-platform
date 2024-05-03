import React from "react";
import {
  CTASection,
  GetStartedSection,
  OurStorySection,
} from "../../components/landingPage";
import ScrollAnimation from "react-animate-on-scroll";
import { ScrollAnimationDelay } from "../../utilities/constants";
import { WebsiteCopyWrite } from "../../utilities/constants";
import { addBreakToString } from "../../utilities/constantReactItems";

export default function AboutUsPage() {

  return (
    <div className="min-h-[100vh] ">
      <ScrollAnimation animateIn="fadeIn" delay={ScrollAnimationDelay}>
        <OurStorySection />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" delay={ScrollAnimationDelay}>
        <CTASection faq={WebsiteCopyWrite.AboutUsPage.CTASection.FAQ} />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" delay={ScrollAnimationDelay}>
        <GetStartedSection
          header={addBreakToString(
            WebsiteCopyWrite.AboutUsPage.GetStartedSection.Title,
            24
          )}
          description={
            WebsiteCopyWrite.AboutUsPage.GetStartedSection.Description
          }
          descriptionClass="max-w-[505px]"
        />
      </ScrollAnimation>
    </div>
  );
}
