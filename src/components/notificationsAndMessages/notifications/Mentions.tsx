import React from 'react'
import NotificationItem from './NotificationItem'

export default function Mentions() {
  return (
    <div className="w-full flex flex-col">
       <NotificationItem unread/>
      <NotificationItem />
      <NotificationItem last/>
    </div>
  )
}
