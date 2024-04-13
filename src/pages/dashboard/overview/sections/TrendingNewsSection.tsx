import React, { useEffect, useState } from "react";
import { useGetTrendingQuery } from "../../../../api";
import { ItemsCarousel, Loader } from "../../../../components";

export default function TrendingNewsSection() {
  const [trendingData, setTrendingData] = useState([]);

  const {
    data: trending,
    // refetch: trendingRefetch,
    isFetching: trendingLoading,
    isSuccess: trendingIsSuccess,
  } = useGetTrendingQuery();

  useEffect(() => {
    if (trendingIsSuccess && trending?.result?.length) {
      setTrendingData(trending?.result);
    }
  }, [trending, trendingIsSuccess]);
  return (
    <div>
      {/* <pre className="max-w-[400px] text-wrap ">{JSON.stringify(trending)}</pre> */}

      <div>
        {trendingLoading && trendingData.length === 0 ? (
          <div className="my-40">
            <Loader />
          </div>
        ) : null}

        {!trendingLoading && trendingData?.length === 0 ? (
          <div className="text-base text-primary my-40 text-center">
            Nothing to see.
          </div>
        ) : null}

        {!trendingLoading && trendingData && trendingData?.length > 0 ? (
          <ItemsCarousel
            data={trendingData || []}
            trend
            title={`Trending News`}
            //   description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}
          />
        ) : null}
      </div>
    </div>
  );
}
