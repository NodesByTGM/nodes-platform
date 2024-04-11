/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { SubSection } from "../../components";
import { planObj } from "../../utilities/constants";
import { useSubscriptionContext } from "../../context/hooks";

export default function Subscription() {
  const { user } = useSubscriptionContext();
  const paymentPlans = [
    { id: "yearly billing", title: "Yearly billing", type: "yearly" },

    { id: "monthly billing", title: "Monthly billing", type: "monthly" },
  ];
  const [selected, setSelected] = useState(paymentPlans[1]);
  const handleCurrentPlan = () => {
    if (user?.subscription?.plan?.toLowerCase() === "pro") {
      return planObj.pro;
    }

    if (user?.subscription?.plan?.toLowerCase() === "business") {
      return planObj.business;
    }
  };
  return (
    <div className="flex flex-col gap-10">
      <pre className="text-blue-400 hidden">
        {/* {JSON.stringify(user?.subscription, null, 2)} */}
        {/* {  JSON.stringify(handleCurrentPlan(), null, 2)} */}
      </pre>
      <div className="flex flex-col gap-2 border-b border-[#D6D6D6] pb-[24px]">
        {" "}
        <h3 className="font-semibold text-[#212121] text-[20px]">
          Subscriptions and Billing
        </h3>
        <span className="text-[#212121] font-normal text-base">
          Choose the right plan for you
        </span>
      </div>

      <ChoosePlan
        selected={selected}
        setSelected={setSelected}
        paymentPlans={paymentPlans}
      />
      {/* {JSON.stringify(selected.type.toLowerCase() === "yearly")} */}
      <div className="flex flex-col gap-6">
        {!user?.subscription ? (
          <SubSection
            plan={planObj.standard}
            light={true}
            isCurrentPlan
            isCurrentPlanPayment
          />
        ) : (
          <SubSection
            plan={handleCurrentPlan()}
            light={true}
            isCurrentPlan
            isCurrentPlanPayment
          />
        )}
        {selected.type.toLowerCase() === "yearly" ? (
          <SubSection plan={planObj.pro} />
        ) : (
          <SubSection plan={planObj.proMonthly} />
        )}

        {selected.type.toLowerCase() === "yearly" ? (
          <SubSection plan={planObj.business} />
        ) : (
          <SubSection plan={planObj.businessMonthly} />
        )}
      </div>
    </div>
  );
}

function ChoosePlan({ selected, setSelected, paymentPlans }) {
  return (
    <div className=" mb-2 text-[#212121] mr-6 flex flex-col gap-6">
      <span className="hidden font-medium text-[18px] text-nowrap">
        Choose Plan
      </span>
      <div>
        <div className="flex gap-6 items-center">
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
