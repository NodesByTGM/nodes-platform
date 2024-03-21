import React from "react";
import { ActionIcon } from "../components";

export default function DetailsActions({title, type, details}) {
    const edit = () => {
        if(type == 'business-jobs'){
            console.log(details)
        }
    }
    const erase = () => {
        if(type == 'business-jobs'){
            console.log(details)
        }
    }
    const share = () => {
        if(type == 'business-jobs'){
            console.log(details)
        }
    }
  return (
    <div>
      <div className="flex justify-between items-center px-6 py-[25px] bg-[#ffffff] rounded-lg border border[#EFEFEF]">
        <h3 className="font-medium text-[20px] text-[#212121]">{title}</h3>

        <div className="flex gap-4 ">
          <div onClick={() => edit()} className="">
            {" "}
            <ActionIcon edit2 hasBorder={false} />
          </div>
          <div onClick={() => erase()} className="">
            {" "}
            <ActionIcon erase2 hasBorder={false} />
          </div>
          <div onClick={() => share()} className="">
            {" "}
            <ActionIcon share hasBorder={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
