import React from "react";

const TH = ({ name }) => {
  return (
    <th
      scope="col"
      className="uppercase pt-8 pb-4 px-6 text-left text-sm font-medium text-[#757575] "
    >
      {name}
    </th>
  );
};

const TD = ({ text, className }: { text: string; className?: string }) => {
  return (
    <td
      className={`${className} py-8 px-6 text-left text-sm font-normal text-[#00100B] `}
    >
      {text}
    </td>
  );
};
export default function BillingHistory() {
  const subscriptionPlans = [
    {
      id: 1,
      planType: "Business",
      date: "Fri, Aug 25, 2023",
      amount: "$2,000",
      status: "Active",
    },
  ];
  return (
    <div className={" border border-[#D6D6D6] rounded-lg  bg-[#ffffff]"}>
      <div className="">
        <div className="p-6 flex-auto border-[#ECECEB] border-b ">
          <h1 className="text-base font-medium leading-6 text-[#212121]">
            Billing History
          </h1>
          <p className="mt-2 text-sm text-[#757575]">
            See all the details of everything we have billed you for.
          </p>
        </div>

        <div className="">
          <table className="min-w-full divide-y divide-[#D6D6D6]">
            <thead>
              <tr>
                <TH name="plan" />
                <TH name="Billing date & time" />
                <TH name="Amount" />
                <TH name="Status" />
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D6D6D6]">
              {subscriptionPlans.map((plan) => (
                <tr key={plan.id}>
                  <TD text={plan.planType} />
                  <TD text={plan.date} />
                  <TD text={plan.amount} />
                  <TD text={plan.status} className="!text-primary !font-medium" />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
