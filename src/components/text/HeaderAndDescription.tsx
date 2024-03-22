import React from "react";
type IProps = {
  openCommunity?: boolean;
  bottomBorder?: boolean;
  viewAll?: boolean;
  seeMore?: boolean;
  title?: string;
  description?: string;
  titleClass?: string;
  descriptionClass?: string;
  navigateTo?: () => void;
};

export default function HeaderAndDescription({
  openCommunity,
  viewAll,
  seeMore,
  title = "",
  description = "",
  titleClass = " text-[20px] ",
  descriptionClass = "text-[#212121] text-nbase font-normal",
  navigateTo,
}: IProps) {
  return (
    <div className="flex items-center justify-between">
      <div className={`flex flex-col gap-2`}>
        <h3 className={`${titleClass} font-medium text-[#212121]`}>{title}</h3>
        {description && (
          <span className={`${descriptionClass}`}>{description}</span>
        )}
      </div>
      {viewAll && (
        <span
          onClick={() => navigateTo && navigateTo()}
          className="cursor-pointer text-sm font-normal text-[#000000]"
        >
          View All
        </span>
      )}
      {seeMore && (
        <span
          onClick={() => navigateTo && navigateTo()}
          className="cursor-pointer text-sm font-normal text-[#000000]"
        >
          See more
        </span>
      )}
      {openCommunity && (
        <span
          onClick={() => navigateTo && navigateTo()}
          className="cursor-pointer text-sm font-normal text-[#000000]"
        >
          Open Community
        </span>
      )}
    </div>
  );
}
