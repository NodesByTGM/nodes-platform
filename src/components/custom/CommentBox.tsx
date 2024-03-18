/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { useState } from "react";
import { MoreHorizontal, ThumbsDown, ThumbsUp, X } from "react-feather";
import { Button, Checkbox, Select } from "..";
import Avatar from "../Avatar";
import { LabeledSelect } from "../../components";

const selectOptions = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 2" },
];

function Comment({ last = false }) {
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2 items-center">
          <Avatar src="/img/avatar.png" />
          <div className="text-sm">
            <p className="font-medium">Jane Doe</p>
            <p>4 hours ago</p>
          </div>
        </div>
        <div>
          <MoreHorizontal />
        </div>
      </div>
      <div>
        <p className="mb-4 text-sm">
          Lorem ipsum dolor sit amet consectetur. Pharetra elementum mattis et
          duis dis.
        </p>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center text-placeholder">
            <ThumbsDown className="w-4  text-[#757575] hover:text-[#000000] cursor-pointer" />{" "}
            <span>2</span>{" "}
          </div>
          <div className="flex gap-2 items-center text-placeholder">
            <ThumbsUp className="w-4 text-[#757575] hover:text-[#000000] cursor-pointer" />{" "}
            <span>2</span>{" "}
          </div>
        </div>
      </div>
      {!last ? <hr className="my-2 border-grey-dark" /> : null}
    </div>
  );
}

function CommentBox({ opened = false, setOpened = () => {} }: any) {
  const [checked, setChecked] = useState(false);

  const handleSelect = ({ id, value }: any) => {
    console.log(id, value);
    // setDate((prev) => ({
    //     ...prev,
    //     [id]: value,
    // }));
  };
  return (
    <div>
      <div
        className={clsx(
          "p-2 bg-black bg-opacity-30 fixed w-screen top-0 left-0 h-screen transition-all duration-300",
          opened ? "visible" : "invisible"
        )}
        onClick={() => setOpened(!opened)}
      ></div>

      <div
        className={clsx(
          "fixed bg-white p-5 z-50 w-[400px] h-[98vh] top-2 left-2 rounded-lg transition-all duration-300 overflow-auto",
          opened ? "translate-x-[0] " : "translate-x-[-400px]"
        )}
      >
        <div className="flex gap-0 justify-between items-center w-full mb-10">
          <div className="flex-1 text-lg font-medium">Comments(20)</div>
          <div className="cursor-pointer" onClick={() => setOpened(false)}>
            <X className="w-8" />
          </div>
        </div>

        <div className="">
          <div className="border rounded-lg p-4 mb-10">
            <div className="flex gap-2 mb-5">
              <Avatar src="/img/avatar.png" />
              <span>Jane Doe</span>
            </div>

            <textarea
              rows={5}
              className="w-full outline-none"
              placeholder={"What are your thoughts"}
            ></textarea>
            <div className="flex gap-2 justify-end">
              <Button size="sm" className="!bg-white !border-none !text-black">
                Cancel
              </Button>
              <Button size="sm">Comment</Button>
            </div>
          </div>
          <div className="flex gap-2 items-center mb-10">
            <Checkbox checked={checked} setChecked={setChecked} />
            <span className="text-placeholder">Also publish to my profile</span>
          </div>
          <div className="w-[100px] mb-10">
            {/* <Select
              className="flex-1"
              placeholder={"Latest"}
              id="month"
              // options={AppConfig.DATE_OPTIONS.DAYS}
              showCarret
              onSelect={handleSelect}
            /> */}
            <LabeledSelect options={selectOptions} />
          </div>
          <div className="">
            {Array(2)
              .fill(null)
              .map((_, i) => (
                <Comment key={i} last={i == 1} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentBox;
