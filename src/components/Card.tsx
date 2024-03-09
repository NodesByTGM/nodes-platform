import React, { ReactNode } from "react";
import { FiEdit3 } from "react-icons/fi";

export default function Card({
  className = "",
  title = "",
  children,
  editButton,
  editFunction,
  listCount,
}: {
  className?: string;
  title: string;
  children: ReactNode | ReactNode[];
  editButton?: boolean;
  editFunction?: () => void;
  listCount?: number;
}) {
  return (
    <div
      className={`${className} w-full bg-white p-8 rounded-lg flex flex-col gap-10`}
    >
      <div className="flex items-center justify-between">
        {title?.length > 0 && (
          <div className="flex items-ccenter gap-2">
            <span className="text-black font-medium text-base">{title}</span>

            {listCount && (
              <div className="border border-[#000000] rounded-full size-6 flex items-center justify-center">
                <span className="text-sm font-normal"> {listCount}</span>
              </div>
            )}
          </div>
        )}
        {editButton && (
          <div
            onClick={() => editFunction && editFunction()}
            className="cursor-pointer border border-[#000000] rounded-full size-8 flex items-center justify-center"
          >
            <FiEdit3 />
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
