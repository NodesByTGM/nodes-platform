import React, { useEffect, useState } from "react";
import { ActionIcon, Modal, DeleteComponent } from "../components";
import { useDeleteJobMutation } from "../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function DetailsActions({ title, type, details }) {
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
  const [deleteModal, setDeleteModal] = useState(false);

  useEffect(() => {
    if (isDeleteError) {
      toast.error(deleteError?.message?.message);
    }
  }, [isDeleteError, deleteError]);
  useEffect(() => {
    if (isDeleteSuccess) {
      toast.success("Successfully deleted job");
      navigate("/dashboard/see-more/business-jobs");
    }
  }, [isDeleteSuccess]);

  const edit = () => {
    if (type == "business-jobs") {
      console.log(details?.id);
    }
  };
  const erase = () => {
    if (type == "business-jobs") {
      setDeleteModal(true);
    }
  };
  const share = () => {
    if (type == "business-jobs") {
      console.log(details);
    }
  };
  return (
    <div>
      <div className="flex justify-between items-center px-6 py-[25px] bg-[#ffffff] rounded-lg border border[#EFEFEF]">
        <h3 className="font-medium text-[20px] text-[#212121]">{title}</h3>

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
            deleteRequest(details?.id);
          }}
          isLoading={deleteLoading}
          closeModal={() => setDeleteModal(false)}
        />
      </Modal>
    </div>
  );
}
