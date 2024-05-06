/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Back, SubSection } from "../../components";
import { planObj } from "../../utilities/constants";
import { useParams, useSearchParams } from "react-router-dom";
import BillingHistory from "./BillingHistory";
import { useSubscriptionContext } from "../../context/hooks";

export default function MakePayment() {
  const { user } = useSubscriptionContext();

  const { plan } = useParams();
  const [searchParams] = useSearchParams();
  const isCurrentPlan = searchParams.get("isCurrentPlan");
  const [paid, setPaid] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  function findObject(param) {
    for (const key in planObj) {
      if (planObj[key].param?.toLowerCase() === param?.toLowerCase()) {
        return planObj[key];
      }
    }
    return planObj.standard; // Return null if no object with param === 'pro' is found
  }

  useEffect(() => {
    const myPlan = findObject(plan);
    setSelectedPlan(myPlan);
  }, [plan]);

  useEffect(() => {
    if (
      user?.subscription?.plan?.toLowerCase() == "pro" ||
      user?.subscription?.plan?.toLowerCase() == "business"
    ) {
      setPaid(true);
    }
  }, [user]);
  return (
    <div>
      <Back link="/subscription" className="text-[#212121] mb-6 " />

      <div className=" grid-cols-2 gap-8 hidden">
        <div className="">
          {" "}
          <pre className="">{JSON.stringify(user, null, 2)}</pre>
        </div>
        <pre className="">{JSON.stringify(selectedPlan, null, 2)}</pre>
      </div>

      <div className="flex flex-col">
        <h3 className="mb-10 font-medium text-[#212121] text-[20px]">
          Proceed with payment
        </h3>

        <div className="flex flex-col gap-6 mb-6">
          {/* {isCurrentPlan} */}
          <div className="">
            {" "}
            <SubSection
              viewOthers
              light={true}
              plan={selectedPlan}
              paymentPlan={plan?.toLowerCase() !== "free" ? plan : null}
              user={user}
              isCurrentPlanPayment={
                isCurrentPlan?.toLowerCase() === "true" ? true : false
              }
            />
          </div>
        </div>

        <div className="">
          {paid ? (
            <div className="hidden">
              <BillingHistory />{" "}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
