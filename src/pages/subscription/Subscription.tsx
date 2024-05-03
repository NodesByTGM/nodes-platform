/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { SubSection, ChoosePlan } from "../../components";
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
    const plan = user?.subscription?.plan?.toLowerCase();
    const tenor = user?.subscription?.tenor?.toLowerCase();
    if (plan === "pro") {
      if (tenor === "monthly") {
        return planObj.proMonthly;
      }
      return planObj.pro;
    }

    if (plan === "business") {
      if (tenor === "monthly") {
        return planObj.businessMonthly;
      }
      return planObj.business;
    }
  };
  return (
    <div className="flex flex-col gap-10">
      <pre className="text-blue-400 hidden">
        {JSON.stringify(user?.subscription, null, 2)}
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
