/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Back } from "../../components";
import { plans } from "../../utilities/constants";
import { useParams } from "react-router-dom";
import Payment from "./Payment";
import { SubSection } from "./Subscription";
import BillingHistory from "./BillingHistory";

export default function MakePayment() {
  const { plan } = useParams();
  const [paid] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  useEffect(() => {
    const filteredPlan = plans.find(
      (planOption) =>
        planOption.pricing.name.toLowerCase() === plan?.toLowerCase() ||
        planOption.pricing.monthlyName.toLowerCase() === plan?.toLowerCase()
    );
    setSelectedPlan(filteredPlan);
  }, [plan]);
  return (
    <div>
      <Back link="/subscription" className="text-[#212121] mb-6 " />

      {/* <pre className="">{JSON.stringify(selectedPlan, null, 2)}</pre> */}

      <div className="flex flex-col">
        <h3 className="mb-10 font-medium text-[#212121] text-[20px]">
          Proceed with payment{" "}
        </h3>

        <div className="flex flex-col gap-6 mb-6">
          <div className="">
            {" "}
            <SubSection
              viewOthers
              light={true}
              plan={selectedPlan}
              paymentPlan={plan?.toLowerCase() !== "free" ? plan : null}
            />
          </div>
        </div>

        <div className="">{paid ? <BillingHistory /> : <Payment />}</div>
      </div>
    </div>
  );
}
