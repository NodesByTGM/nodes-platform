import React from "react";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

type ActionIconPropType = { edit?: boolean,  erase?: boolean,}
export default function ActionIcon({ edit, erase }: ActionIconPropType) {
  return (
    <div className="cursor-pointer border border-[#000000] rounded-full size-8 flex items-center justify-center">
      {edit && <FiEdit3 />}
      {erase && <AiOutlineDelete />}
    </div>
  );
}
