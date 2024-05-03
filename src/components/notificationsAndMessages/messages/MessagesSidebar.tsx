import React from "react";
import { MoreHorizontal } from "react-feather";
import { SearchComponent } from "../../../components";
import MessageItem from "./MessageItem";
export default function MessagesSidebar() {
  return (
    <div className="border-r border-[#E3E8E7] min-h-full  max-h-full w-full py-8 flex flex-col ">
      <div className="flex items-center justify-between pb-6 px-6 mb-6">
        <h3 className="font-medium text-[20px] text-[#171C1B]">Messages</h3>
        <div className="">
          <MoreHorizontal className="text-[#ACB9B8]" />
        </div>
      </div>

      <div className="px-6 mb-2">
        <SearchComponent />
      </div>

      <div className="flex flex-col max-h-[635px] overflow-y-auto">
        <MessageItem unread active />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem last />
      </div>
    </div>
  );
}
