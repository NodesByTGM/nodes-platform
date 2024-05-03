/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { X } from "react-feather";
import NotificationsNav from "./notifications/NotificationsNav";
import AllNotifications from "./notifications/AllNotifications";
import Mentions from "./notifications/Mentions";
import Unread from "./notifications/Unread";
import { useGetNotificationsQuery } from "../../api";
export default function NotificationsComponent({ closeModal }) {
  const {
    data: notificationData,
    refetch: notificationRefetch,
    isSuccess: notificationIsSuccess,
    isFetching: notificationLoading,
  } = useGetNotificationsQuery();
  const [notifications, setNotifications] = useState<any>([]);

  const [navs] = useState([
    { id: 1, label: "All", count: 1 },
    { id: 2, label: "Mentions", count: null },
    { id: 3, label: "Unread", count: null },
  ]);
  const [selectedNav, setSelectedNav] = useState(navs[0]);

  useEffect(() => {
    if (notificationIsSuccess && notificationData?.result?.results?.length) {
      setNotifications(notificationData?.result?.results);
    }
  }, [notificationData, notificationIsSuccess]);

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
      <div
        onClick={() => notificationRefetch()}
        className="flex items-center gap-2 px-6 py-3"
      >
        <span className="ml-auto text-primary text-xs">Refresh</span>
      </div>
      <div className="pt-6 max-h-[616px] overflow-y-auto">
        {selectedNav?.label?.toLowerCase() == "all" && (
          <AllNotifications
            notifications={notifications}
            notificationLoading={notificationLoading}
          />
        )}

        {selectedNav?.label?.toLowerCase() == "mentions" && (
          <Mentions
            notifications={notifications}
            notificationLoading={notificationLoading}
          />
        )}

        {selectedNav?.label?.toLowerCase() == "unread" && (
          <Unread
            notifications={notifications}
            notificationLoading={notificationLoading}
          />
        )}
      </div>
    </div>
  );
}
