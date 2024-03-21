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
import { useDeleteJobMutation } from "../../api";
import { toast } from "react-toastify";
export default function JobItem({
  className,
  isBusiness = false,
  data,
  refetchJobs,
}: {
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

  useEffect(() => {
    if (isDeleteError) {
      toast.error(deleteError?.message?.message);
    }
  }, [isDeleteError, deleteError]);
  useEffect(() => {
    if (isDeleteSuccess) {
      toast.success("Successfully deleted job");
      if(refetchJobs){
        refetchJobs()
      }
    }
  }, [isDeleteSuccess]);

  return (
    <div
      className={`${className} bg-[#ffffff] text-[#000000] w-full p-6 rounded-lg border border-[#EFEFEF] flex flex-col gap-8`}
    >
      <div className="flex items-start justify-between">
        <div className="">
          <img src="/img/SmallCheck.png" alt="" className="size-[72px]" />
        </div>

        {isBusiness ? (
          <div onClick={() => setDeleteModal(true)} className="">
            <ItemDeleteIcon />
          </div>
        ) : (
          <div className="">
            <BookMarkIcon />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 text-[#000000] text-base">
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

      <div className="flex items-center justify-between">
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

      {isBusiness ? (
        <div className="flex items-center justify-between">
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
      ) : (
        <div
          onClick={() => setViewjobOpen(true)}
          className="flex justify-end text-primary font-medium text-sm cursor-pointer"
        >
          View job
        </div>
      )}

      <Modal
        sizeClass="sm:max-w-[1020px]"
        open={viewJobOpen}
        setOpen={setViewjobOpen}
      >
        <div className="">
          <JobPost details={data} closeModal={() => setViewjobOpen(false)} />
        </div>
      </Modal>

      <Modal
        sizeClass="sm:max-w-[506px]"
        open={deleteModal}
        setOpen={setDeleteModal}
      >
        <DeleteComponent
          title={"Delete this job post"}
          text={`You are about to permanently  delete '${data?.name}'. Do you want to proceed?`}
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
