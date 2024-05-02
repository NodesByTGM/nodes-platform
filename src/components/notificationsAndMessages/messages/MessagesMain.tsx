import React from "react";
import MessagesHeader from "./MessagesHeader";
import MessagesContent from "./MessagesContent";
import MessageComposer from "./MessageComposer";

export default function MessagesMain() {
  return (
    <div className="flex flex-col h-full">
      <MessagesHeader />
      <div className="flex-1">
        <MessagesContent />
      </div>
      <MessageComposer />
    </div>
  );
}
