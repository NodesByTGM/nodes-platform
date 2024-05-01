import React from 'react'

export default function MessagesComponent({closeModal}) {
  return (
    <div>
        <div onClick={() => closeModal()} className="hidden"></div>
        MessagesComponent</div>
  )
}
