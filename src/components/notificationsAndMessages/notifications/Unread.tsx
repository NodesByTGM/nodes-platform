import React from 'react'
import NotificationItem from './NotificationItem'

export default function Unread() {
  return (
    <div className="w-full flex flex-col">
        <NotificationItem />
      <NotificationItem />
      <NotificationItem last/>
    </div>
  )
}
