import React from "react";
import MessagesSidebar from "./messages/MessagesSidebar";
import MessagesMain from "./messages/MessagesMain";

export default function MessagesComponent() {
  return (
    <div className="messageComponentHeight flex w-full">
      <div className="w-[371px]">
        <MessagesSidebar />
      </div>
      <div className="flex-1">
        <MessagesMain />
      </div>
    </div>
  );
}
