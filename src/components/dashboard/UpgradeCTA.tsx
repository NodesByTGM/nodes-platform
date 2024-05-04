import React, { useState } from "react";
import { Button, Modal } from "../../components";
import { useNavigate } from "react-router-dom";
export default function UpgradeCTA({ username = "" }: { username: string }) {
  const [upgradeModal, setUpgradeModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div className="absolute top-0 bottom-0 inset-x-0 z-[100] mx-auto mt-[24px] mb-[51px] max-w-[360px] flex flex-col items-center justify-center">
        <p className="text-center text-[24px] font-medium mb-4 text-customprimary">
          Want more out of Nodes?
        </p>
        <p className="text-center mb-[43px] text-customprimary">
          Upgrade your account today and get access to stuff, stuff, stuff,
          stuff
        </p>

        <Button
          onClick={() => setUpgradeModal(true)}
          className={"max-w-[196px] "}
        >
          Upgrade your account
        </Button>
      </div>
      <img src="/img/dashboardctabg.png" alt="" className=" top-0 bottom-0 " />

      <Modal
        sizeClass="sm:max-w-[400px]"
        open={upgradeModal}
        setOpen={setUpgradeModal}
      >
        <div className="">
          <div className="pb-[50px] flex flex-col items-center justify-center text-center">
            <span className="text-primary font-medium text-[20px] mb-8">
              Hi, <span className="capitalize">{username}</span>.<br /> Would
              you like to enjoy this perk?
            </span>
            <span className="font-normal text-[18px] text-[#000000]">
              Upgrade your account today and get access to jobs and many more
            </span>
          </div>
          <Button
            onClick={() => {
              navigate("/subscription");
            }}
            className={"max-w-[196px] mx-auto"}
          >
            Upgrade your account
          </Button>
        </div>
      </Modal>
    </div>
  );
}
