import React from "react";
import { SectionTitles, BenefitsSection } from "../../components/landingPage";

export default function NodesCommunitySection({
  title = "The Nodes Community",
  description = "Lorem ipsum dolor sit amet consectetur.",
}) {
  return (
    <div className="landingPageMainDiv pt-[60px] sm:pt-[108px]">
      <div className="mx-auto text-center">
        <SectionTitles
          title={title}
          description={description}
        />
      </div>
      <BenefitsSection />
    </div>
  );
}
