import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import moment from "moment"
export default function BusunessId() {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div className="flex flex-col gap-6 items-center">
      {/* <pre className="">{JSON.stringify(user?.business?.name)}</pre> */}
      <div className="size-[100px]">
        <img
          className=" h-full w-full"
          src="/img/CompanyLogoPlaceholder.svg"
          alt=""
        />
      </div>
      <span className="font-medium text-[24px] "> {user?.business?.name? user?.business?.name : "Name of company"}</span>
      <span className="font-normal text-base text-[#757575] ">
        
        {user?.business?.yoe? moment(user?.business?.yoe).format('DD/MM/yyyy') : "Year of Establishment"}
      </span>
      <div className="mb-6 font-normal text-base text-[#000000] flex justify-center gap-1">
        <span className="font-medium">0 </span>connections
      </div>
    </div>
  );
}
