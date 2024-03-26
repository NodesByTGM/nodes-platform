/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { ArrowRight } from "react-feather";
import { Link } from "react-router-dom";
import { TfiLocationPin } from "react-icons/tfi";
import AppConfig from "../../utilities/config";
import { useNavigate } from "react-router-dom";
import {
  BookMarkIcon,
  ItemDeleteIcon,
  Modal,
  DeleteComponent,
} from "../../components";
import { toast } from "react-toastify";
import { useDeleteEventMutation, useSaveEventMutation } from "../../api";

function EventItem({
  className,
  data,
  isBusiness,
  refetchEvents,
}: {
  className?: string;
  data?: any;
  isBusiness?: boolean;
  refetchEvents?: () => void;
}) {
  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = useState(false);
  const [
    deleteRequest,
    {
      isSuccess: isDeleteSuccess,
      isError: isDeleteError,
      error: deleteError,
      isLoading: deleteLoading,
    },
  ] = useDeleteEventMutation();

  const [
    saveRequest,
    {
      isSuccess: isSaveSuccess,
      isLoading: isSaveLoading,
      isError: isSaveError,
      error: saveError,
    },
  ] = useSaveEventMutation();

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

  useEffect(() => {
    if (isDeleteError) {
      toast.error(deleteError?.message?.message);
      setDeleteModal(false);
      if (refetchEvents) {
        refetchEvents();
      }
    }
  }, [isDeleteError, deleteError]);
  useEffect(() => {
    if (isDeleteSuccess) {
      toast.success("Successfully deleted event");
      if (refetchEvents) {
        refetchEvents();
      }
      setDeleteModal(false);
    }
  }, [isDeleteSuccess]);

  return (
    <div className="">
      {data ? (
        <div
          className={`${className} p-6 h-[320px] rounded-lg bg-cover bg-center text-white`}
          style={{ backgroundImage: `url('/img/checkcards.png')` }}
        >
          <pre className="text-blue-400 hidden">
            {JSON.stringify(data, null, 2)}
          </pre>
          <div className="flex items-start justify-end mb-8">
            {isBusiness ? (
              <div onClick={() => setDeleteModal(true)} className="">
                <ItemDeleteIcon white />
              </div>
            ) : (
              <div
                onClick={() => saveRequest({ id: data?.id })}
                className={`${isSaveLoading ? "animate-pulse" : ""}`}
              >
                <BookMarkIcon white />
              </div>
            )}
          </div>

          <div className="flex flex-col text-[#ffffff] font-medium text-base">
            <span className="mb-4">{data?.name}</span>
            <span className="mb-6">{data?.dateTime}</span>
            <div className="flex items-center gap-2">
              <TfiLocationPin />
              <span className="">{data?.location}</span>
            </div>
            <div className="mt-10 flex justify-between">
              <div className=""></div>
              <span
                onClick={() =>
                  navigate(`/dashboard/see-more/business-events/${data?.id}`)
                }
                className="cursor-pointer text-sm"
              >
                View details
              </span>
            </div>
          </div>

          <Modal
            sizeClass="sm:max-w-[506px]"
            open={deleteModal}
            setOpen={setDeleteModal}
          >
            <DeleteComponent
              title={"Delete this event"}
              text={`You are about to permanently delete '${data?.name}'. Do you want to proceed?`}
              action={() => {
                deleteRequest(data?.id);
              }}
              isLoading={deleteLoading}
              closeModal={() => setDeleteModal(false)}
            />
          </Modal>
        </div>
      ) : (
        <div
          className={`${className} md:h-[368px] h-[300px] w-[250px] md:w-[360px] rounded bg-cover bg-center text-white`}
          style={{ backgroundImage: `url('/img/placeholder.png')` }}
        >
          <div className="bg-darkgradient p-5 h-full  flex flex-col justify-end">
            <h3 className="w-[220px] md:w-[280px] text-ellipsis text-nowrap overflow-hidden text-xl font-medium h-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </h3>
            <p className="w-[220px] md:w-[280px] text-ellipsis text-nowrap overflow-hidden font-medium h-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="cursor-pointer flex gap-2 items-center text-md">
              <Link to={`${AppConfig.PATHS.Dashboard.Posts.Base}/hbjhbjshbjd`}>
                <span>Learn more</span>
              </Link>
              <ArrowRight className="w-4 mt-[2px]" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventItem;
