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
  } = useGetTrendingQuery({
    page: 1,
    pageSize: 10
  });

  useEffect(() => {
    if (trendingIsSuccess && trending?.result?.length) {
      setTrendingData(trending?.result);
    }
  }, [trending, trendingIsSuccess]);
  return (
    <div>
      {/* <pre className="max-w-[400px] text-wrap ">{JSON.stringify(trendingData[0])}</pre> */}

      <div>
        {trendingLoading && trendingData.length === 0 ? (
          <div className="my-40">
            <Loader />
          </div>
        ) : null}

        {!trendingLoading && trendingData?.length === 0 ? (
          <div className="text-base text-primary my-40 text-center">
            No trending events available yet.
          </div>
        ) : null}

        {!trendingLoading && trendingData && trendingData?.length > 0 ? (
          <ItemsCarousel
            data={trendingData || []}
            trend
            title={`Trending Events`}
            description='Stay in the loop with what’s buzzing in the creative world'
            //   description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}
          />
        ) : null}
      </div>
    </div>
  );
}
