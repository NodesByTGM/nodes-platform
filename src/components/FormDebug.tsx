import React from 'react'

export default function FormDebug({ form }: { form: any }) {
  return (
    <div>
      <div className="rounded-lg bg-white  text-gray-900 ">
        <div className="w-full rounded-t-md bg-gray-800 p-4 text-[24px] text-orange-400">
          Form State
        </div>
        <div className="p-4">
          <pre>{JSON.stringify(form, null, 2)}</pre>
        </div>
      </div>
    </div>
  )
}
