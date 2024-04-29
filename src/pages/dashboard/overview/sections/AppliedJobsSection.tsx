/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { ItemsCarousel, Loader } from "../../../../components";
// import { useGetAppliedJobsQuery } from "../../../../api";
import { useNavigate } from "react-router-dom";


export default function AppliedJobsSection({useGetAppliedJobsQuery}) {
    const navigate = useNavigate();
  const [appliedJobsData, setAppliedJobsData] = useState<any>([]);
  const {
    data: appliedJobsResponse,
    refetch: appliedJobsRefetch,
    isFetching: appliedJobsLoading,
  } = useGetAppliedJobsQuery();

  useEffect(() => {
    if (appliedJobsResponse?.result?.items?.length > 0) {
      setAppliedJobsData(appliedJobsResponse?.result.items);
    }
  }, [appliedJobsResponse]);

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
        <ItemsCarousel
          data={appliedJobsData || []}
          navigateTo={() => navigate("/dashboard/see-more/talent")}
          seeMore
          job
          canViewJob
          refetchJobs={appliedJobsRefetch}
          title={`Jobs you have applied to`}
          description={`See your applications at a glance.`}
        />
      ) : null}
    </div>
  );
}
