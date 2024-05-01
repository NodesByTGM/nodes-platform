import React, { useState } from "react";
import { X } from "react-feather";
import NotificationsNav from "./notifications/NotificationsNav";
import AllNotifications from "./notifications/AllNotifications";
import Mentions from "./notifications/Mentions";
import Unread from "./notifications/Unread";
export default function NotificationsComponent({ closeModal }) {
  const [navs] = useState([
    { id: 1, label: "All", count: 1 },
    { id: 2, label: "Mentions", count: null },
    { id: 3, label: "Unread", count: null },
  ]);
  const [selectedNav, setSelectedNav] = useState(navs[0]);

  return (
    <div className="bg-[#ffffff]">
      <div className="flex items-center justify-between pb-6 px-6">
        <h3 className="font-semibold text-[20px] text-[#1E293B]">
          Notifications
        </h3>
        <div className="flex items-center gap-3">
          <span className="font-medium text-sm text-customprimary">
            Mark all as read
          </span>
          <div onClick={() => closeModal()} className="cursor-pointer">
            <X className="text-[10px]" />
          </div>
        </div>
      </div>
      <div className="px-6">
        <NotificationsNav
          navs={navs}
          selectedNav={selectedNav}
          setSelectedNav={setSelectedNav}
        />
      </div>
      <div className="pt-6 max-h-[616px] overflow-y-auto">
        {selectedNav?.label?.toLowerCase() == "all" && <AllNotifications />}

        {selectedNav?.label?.toLowerCase() == "mentions" && (
          <Mentions />
        )}

        {selectedNav?.label?.toLowerCase() == "unread" && (
          <Unread  />
        )}
      </div>
    </div>
  );
}
