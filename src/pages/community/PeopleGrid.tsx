/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import {
  CommunityPeopleCard,
  DiscoverCardLoader,
  Pagination,
} from "../../components";
type IPeopleGrid = {
  isConnected?: boolean;
  searchText?: string;
};
import { useGetDiscoverUsersQuery } from "../../api";

export default function PeopleGrid({
  isConnected = false,
  searchText = "",
}: IPeopleGrid) {
  const [usersList, setUsersList] = useState<any>([]);
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
    totalPages: 1,
    totalItems: 0,
  });
  const {
    data: discoverUsersData,
    refetch: discoverUsersRefetch,
    isSuccess: discoverUsersIsSuccess,
    isFetching: discoverUsersLoading,
  } = useGetDiscoverUsersQuery(query);

  useEffect(() => {
    const result = discoverUsersData?.result;

    if (discoverUsersIsSuccess && result?.items?.length > 0) {
      setUsersList(result?.items);
      setPageNav({
        currentPage: result.currentPage,
        totalPages: result.totalPages,
        totalItems: result.totalItems,
      });
    }
  }, [discoverUsersData, discoverUsersIsSuccess]);

  useEffect(() => {
    discoverUsersRefetch(query);
  }, [query, discoverUsersRefetch]);

  useEffect(() => {
    setQuery({ ...query, search: searchText });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <div>
      <pre className="max-w-[400px] hidden ">
        {JSON.stringify(usersList[0], null, 2)}
      </pre>
    

      {discoverUsersLoading && usersList.length === 0 ? (
        <div className="my-40">
          <div className="grid discover-grid-cols gap-4">
            
            <DiscoverCardLoader />
            <DiscoverCardLoader />
            <DiscoverCardLoader />
          </div>
        </div>
      ) : null}

      {!discoverUsersLoading && usersList?.length === 0 ? (
        <div className="text-base text-primary my-40  text-center">
          Nothing to see.
        </div>
      ) : null}
      <div className="">
        {usersList && usersList?.length > 0 ? (
          <div className="grid discover-grid-cols gap-4">
            {usersList?.map((user) => (
              <div key={user?.id} className="">
                <CommunityPeopleCard data={user} isConnected={isConnected} />
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <Pagination
        pageNav={pageNav}
        onPageChange={(page) => setPageQuery(page)}
        className="mt-10"
      />
    </div>
  );
}
