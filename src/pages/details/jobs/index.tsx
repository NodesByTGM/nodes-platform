import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Breadcrumbs,
  DetailsActions,
  SectionNavs,
  Loader,
} from "../../../components";
import Details from "./Details";
import Applicants from "./Applicants";
import Analytics from "./Analytics";
import { useGetJobByIdQuery } from "../../../api";
export default function JobDetails() {
  const { type, id } = useParams();

  const {
    data: jobsData,
    refetch: jobsRefetch,
    isFetching: jobsLoading,
  } = useGetJobByIdQuery(id);
  const [navs, setNavs] = useState([
    { id: 1, label: "Details", count: null },
    {
      id: 2,
      label: "Applicants",
      count: null,
    },
    {
      id: 3,
      label: "Analytics",
      count: null,
    },
  ]);
  const [selectedNav, setSelectedNav] = useState(navs[0]);

  const [links, setLinks] = useState([
    {
      id: 1,
      title: "Jobs by you",
      url: "/dashboard/see-more/business-jobs",
    },
    {
      id: 2,
      title: "",
      url: "#",
    },
  ]);

  const setBreadcrumbList = () => {
    setLinks([links[0], { ...links[1], title: jobsData?.result?.name }]);
  };

  useEffect(() => {
    setBreadcrumbList();
    setNavs([
      navs[0],
      { ...navs[1], count: jobsData?.result?.applicants?.length },
      navs[2],
    ]);
  }, [jobsData]);
  return (
    <div className="">
      {jobsLoading ? (
        <div className="my-40 mx-auto">
          <Loader />
        </div>
      ) : (
        <div className={`flex flex-col gap-10`}>
          <div className="">
            <Breadcrumbs links={links} />
          </div>

          <pre className="hidden text-blue-400">
            {JSON.stringify(jobsData?.result, null, 2)}
          </pre>

          <DetailsActions
            title={jobsData?.result?.name}
            type={type?.toLowerCase()}
            details={jobsData?.result}
            jobsRefetch={jobsRefetch}
          />

          <SectionNavs
            navs={navs}
            selectedNav={selectedNav}
            setSelectedNav={setSelectedNav}
          />

          <div className="">
            {selectedNav?.label?.toLowerCase() == "details" && (
              <Details details={jobsData?.result} />
            )}

            {selectedNav?.label?.toLowerCase() == "applicants" && (
              <Applicants details={jobsData?.result} />
            )}

            {selectedNav?.label?.toLowerCase() == "analytics" && (
              <Analytics details={jobsData?.result} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
