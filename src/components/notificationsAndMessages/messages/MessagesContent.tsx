import React from "react";
import SentMessage from "./SentMessage";
import ReceivedMessage from "./ReceivedMessage";

export default function MessagesContent() {
  return (
    <div className="h-full messageMainPadding bg-[#FBFBFB] flex-1 ">
      <div className="w-full gap-5 flex flex-col pt-5 max-h-[560px] overflow-y-auto">
        <SentMessage />
        <ReceivedMessage />
        <SentMessage />
        <ReceivedMessage />
        <SentMessage />
        <ReceivedMessage />
      </div>
    </div>
  );
}
