import React from "react";

export default function ContentItem({ className, data }) {
  return (
    <div  style={{ backgroundImage: `url(${data?.thumbnail?.url})` }} className={`${className} bg-customprimary  p-6 rounded-lg w-[360px]` }>
      <pre className="hidden">{JSON.stringify(data, null, 2)}</pre>
      <div className="mb-10 mt-[327px] flex flex-col text-start justify-start gap-2">
        <span className="font-medium text-[20px] text-[#ffffff] truncate">
          Spotlight({data?.title}) 
        </span>
        <span className="font-normal text-sm text-[#ffffff] truncate">
          Spotlight({data?.description}) 
        </span>
      </div>
    </div>
  );
}
