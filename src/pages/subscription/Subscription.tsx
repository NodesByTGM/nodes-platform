/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button } from "../../components";
import { CheckedIcon } from "../../components/dashboard/SubscriptionAndBilling";
import { useNavigate } from "react-router-dom";
import { plans } from "../../utilities/constants";
export const SubSection = ({
  plan,
  light,
  viewOthers,
}: {
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
        {!viewOthers ? (
          <div onClick={() => plan.action(navigate)} className="mt-[53px]">
            {plan?.type?.toLowerCase() == "free" ? (
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
    </div>
  );
};

export default function Subscription() {
  return (
    <div className="flex flex-col gap-10">
      <h3 className="font-medium text-[#212121] text-[20px]">
        Subscriptions and Billing
      </h3>

      <div className="flex flex-col gap-6">
        {plans?.map((plan, index) => (
          <div key={index} className="">
            {" "}
            <SubSection
              plan={plan}
              light={plan?.type?.toLowerCase() == "free" ? true : false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
