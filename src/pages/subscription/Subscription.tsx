import React from "react";
import { Button } from "../../components";
import { CheckedIcon } from "../../components/dashboard/SubscriptionAndBilling";
const SubSection = ({ plan }) => {
  return (
    <div className="grid grid-cols-2 p-6   border border-[#D6D6D6] rounded-lg        ">
      <div className="flex-1 flex flex-col border-r border-px border-[#D6D6D6] pr-8 h-full">
        <div className="flex justify-between flex-1">
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <span className="font-medium text-base text-[#00100B] mr-[7px]">
                <span className="">{plan?.type}</span>
              </span>

              {plan?.subPlan && (
                <div className="bg-[#F1F7F5] rounded-[20px] p-2 font-normal text-xs">
                  <span className="">{plan?.subPlan}</span>
                </div>
              )}
            </div>
            <span className="font-normal text-sm text-[#646464]">
              {" "}
              {plan?.supportingText}
            </span>
          </div>

          <div className="text-primary font-medium text-[20px]  ml-6 ">
            <span className="flex items-end gap-px">
              {plan?.amount}{" "}
              <span className="text-base font-normal text-[#646464]">
                {plan?.tenor}
              </span>{" "}
            </span>
          </div>
        </div>
        <div onClick={() => plan.action()} className="mt-auto">
          {plan?.type?.toLowerCase() == "free" ? (
            <button className="flex items-center justify-center text-primary font-medium text-sm rounded h-[48px] w-full bg-[#EFEFEF]">
              {" "}
              Current Plan
            </button>
          ) : (
            <Button className="w-full">Upgrade plan</Button>
          )}
        </div>
      </div>
      <div className="flex-1 pl-8 h-full">
        <div className="flex flex-col gap-6">
          <span className="font-normal text-base text-[#212121]">
            Features:
          </span>

          <div className="grid grid-cols-2 gap-6">
            {plan?.features?.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckedIcon
                  free={plan?.type?.toLowerCase() == "free" ? true : false}
                />
                <span className="font-notmel text-sm text-[#000000]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Subscription() {
  const plans = [
    {
      type: "Free",
      subPlan: "Current plan",
      amount: "Free",
      tenor: null,
      supportingText: "One sentence supporting text",
      features: [
        "Community Engagement",
        "Networking Opportunities",
        "Stay Informed on Creative Trends",
      ],
      action: () => {},
    },
    {
      type: "Pro",
      subPlan: "Recommended plan",
      amount: "₦7,900",
      tenor: "/month",
      supportingText: "One sentence supporting text",
      features: [
        "Enhanced Visibility",
        "Access to Premium Jobs 1",
        "Expanded Project Showcase",
        "Advanced Analytics and Insights",
        "Access to GridTools Discovery Pack (Free)",
      ],
      action: () => {},
    },
    {
      type: "Business",
      subPlan: null,
      amount: "₦19,800",
      tenor: "/month",
      supportingText: "One sentence supporting text",
      features: [
        "Premium Talent Pool Access",
        "Featured Job Listings",
        "Analytics and Performance Metrics",
        "Access to GridTools Discovery Pack (Free)",
        "Promotion and Marketing Opportunities",
      ],
      action: () => {},
    },
  ];
  return (
    <div className="flex flex-col gap-10">
      <h3 className="font-medium text-[#212121] text-[20px]">
        Subscriptions and Billing
      </h3>

      <div className="flex flex-col gap-6">
        {plans?.map((plan, index) => (
          <div key={index} className="">
            {" "}
            <SubSection plan={plan} />
          </div>
        ))}
      </div>
    </div>
  );
}
