/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import {
  ActionIcon,
  Modal,
  DeleteComponent,
  ConfirmComponent,
  JobPostForm,
  EventPostForm,
  BookMarkIcon,
  Button,
} from "../components";
import { useDeleteJobMutation, useDeleteEventMutation } from "../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { useSaveEventMutation, useUnSaveEventMutation } from "../api";

type IDetailsActions = {
  title: string;
  type?: string;
  details: any;
  jobsRefetch?: () => void;
  eventsRefetch?: () => void;
  canEdit?: boolean;
};

export default function DetailsActions({
  canEdit,
  title,
  type,
  details,
  jobsRefetch,
  eventsRefetch,
}: IDetailsActions) {
  const navigate = useNavigate();
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
    deleteEventRequest,
    {
      isSuccess: isDeleteEventSuccess,
      isError: isDeleteEventError,
      error: deleteEventError,
      isLoading: deleteEventLoading,
    },
  ] = useDeleteEventMutation();

  const handleDelete = () => {
    if (type == "business-jobs") {
      deleteRequest(details?.id);
    }
    if (type == "my-events") {
      deleteEventRequest(details?.id);
    }
  };
  const [deleteModal, setDeleteModal] = useState(false);
  const [editJobOpen, setEditJobOpen] = useState(false);
  const [editEventOpen, setEditEventOpen] = useState(false);
  const [registerEventModal, setRegisterEventModal] = useState(false);
  //jobs
  useEffect(() => {
    if (isDeleteError) {
      toast.error(deleteError?.message?.message);
      setDeleteModal(false);
    }
  }, [isDeleteError, deleteError]);

  useEffect(() => {
    if (isDeleteSuccess) {
      toast.success("Successfully deleted job");
      setDeleteModal(false);
      if (type == "business-jobs") {
        jobsRefetch && jobsRefetch();
      }

      navigate(`/dashboard/view-more/jobs-by-you`);
    }
  }, [isDeleteSuccess]);

  //events
  useEffect(() => {
    if (isDeleteEventError) {
      toast.error(deleteEventError?.message?.message);
      setDeleteModal(false);
    }
  }, [isDeleteEventError, deleteEventError]);

  useEffect(() => {
    if (isDeleteEventSuccess) {
      toast.success("Successfully deleted event");
      setDeleteModal(false);

      if (type == "my-events") {
        eventsRefetch && eventsRefetch();
      }
      navigate(`/dashboard/view-more-events/my-events`);
    }
  }, [isDeleteEventSuccess]);

 

  const edit = () => {
    if (type == "business-jobs") {
      setEditJobOpen(true);
    }

    if (type == "my-events") {
      setEditEventOpen(true);
    }
  };
  const erase = () => {
    // if (type == "business-jobs") {
    setDeleteModal(true);
    // }
  };
  const share = () => {
    if (type == "business-jobs") {
      console.log(details);
    }
  };
  const [
    saveRequest,
    {
      // isSuccess: isSaveSuccess,
      isLoading: isSaveLoading,
      // isError: isSaveError,
      // error: saveError,
    },
  ] = useSaveEventMutation();

  const [
    unSaveRequest,
    {
      // isSuccess: isUnSaveSuccess,
      isLoading: isUnSaveLoading,
      // isError: isUnSaveError,
      // error: unSaveError,
    },
  ] = useUnSaveEventMutation();

  const handleSave = (details) => {
    console.log(JSON.stringify(details, null, 2));

    if (details?.saved) {
      unSaveRequest({ id: details?.id });
      return;
    }
    if (!details?.saved) {
      saveRequest({ id: details?.id });
      return;
    }
  };

  const handleEventRegistration = () => {
    toast.success("Successfully registered for event");
    setRegisterEventModal(false)
  };
  return (
    <div>
      <div className="flex justify-between items-center px-6 py-[25px] bg-[#ffffff] rounded-lg border border[#EFEFEF]">
        <h3 className="font-medium text-[20px] text-[#212121]">{title}</h3>

        {canEdit ? (
          <div className="flex gap-4 ">
            <div onClick={() => erase()} className="">
              {" "}
              <ActionIcon erase2 hasBorder={false} />
            </div>

            <div onClick={() => edit()} className="">
              {" "}
              <ActionIcon edit2 hasBorder={false} />
            </div>

            <div onClick={() => share()} className="">
              {" "}
              <ActionIcon share hasBorder={false} />
            </div>
          </div>
        ) : (
          <div className="">
            <div className="flex gap-4">
              <div
                onClick={() => handleSave(details)}
                className={`${
                  isSaveLoading || isUnSaveLoading ? "animate-pulse" : ""
                }`}
              >
                <BookMarkIcon saved={details?.saved} />
              </div>

              <Button
                onClick={() => setRegisterEventModal(true)}
                className="max-w-max !bg-customprimary !border-none"
              >
                Register for event
              </Button>
            </div>
          </div>
        )}
      </div>

      <Modal
        sizeClass="sm:max-w-[506px]"
        open={deleteModal}
        setOpen={setDeleteModal}
      >
        <DeleteComponent
          title={"Delete this job post"}
          text={`You are about to permanently  delete '${details?.name}'. Do you want to proceed?`}
          action={() => {
            handleDelete();
          }}
          isLoading={deleteLoading || deleteEventLoading}
          closeModal={() => setDeleteModal(false)}
        />
      </Modal>
      <Modal
        sizeClass="sm:max-w-[800px]"
        open={editJobOpen}
        setOpen={setEditJobOpen}
      >
        <JobPostForm
          details={details}
          refetchAllJobs={jobsRefetch}
          closeModal={() => setEditJobOpen(false)}
        />
      </Modal>

      <Modal
        sizeClass="sm:max-w-[800px]"
        open={editEventOpen}
        setOpen={setEditEventOpen}
      >
        <EventPostForm
          details={details}
          refetchEvents={eventsRefetch}
          closeModal={() => setEditEventOpen(false)}
        />
      </Modal>

      <Modal
        sizeClass="sm:max-w-[506px]"
        open={registerEventModal}
        setOpen={setRegisterEventModal}
      >
        <ConfirmComponent
          title={"Are you sure you want to register for this event?"}
          text={`You are about to register. Do you want to proceed?`}
          action={() => {
            handleEventRegistration();
          }}
          isLoading={false}
          closeModal={() => setRegisterEventModal(false)}
        />
      </Modal>
    </div>
  );
}
