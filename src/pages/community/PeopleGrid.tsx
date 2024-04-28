/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { CommunityPeopleCard, Loader } from "../../components";
type IPeopleGrid = {
  isConnected?: boolean;
};
import { useGetDiscoverUsersQuery } from "../../api";

export default function PeopleGrid({ isConnected = false }: IPeopleGrid) {
  const [usersList, setUsersList] = useState<any>([]);
  const {
    data: discoverUsersData,
    // refetch: discoverUsersRefetch,
    isSuccess: discoverUsersIsSuccess,
    isFetching: discoverUsersLoading,
  } = useGetDiscoverUsersQuery();

  useEffect(() => {
    if (
      discoverUsersIsSuccess &&
      discoverUsersData?.result?.items?.length > 0
    ) {
      setUsersList(discoverUsersData?.result?.items);
    }
  }, [discoverUsersData, discoverUsersIsSuccess]);

  return (
    <div>
      <pre className="max-w-[400px] hidden ">{JSON.stringify(usersList[0], null, 2)}</pre>
      {discoverUsersLoading && usersList.length === 0 ? (
        <div className="my-40">
          <Loader />
        </div>
      ) : null}

      {!discoverUsersLoading && usersList?.length === 0 ? (
        <div className="text-base text-primary my-40  text-center">
          Nothing to see.
        </div>
      ) : null}
      <div className="">
        {!discoverUsersLoading && usersList && usersList?.length > 0 ? (
          <div className="grid grid-cols-3 gap-4">
            {usersList?.map((user) => (
              <div key={user?.id} className="">
                <CommunityPeopleCard data={user} isConnected={isConnected} />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
