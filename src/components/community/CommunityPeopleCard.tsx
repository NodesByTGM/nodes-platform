/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import PeopleCardFieldPill from "./PeopleCardFieldPill";
import CommunityCardDescription from "./CommunityCardDescription";
import { subscriptionType } from "../../utilities/constants";
import { Modal, ConfirmComponent } from "../../components";
import { toast } from "react-toastify";
import { useRequestConnectionMutation } from "../../api";

// import { SkillsSection } from "../landingPage";
type ICommunityPeopleCard = {
  isConnected?: boolean;
  data?: any;
};
export default function CommunityPeopleCard({
  data,
  isConnected = false,
}: ICommunityPeopleCard) {
  const [connectModal, setConnectModal] = useState(false);
  const [
    deleteRequest,
    {
      isSuccess: isConnectionRequestSuccess,
      isError: isConnectionRequestError,
      error: connectionRequestError,
      isLoading: connectionRequestLoading,
    },
  ] = useRequestConnectionMutation();

  const handleConnect = () => {
    deleteRequest({ id: data?.id });
  };

  useEffect(() => {
    if (isConnectionRequestSuccess) {
      toast.success("Request to connect sent!");
      setConnectModal(false);

      // jobsRefetch && jobsRefetch();
    }
  }, [isConnectionRequestSuccess]);

  useEffect(() => {
    if (isConnectionRequestError) {
      toast.error(connectionRequestError?.message?.message);
      setConnectModal(false);
    }
  }, [isConnectionRequestError, connectionRequestError]);

  return (
    <div className="p-6 w-full h-full flex flex-col gap-6 border border-[#EFEFEF] rounded-lg      ">
      {data?.avatar?.url ? (
        <div className="h-[192px] bg-secondary/20 rounded">
          {" "}
          <img
            src={data?.avatar?.url}
            alt=""
            className="size-full imgCss rounded"
          />
        </div>
      ) : (
        <div className="h-[192px] bg-secondary/20 rounded imgCss"></div>
      )}
      <div className="flex gap-2 items-center text-primary">
        <span className=" font-medium text-base">{data?.name}</span>
        <div className="size-1 bg-[#085A55] rounded-full"></div>
        <span className="font-normal text-xs">
          {subscriptionType[data?.type]} User
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {data?.skills?.map((skill, index) => (
          <div className="">
            {index < 4 ? (
              <div key={skill + index} className="max-w-max">
                <PeopleCardFieldPill text={skill} />
              </div>
            ) : null}
          </div>
        ))}

        {data?.skills?.length == 0 ? (
          <PeopleCardFieldPill text={"No skills specified"} />
        ) : null}
      </div>

      <div className="mt-auto">
        {" "}
        <CommunityCardDescription
          title={data?.headline ? data?.headline : "--"}
          description={data?.bio ? data?.bio : "--"}
        />
      </div>

      <div className=" flex items-center justify-between gap-4 text-customprimary font-medium text-sm">
        <span className="">View profile</span>
        {isConnected ? (
          <span className="">Message</span>
        ) : (
          <span
            onClick={() => setConnectModal(true)}
            className="cursor-pointer"
          >
            Connect
          </span>
        )}
      </div>

      <Modal
        sizeClass="sm:max-w-[506px]"
        open={connectModal}
        setOpen={setConnectModal}
      >
        <ConfirmComponent
          title={"Are you sure you want to connect with this user?"}
          text={`You are about to connect  to '${data?.name}'. Do you want to proceed?`}
          action={() => {
            handleConnect();
          }}
          isLoading={connectionRequestLoading}
          closeModal={() => setConnectModal(false)}
        />
      </Modal>
    </div>
  );
}
