import React from "react";
type DataType = {
  id: string;
  title: string;
  text: string;
  img: string | null;
};

type InteractionProps = {
  data: DataType;
};

export default function Interaction({ data }: InteractionProps) {
  return (
    <div className="rounded-[4px] w-full flex flex-col p-4 border border-dashed border-spacing-[5px]">
      <span className="font-medium text-base mb-2">{data.title}</span>
      <span className="font-normal text-sm">{data.text} </span>
    </div>
  );
}
