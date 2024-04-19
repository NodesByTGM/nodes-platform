import React from "react";
import { HeroSectionPlanCTA } from "../../components/landingPage";

export default function BusinessPage() {
  return (
    <div className="min-h-[100vh] ">
      <div className="bg-[#062B28]">
        <div className="pt-[79px] ">
          <HeroSectionPlanCTA
            textColor="text-white"
            solidBtnColor="!bg-white !text-primary"
            outlineBtnColor="border-white text-white"
          />
        </div>
      </div>
    </div>
  );
}
