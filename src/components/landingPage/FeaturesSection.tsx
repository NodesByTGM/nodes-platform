import React, { useState } from "react";
import { SectionTitles } from "../../components/landingPage";
import { WebsiteCopyWrite } from "../../utilities/constants";

export default function FeaturesSection() {
  const propositions =
    WebsiteCopyWrite.LandingPage.FeaturesSection.Propositions;
  const [selected, setSelected] = useState(propositions[0]);
  return (
    <div className="landingPageMainDiv pt-[108px]">
      <div className="mx-auto text-center">
        <SectionTitles
          title={WebsiteCopyWrite.LandingPage.FeaturesSection.Header}
          description={WebsiteCopyWrite.LandingPage.FeaturesSection.Description}
        />
      </div>
      <div className="flex gap-20 py-20">
        <div className="mx-auto lg:mx-0 max-w-[450px]">
          <div className="flex flex-col text-[#212121]">
            {propositions.map((item) => (
              <div className={``}>
                <div
                  onClick={() => setSelected(item)}
                  className={`border-l ${
                    selected.id === item.id
                      ? "border-[#212121] border-l-[4px] pb-[8px]"
                      : " border-[#D6DE21] pb-[61px]"
                  } flex flex-col gap-2 pl-6 cursor-pointer`}
                >
                  <span className="text-[18px] md:text-[24px] font-medium">
                    {item.title}
                  </span>
                  {selected.id === item.id ? (
                    <span className="font-normal text-[16px] md:text-[20px]">
                      {item.description}
                    </span>
                  ) : null}
                </div>
                {selected.id === item.id ? <div className="h-16 border-[#D6DE21] pb-[61px] border-l"></div> : null}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block flex-1">
          <img
            src="/landingPageImg/DontWasteYourTalent.png"
            alt=""
            className=""
          />
        </div>
      </div>
    </div>
  );
}
