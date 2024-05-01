import React from "react";
import NotificationItem from "./NotificationItem";
export default function AllNotifications() {
  return (
    <div className="w-full flex flex-col">
      <div className="px-6 pb-6 text-primary font-medium text-base">New</div>
      <NotificationItem unread/>
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem /> <NotificationItem />
      <NotificationItem last/>
    </div>
  );
}
