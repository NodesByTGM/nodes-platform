import React from "react";
import { Button } from "../../../components";
export default function BusinessDashboardEmptyState({
  user,
  addBusinessAccount,
}) {
  return (
    <div>
      <div className="flex flex-col gap-4 mb-10">
        <div className="flex w-full gap-2 text-[#212121] items-center justify-center flex-col">
          <h3 className="font-medium text-[24px]">Hi, {user?.name}!</h3>
          <span className="font-normal text-[20px]">Just getting started?</span>

          <span className="font-normal text-[20px]">
            {" "}
            Would you like to create a business account?
          </span>
        </div>

        <div className="w-full">
          <img
            src="/img/BusinessDashboardEmptyStateImg.png"
            alt=""
            className="w-full"
          />
        </div>

        <Button
          onClick={() => addBusinessAccount()}
          className="max-w-max mx-auto"
        >
          Add Business account
        </Button>
      </div>
    </div>
  );
}
