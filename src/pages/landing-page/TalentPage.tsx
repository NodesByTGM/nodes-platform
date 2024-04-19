import React from "react";
import { HeroSectionPlanCTA } from "../../components/landingPage";

export default function TalentPage() {
  return (
    <div className="min-h-[100vh]">
      <div className="">
        {" "}
        <div className="pt-[79px]">
          <HeroSectionPlanCTA
            textColor="text-primary"
            solidBtnColor="!bg-customprimary !text-white"
            outlineBtnColor="border-customprimary text-customprimary"
          />
        </div>
      </div>
    </div>
  );
}
