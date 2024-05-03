import React, { useState } from "react";
import { TextArea } from "../../../components";

export default function MessageComposer() {
  const [message, setMessage] = useState('');
  return (
    <div className="pt-4 pb-6 messageMainPadding bg-[#ffffff] flex items-start gap-4">
      <div className="bg-customprimary size-[56px] flex items-center justify-center rounded-full">
        <span className="text-[#ffffff] font-medium text-base">AA</span>
      </div>

      <div className="flex-1">
        {" "}
        <TextArea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Write a message"
        />
      </div>
    </div>
  );
}
