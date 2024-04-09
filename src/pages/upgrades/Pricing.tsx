import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PricingCard } from "../../components";
import { pricing } from "../../utilities";
export default function Pricing() {
  const navigate = useNavigate();
  const paymentPlans = [
    { id: "yearly billing", title: "Yearly billing", type: "yearly" },

    { id: "monthly billing", title: "Monthly billing", type: "monthly" },
  ];
  const [selected, setSelected] = useState(paymentPlans[1]);
  return (
    <div className="auth-onboarding w-full min-h-[100vh] flex flex-col pb-[122px] relative">
      {/* <pre className="text-blue-500">{JSON.stringify(selected, null, 2)}</pre> */}
      <div className="fixed top-[-140px] right-[-140px] rotate-[320deg]">
        <img src="/bg-node-yellow.svg" alt="" className="" />
      </div>

      <div className="py-6 pricing-padding z-20">
        <img
          onClick={() => navigate("/")}
          src="/nodes-logo-black.svg"
          alt="logo"
          className="cursor-pointer h-[32px] w-[123.49px]"
        />
      </div>
      {/* <div className="z-20 pricing-padding w-full mt-[32px] mb-[36px] text-[#212121] flex flex-col gap-4 justify-center items-start md:items-center">
        <span className="font-medium text-base">PRICING</span>
        <span className="font-medium text-[32px]">
          Thank you for choosing Nodes!
        </span>

        <span className="font-normal text-base">
          Pricing plans for every budget
        </span>
      </div> */}

      <div className="z-20 flex flex-col xl:flex-row pricing-padding w-full justify-between ">
        <div className="hidden xl:block">
          {" "}
          <ChoosePlan
            selected={selected}
            setSelected={setSelected}
            paymentPlans={paymentPlans}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="z-20  w-full mt-[32px] mb-[36px] text-[#212121] flex flex-col gap-4 justify-center items-start md:items-center">
            <span className="font-medium text-base">PRICING</span>
            <span className="font-medium text-[32px]">
              Thank you for choosing Nodes!
            </span>

            <span className="font-normal text-base">
              Pricing plans for every budget
            </span>
          </div>

          <div className="block xl:hidden">
          {" "}
          <ChoosePlan
            selected={selected}
            setSelected={setSelected}
            paymentPlans={paymentPlans}
          />
        </div>
          <div className="grid  grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-[4px] sm:min-w-max">
            <PricingCard info={pricing.standard} paymentPlan={selected.type} />
            <PricingCard info={pricing.pro} paymentPlan={selected.type} />
            <PricingCard info={pricing.business} paymentPlan={selected.type} />
          </div>
        </div>

        <div className="hidden   xl:block w-[140px]"></div>
      </div>
      <div className="fixed bottom-[-0px] left-[-40px] rotate-[320deg]">
        <img src="/bg-node-yellow.svg" alt="" className="" />
      </div>
    </div>
  );
}

function ChoosePlan({ selected, setSelected, paymentPlans }) {
  return (
    <div className="xl:mt-[204px] mb-8 text-[#212121] mr-6 flex flex-col gap-6">
      <span className="font-medium text-[24px] text-nowrap">Choose Plan</span>
      <div>
        <div className="space-y-4">
          {paymentPlans.map((paymentPlan) => (
            <div key={paymentPlan.id} className="flex items-center">
              <div
                onClick={() => setSelected(paymentPlan)}
                className="cursor-pointer flex gap-4"
              >
                <div
                  className={`${
                    selected.id == paymentPlan.id
                      ? "border-[5px] border-[#212121] bg-[#D6DE21]"
                      : "border-[#D6D6D6]"
                  } rounded-full border  h-4 w-4`}
                ></div>
                <span className="text-[#212121] font-medium text-sm">
                  {paymentPlan.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
