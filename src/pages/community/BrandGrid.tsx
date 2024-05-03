/* eslint-disable @typescript-eslint/no-explicit-any */
import React,  { useEffect, useState } from "react";
import { CommunityBrandsCard, Loader } from "../../components";
import { useGetDiscoverBrandsQuery } from "../../api";

type IBrandGrid = {
  isConnected?: boolean;
};
export default function BrandGrid({ isConnected = false }: IBrandGrid) {
  const [brandsList, setBrandsList] = useState<any>([]);
  const {
    data: discoverBrandsData,
    // refetch: discoverBrandsRefetch,
    isSuccess: discoverBrandsIsSuccess,
    isFetching: discoverBrandsLoading,
  } = useGetDiscoverBrandsQuery();

  useEffect(() => {
    if (
      discoverBrandsIsSuccess &&
      discoverBrandsData?.result?.items?.length > 0
    ) {
      setBrandsList(discoverBrandsData?.result?.items);
    }
  }, [discoverBrandsData, discoverBrandsIsSuccess]);
  return (
    <div>
    <pre className="max-w-[400px] hidden">{JSON.stringify(brandsList, null, 2)}</pre>
    {discoverBrandsLoading && brandsList.length === 0 ? (
      <div className="my-40">
        <Loader />
      </div>
    ) : null}

    {!discoverBrandsLoading && brandsList?.length === 0 ? (
      <div className="text-base text-primary my-40  text-center">
        Nothing to see.
      </div>
    ) : null}
    <div className="">
      {!discoverBrandsLoading && brandsList && brandsList?.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {brandsList?.map((user) => (
            <div key={user?.id} className="">
        <CommunityBrandsCard isConnected={isConnected} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  </div>
   
  );
}
