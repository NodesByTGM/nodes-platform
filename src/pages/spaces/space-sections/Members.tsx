import React from "react";
import { SearchComponent } from "../../../components";
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
export default function Members() {
  const subscriptionPlans = [
    {
      id: 1,
      planType: "Consultation",
      date: "Fri, Aug 25, 2023",
      status: "Active",
      action: "Messaging",
    },
    {
      id: 2,
      planType: "Consultation",
      date: "Fri, Aug 25, 2023",
      status: "Active",
      action: "Messaging",
    },
    {
      id: 3,
      planType: "Consultation",
      date: "Fri, Aug 25, 2023",
      status: "Active",
      action: "Messaging",
    },
    {
      id: 4,
      planType: "Consultation",
      date: "Fri, Aug 25, 2023",
      status: "Active",
      action: "Messaging",
    },
  ];
  return (
    <div className={" border border-[#D6D6D6] rounded-lg  bg-[#ffffff]"}>
      <div className="">
        <div className="p-6 flex-auto border-[#ECECEB] border-b ">
          <div className="flex-1">
            <div className="flex  items-center">
              <h1 className="text-base font-medium leading-6 text-[#212121]">
                Members in this space
              </h1>
              <span className="text-primary font-medium ml-auto mr-6 ">
                Invite a friend
              </span>
              <div className="">
                {" "}
                <SearchComponent placeholder="ex: acting" />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <table className="min-w-full divide-y divide-[#D6D6D6]">
            <thead>
              <tr>
                <TH name="NAME" />
                <TH name="DATE JOINED" />

                <TH name="Status" />
                <TH name="Action" />
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D6D6D6]">
              {subscriptionPlans.map((plan) => (
                <tr key={plan.id}>
                  <TD text={plan.planType} />
                  <TD text={plan.date} />

                  <TD text={plan.status} />
                  <TD
                    text={plan.action}
                    className="!text-primary !font-medium"
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
