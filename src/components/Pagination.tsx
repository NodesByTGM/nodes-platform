/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";

export default function Pagination({
  className,
  pageNav,
  onPageChange,
}: {
  className?: string;
  pageNav: any;
  onPageChange: (e) => void;
}) {
  return (
    <div className={`${className}`}>
      <div className={pageNav?.totalPages > 1 ? '' : 'hidden'}>
        {" "}
        <PaginationDemo
          currentPage={pageNav.currentPage}
          totalPages={pageNav.totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}

interface PaginationProps {
  className?: string;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationDemo: React.FC<PaginationProps> = ({
  className,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const [clickedPage, setClickedPage] = useState(currentPage);

  const handlePreviousClick = () => {
    setClickedPage(currentPage - 1);
    if (!isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    setClickedPage(currentPage + 1);
    if (!isLastPage) {
      onPageChange(currentPage + 1);
    }
  };

  const generatePageNumbers = () => {
    const pages: Array<any> = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <div
          key={i}
          onClick={() => {
            setClickedPage(i);
            onPageChange(i);
          }}
          className={`cursor-pointer inline-flex items-center border-t-2 ${
            i === currentPage || i === clickedPage
              ? "border-primary text-primary"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
          } px-4 pt-4 text-sm font-medium`}
        >
          {i}
        </div>
      );
    }
    return pages;
  };

  return (
    <nav
      className={`${className} flex items-center justify-between border-t border-gray-200 px-4 sm:px-0`}
    >
      <div className="-mt-px flex w-0 flex-1">
        <a
          href="#"
          onClick={handlePreviousClick}
          className={`inline-flex items-center border-t-2 ${
            isFirstPage
              ? "border-transparent text-gray-400 pointer-events-none"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
          } pr-1 pt-4 text-sm font-medium`}
        >
          <ArrowLongLeftIcon className="mr-3 h-5 w-5" aria-hidden="true" />
          Previous
        </a>
      </div>
      <div className="hidden md:-mt-px md:flex">{generatePageNumbers()}</div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <a
          href="#"
          onClick={handleNextClick}
          className={`inline-flex items-center border-t-2 ${
            isLastPage
              ? "border-transparent text-gray-400 pointer-events-none"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
          } pl-1 pt-4 text-sm font-medium`}
        >
          Next
          <ArrowLongRightIcon className="ml-3 h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </nav>
  );
};

// export default Pagination;
