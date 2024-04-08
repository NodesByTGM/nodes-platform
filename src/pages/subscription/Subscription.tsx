/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button } from "../../components";
import { CheckedIcon } from "../../components/dashboard/SubscriptionAndBilling";
import { useNavigate } from "react-router-dom";
import { plans } from "../../utilities/constants";
import { useSubscriptionContext } from "../../context/hooks";

export default function Subscription() {
  const { user } = useSubscriptionContext();
  const handleCurrentPlan = () => {
    if (user.subscription.plan.toLowerCase() === "pro") {
      return plans.find((plan) => {
        return plan.type.toLowerCase() === "pro";
      });
    }

    if (user.subscription.plan.toLowerCase() === "pro") {
      return plans.find((plan) => {
        return plan.type.toLowerCase() === "business";
      });
    }
  };
  return (
    <div className="flex flex-col gap-10">
      <pre className="text-blue-400">
        {/* {JSON.stringify(user.subscription, null, 2)} */}
        {/* {  JSON.stringify(handleCurrentPlan(), null, 2)} */}
      </pre>
      <h3 className="font-medium text-[#212121] text-[20px]">
        Subscriptions and Billing
      </h3>

      <div className="flex flex-col gap-6">
        {/* <SubSection
                plan={plan}
                light={plan?.type?.toLowerCase() == "free" ? true : false}
              /> */}
        {plans?.map((plan, index) => (
          <div key={index} className="">
            {" "}
            {index !== 0 ? (
              <SubSection
                plan={plan}
                light={plan?.type?.toLowerCase() == "free" ? true : false}
              />
            ) : (
              <SubSection plan={handleCurrentPlan()} light={true} isCurrentPlan />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export const SubSection = ({
  isCurrentPlan = false,
  paymentPlan,
  plan,
  light,
  viewOthers,
}: {
  isCurrentPlan?: boolean;
  paymentPlan?: any;
  plan: any;
  light?: boolean;
  viewOthers?: boolean;
}) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#ffffff] grid grid-cols-2 p-6   border border-[#D6D6D6] rounded-lg ">
      <div className="flex-1 flex flex-col border-r border-px border-[#D6D6D6] pr-8 h-full">
        <div className="flex justify-between flex-1">
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <span className="font-medium text-base text-[#00100B] mr-[7px]">
                <span className="capitalize">{plan?.pricing?.name}</span>
              </span>

              {plan?.subPlan && (
                <div className="bg-[#F1F7F5] rounded-[20px] p-2 font-normal text-xs">
                  <span className="">{`${isCurrentPlan ? 'Current plan' : plan?.subPlan}`}</span>
                </div>
              )}
            </div>
            <span className="font-normal text-sm text-[#646464]">
              {" "}
              {plan?.supportingText}
            </span>
          </div>

          <div className="text-primary font-medium text-[20px]  ml-6 ">
            {!paymentPlan ? (
              <span className="flex items-end gap-px">
                {plan?.pricing?.monthlyPayment}{" "}
                <span className="text-base font-normal text-[#646464]">
                  {plan?.pricing?.monthlyDuration}
                </span>{" "}
              </span>
            ) : (
              <span className="flex items-end gap-px">
                {/* {paymentPlan}
                {JSON.stringify(
                  { isMonthly: paymentPlan?.includes("monthly") },
                  null,
                  2
                )} */}
                {/* {plan} */}
                {paymentPlan?.includes("monthly")
                  ? plan?.pricing?.monthlyPayment
                  : plan?.pricing?.payment}{" "}
                <span className="text-base font-normal text-[#646464]">
                  {paymentPlan?.includes("monthly")
                    ? plan?.pricing?.monthlyDuration
                    : plan?.pricing?.yearlyDuration}
                </span>{" "}
              </span>
            )}
          </div>
        </div>
        {!viewOthers ? (
          <div
            onClick={() => plan.monthlyAction(navigate)}
            className="mt-[53px]"
          >
            {plan?.type?.toLowerCase() == "free" || isCurrentPlan ? (
              <button className="flex items-center justify-center text-primary font-medium text-sm rounded h-[48px] w-full bg-[#EFEFEF]">
                {" "}
                Current Plan
              </button>
            ) : (
              <Button className="w-full">Upgrade plan</Button>
            )}
          </div>
        ) : (
          <button className="mt-[53px] flex items-center justify-center text-primary font-medium text-sm rounded h-[48px] w-full bg-[#EFEFEF]">
            {" "}
            View other plans
          </button>
        )}
      </div>
      <div className="flex-1 pl-8 h-full">
        <div className="flex flex-col gap-6">
          <span className="font-normal text-base text-[#212121]">
            Features:
          </span>

          <div className="grid grid-cols-2 gap-6">
            {plan?.features?.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckedIcon light={light} />
                <span className="font-notmel text-sm text-[#000000]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden w-[400px] max-w-[400px] col-span-1 text-wrap">
        {" "}
        <pre className={"flex max-w-[40px] text-wrap"}>
          {JSON.stringify(plan?.pricing)}
        </pre>
      </div>
    </div>
  );
};
