import React from "react";
import { useNavigate } from "react-router-dom";

interface BreadcrumbItem {
  id: string | number;
  title: string;
  url: string;
}

interface BreadcrumbsProps {
  links: BreadcrumbItem[];
}

export default function Breadcrumbs({
  links,
}: BreadcrumbsProps): React.ReactElement {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-x-2" data-testid="breadcrumbs">
      <ul className="flex gap-x-8  items-center">
        {links.map((item: BreadcrumbItem, idx: number) => (
          <li
            key={`${idx.toString()}-index`}
            onClick={() => navigate(item.url)}
            data-testid={item.title}
            className={`${
              idx == 0 ? "text-[#757575]" : "font-medium text-[#212121]"
            }  ${
              item.url !== "#" ? " cursor-pointer" : ""
            } font-normal text-sm    rounded first-of-type:cursor-pointer relative text-[#8F8F8F]  last-of-type:text-[#636363] after:absolute after:content-[''] after:right-[-16px] after:top-1/2 after:translate-y-[-50%] after:w-2 after:h-2 after:border-b-2 after:border-r-2 after:border-[#636363] after:-rotate-45 last-of-type:after:content-none`}
          >
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
