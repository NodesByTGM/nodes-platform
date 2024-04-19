import React, { useState } from "react";
import { SectionTitles } from "../../components/landingPage";

export default function FeaturesSection() {
  const propositions = [
    {
      id: 1,
      title: "Value propositon 1",
      description:
        " Lorem ipsum dolor sit amet consectetur. Risus egestas aliquet accumsan libero ipsum facilisis nibh.",
    },
    {
      id: 2,
      title: "Value propositon 2",
      description:
        " Lorem ipsum dolor sit amet consectetur. Risus egestas aliquet accumsan libero ipsum facilisis nibh.",
    },

    {
      id: 3,
      title: "Value propositon 3",
      description:
        " Lorem ipsum dolor sit amet consectetur. Risus egestas aliquet accumsan libero ipsum facilisis nibh.",
    },
    {
      id: 4,
      title: "Value propositon 4",
      description:
        " Lorem ipsum dolor sit amet consectetur. Risus egestas aliquet accumsan libero ipsum facilisis nibh.",
    },
  ];
  const [selected, setSelected] = useState(propositions[0]);
  return (
    <div className="landingPageMainDiv py-[108px]">
      <div className="mx-auto text-center">
        <SectionTitles
          title="Something catchy about the features"
          description="Lorem ipsum dolor sit amet consectetur."
        />
      </div>
      <div className="flex gap-20 pt-20">
        <div className="max-w-[450px]">
          <div className="flex flex-col text-[#212121]">
            {propositions.map((item) => (
              <div
                onClick={() => setSelected(item)}
                key={item.title}
                className={`border-l ${
                  selected.id === item.id
                    ? "border-[#212121] border-l-[4px]"
                    : " border-[#D6DE21] pt-[61px]"
                } flex flex-col gap-2 pl-6`}
              >
                <span className="text-[24px] font-medium">{item.title}</span>
                {selected.id === item.id ? (
                  <span className="font-normal text-[20px]">
                    {item.description}
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
            <img src="/landingPageImg/LandingPageFeaturesImg.png" alt="" className="" />
        </div>
      </div>
    </div>
  );
}
