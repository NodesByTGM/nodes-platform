import React from "react";
type DataType = {
  id: string;
  title: string;
  text: string;
  img: string | null;
};

type InteractionProps = {
  data: DataType;
  headline?: string;
  bio?: string;
};

export default function Interaction({ data, headline, bio }: InteractionProps) {
  return (
    <div className="rounded-[4px] w-full flex flex-col p-4 border-dash">
      <span className="font-medium text-base mb-2">{`${headline ? headline : data.title}`}</span>
      <div className="flex gap-4">
        {data?.img && (
          <div>
            <div className="size-10 bg-[#D9D9D9]">
              <img
                className=" h-full w-full"
                src="/img/ProfilePlaceholder.png"
                alt=""
              />
            </div>
          </div>
        )}
        <span className="font-normal text-sm">{`${bio ? bio : data.text}`} </span>
      </div>
    </div>
  );
}
