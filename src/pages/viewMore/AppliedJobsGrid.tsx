/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useGetAppliedJobsQuery } from "../../api";
import { JobItem, Loader, Pagination } from "../../components";
export default function AppliedJobsGrid({ searchText = "" }) {
  const [appliedJobsData, setAppliedJobsData] = useState<any>([]);
  const [query, setQuery] = useState<any>({
    page: 1,
    pageSize: 9,
    search: "",
  });
  const setPageQuery = (page) => {
    setQuery({ ...query, page });
  };
  const [pageNav, setPageNav] = useState({
    currentPage: 1,
    totalPages: 10,
    totalItems: 0,
  });
  const {
    data: appliedJobsResponse,
    refetch: appliedJobsRefetch,
    isFetching: appliedJobsLoading,
  } = useGetAppliedJobsQuery(query);

  useEffect(() => {
    if (appliedJobsResponse?.result?.items?.length > 0) {
      const result = appliedJobsResponse?.result;
      setAppliedJobsData(result?.items);
      setPageNav({
        currentPage: result.currentPage,

        totalPages: result.totalPages,
        totalItems: result.totalItems,
      });
    }
  }, [appliedJobsResponse]);

  useEffect(() => {
    appliedJobsRefetch();
  }, [query, appliedJobsRefetch]);

  useEffect(() => {
    setQuery({ ...query, search: searchText });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);
  return (
    <div>
      {appliedJobsLoading && appliedJobsData.length === 0 ? (
        <div className="my-40">
          <Loader />
        </div>
      ) : null}
      {!appliedJobsLoading && appliedJobsData.length === 0 ? (
        <div className="text-base text-primary my-40  text-center">
          Nothing to see.
        </div>
      ) : null}
      {appliedJobsData?.length > 0 ? (
        <div className="">
          {" "}
          <div className="grid grid-cols-3 gap-6">
            {appliedJobsData?.map((job) => (
              <div key={job?.id} className="">
                <JobItem
                  data={job}
                  canViewJob
                  //    isBusiness={type?.toLowerCase() == "business-jobs"}
                  refetchJobs={appliedJobsRefetch}
                />
              </div>
            ))}
          </div>
          <div className="">
            <Pagination
              pageNav={pageNav}
              onPageChange={(page) => setPageQuery(page)}
              className="mt-10"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
