/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import NotificationItem from "./NotificationItem";
import ItemLoader from "../ItemLoader";

type INotificationProps = {
  notifications: Array<any>;
  notificationLoading: boolean;
};
export default function Unread({
  notifications,
  notificationLoading,
}: INotificationProps) {
  return (
    <div className="w-full">
      {notificationLoading && notifications.length === 0 ? (
        <div className="grid gap-4 px-6">
          <ItemLoader />
          <ItemLoader />
          <ItemLoader />
          <ItemLoader />
          <ItemLoader />
        </div>
      ) : null}

      {!notificationLoading && notifications?.length === 0 ? (
        <div className="text-base text-gray-300 mt-32 mb-40  text-center">
          Nothing to see yet.
        </div>
      ) : null}

      {!notificationLoading && notifications && notifications?.length > 0 ? (
        <div className="w-full flex flex-col">
          <div className="px-6 pb-6 text-primary font-medium text-base">
            New
          </div>
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem /> <NotificationItem />
          <NotificationItem last />
        </div>
      ) : null}
    </div>
  );
}
