import React from "react";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Benefit 1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Risus egestas aliquet accumsan libero ipsum facilisis nibh. ",
    },
    {
      title: "Benefit 2",
      description:
        "Lorem ipsum dolor sit amet consectetur. Risus egestas aliquet accumsan libero ipsum facilisis nibh. ",
    },
    {
      title: "Benefit 3",
      description:
        "Lorem ipsum dolor sit amet consectetur. Risus egestas aliquet accumsan libero ipsum facilisis nibh. ",
    },
  ];
  return (
    <div className="pt-20 pb-[120px] flex gap-6">
      <div className="">
        <img src="/landingPageImg/BenefitsSectionImg.png" alt="" className="" />
      </div>
      <div className="grid  gap-6">
        {benefits.map((item) => (
          <div
            key={item.title}
            className="rounded-[16px] bg-[#D6DE211A] p-10 w-full flex flex-col gap-4"
          >
            <h3 className="text-primary text-[24px] font-medium">
              {item.title}
            </h3>
            <span className="text-primary text-base font-normal">
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
