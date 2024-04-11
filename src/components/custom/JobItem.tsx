/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TfiLocationPin } from "react-icons/tfi";
import { CiCalendar } from "react-icons/ci";
import {
  BookMarkIcon,
  ItemDeleteIcon,
  Modal,
  JobPost,
  DeleteComponent,
} from "../../components";
import {
  useDeleteJobMutation,
  useSaveJobMutation,
  useUnSaveJobMutation,
} from "../../api";
import { toast } from "react-toastify";
export default function JobItem({
  className,
  isBusiness = false,
  canViewJob = false,
  data,
  refetchJobs,
}: {
  canViewJob?: boolean;
  className?: string;
  isBusiness?: boolean;
  data?: any;
  refetchJobs?: () => void;
}) {
  const [viewJobOpen, setViewjobOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const navigate = useNavigate();

  const navigateToJobDetails = (id) => {
    navigate(`/dashboard/see-more/business-jobs/${id}`);
  };

  const [
    deleteRequest,
    {
      isSuccess: isDeleteSuccess,
      isError: isDeleteError,
      error: deleteError,
      isLoading: deleteLoading,
    },
  ] = useDeleteJobMutation();

  const [
    saveRequest,
    {
      isSuccess: isSaveSuccess,
      isLoading: isSaveLoading,
      isError: isSaveError,
      error: saveError,
    },
  ] = useSaveJobMutation();

  const [
    unSaveRequest,
    {
      isSuccess: isUnSaveSuccess,
      isLoading: isUnSaveLoading,
      isError: isUnSaveError,
      error: unSaveError,
    },
  ] = useUnSaveJobMutation();

  const handleSave = (data) => {
    // console.log(JSON.stringify(data, null, 2));

    if (data?.saved) {
      unSaveRequest({ id: data?.id });
      return;
    }
    if (!data?.saved) {
      saveRequest({ id: data?.id });
      return;
    }
  };

  //save
  useEffect(() => {
    if (isSaveError) {
      toast.error(saveError?.message?.message);
    }
  }, [isSaveError, saveError]);

  useEffect(() => {
    if (isSaveSuccess) {
      // if (refetchJobs) {
      //   refetchJobs();
      // }
    }
  }, [isSaveSuccess]);

  //Unsave

  useEffect(() => {
    if (isUnSaveError) {
      toast.error(unSaveError?.message?.message);
    }
  }, [isUnSaveError, unSaveError]);

  useEffect(() => {
    if (isUnSaveSuccess) {
      // if (refetchJobs) {
      //   refetchJobs();
      // }
    }
  }, [isUnSaveSuccess]);

  useEffect(() => {
    if (isDeleteError) {
      toast.error(deleteError?.message?.message);
      setDeleteModal(false);
      if (refetchJobs) {
        refetchJobs();
      }
    }
  }, [isDeleteError, deleteError]);

  useEffect(() => {
    if (isDeleteSuccess) {
      toast.success("Successfully deleted job");
      if (refetchJobs) {
        refetchJobs();
      }
      setDeleteModal(false);
    }
  }, [isDeleteSuccess]);

  return (
    <div
      className={`${className} bg-[#ffffff] text-[#000000] w-full p-6 rounded-lg border border-[#EFEFEF] flex flex-col items-start gap-8`}
    >
      <pre className="text-gray-500 hidden ">
        {JSON.stringify(data, null, 2)}
      </pre>

      <div className="flex items-start justify-between w-full ">
        <div className="">
          <img src="/img/SmallCheck.png" alt="" className="size-[72px]" />
        </div>

        {isBusiness ? (
          <div onClick={() => setDeleteModal(true)} className="">
            <ItemDeleteIcon />
          </div>
        ) : (
          <div
            onClick={() => handleSave(data)}
            className={`${
              isSaveLoading || isUnSaveLoading ? "animate-pulse" : ""
            }`}
          >
            <BookMarkIcon saved={data?.saved} />
          </div>
        )}
      </div>

      <div className="w-full flex flex-col gap-4 items-start text-[#000000] text-base">
        <span className="font-medium">
          {data?.description ? data.description : "Job description/title"}
        </span>
        <span className="font-normal">
          {data?.name ? data.name : "Name of company"}
        </span>
      </div>

      <span className="font-medium text-[18px]">
        {data?.payRate ? data.payRate : "$10-1k/hr"}
      </span>

      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="">
            <CiCalendar />
          </span>
          <span className="fonnt-normal text-base">
            {data?.workRate ? data.workRate : "20 hrs/wk"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="">
            <TfiLocationPin />
          </span>
          <span className="font-normal text-base">
            {data?.location ? data.location : "Lagos | Nigeria"}
          </span>
        </div>
      </div>

      {canViewJob ? (
        <div
          onClick={() => setViewjobOpen(true)}
          className="w-full flex justify-end text-primary font-medium text-sm cursor-pointer"
        >
          View job
        </div>
      ) : (
        <div className="w-full flex items-center justify-between">
          <div className="flex justify-end text-primary font-normal text-base cursor-pointer">
            {data?.applicants?.length > 0 ? data?.applicants?.length : 0}{" "}
            applicant{data?.applicants?.length !== 1 ? "s" : ""}
          </div>
          <div
            onClick={() => navigateToJobDetails(data?.id)}
            className="flex justify-end text-primary font-medium text-sm cursor-pointer"
          >
            View details
          </div>
        </div>
      )}

      <Modal
        sizeClass="sm:max-w-[1020px]"
        open={viewJobOpen}
        setOpen={setViewjobOpen}
      >
        <div className="">
          <JobPost
            details={data}
            refetchJobs={refetchJobs}
            closeModal={() => setViewjobOpen(false)}
          />
        </div>
      </Modal>

      <Modal
        sizeClass="sm:max-w-[506px]"
        open={deleteModal}
        setOpen={setDeleteModal}
      >
        <DeleteComponent
          title={"Delete this job post"}
          text={`You are about to permanently delete '${data?.name}'. Do you want to proceed?`}
          action={() => {
            deleteRequest(data?.id);
          }}
          isLoading={deleteLoading}
          closeModal={() => setDeleteModal(false)}
        />
      </Modal>
    </div>
  );
}
