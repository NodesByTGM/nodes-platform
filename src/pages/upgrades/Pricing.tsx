import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PricingCard } from "../../components";
import { pricing } from "../../utilities";
export default function Pricing() {
  const navigate = useNavigate();
  const paymentPlans = [
    { id: "yearly billing", title: "Yearly billing" },

    { id: "monthly billing", title: "Monthly billing" },
  ];
  const [selected, setSelected] = useState(paymentPlans[1]);
  return (
    <div className="bg-primary w-full min-h-[100vh] flex flex-col pb-[210px]">
      <div className="py-6 pricing-padding">
        <img
          onClick={() => navigate("/")}
          src="/logo-white-lg.png"
          alt="logo"
          className="cursor-pointer h-[32px] w-[123.49px]"
        />
      </div>
      <div className="pricing-padding w-full mt-[32px] mb-[36px] text-white flex flex-col gap-4 justify-center items-start md:items-center">
        <span className="font-medium text-base">PRICING</span>
        <span className="font-medium text-[32px]">
          Thank you for choosing Nodes!
        </span>

        <span className="font-normal text-base">
          Pricing plans for every budget
        </span>
      </div>

      <div className="flex flex-col xl:flex-row pricing-padding w-full justify-between ">
        <div className="mb-8 text-white mr-6 flex flex-col gap-6">
          <span className="font-medium text-[24px] text-nowrap">
            Choose Plan
          </span>
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
                          ? "border-[5px] border-white"
                          : "border-[#D6D6D6]"
                      } rounded-full border  h-4 w-4`}
                    ></div>
                    <span className="text-white font-medium text-sm">
                      {paymentPlan.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid  grid-cols-1 xl:grid-cols-3 gap-[2px] xl:min-w-[806px]">
          <PricingCard info={pricing.standard} />
          <PricingCard info={pricing.pro} />
          <PricingCard info={pricing.business} />
        </div>

        <div className="hidden   xl:block w-[140px]"></div>
      </div>
    </div>
  );
}
