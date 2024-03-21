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
    // refetch: jobsRefetch,
    isFetching: jobsLoading,
  } = useGetJobByIdQuery(id);
  const [navs, setNavs] = useState([
    {
      label: "Details",
      count: null,
    },
    {
      label: "Applicants",
      count: null,
    },
    {
      label: "Analytics",
      count: null,
    },
  ]);
  const [selectedNav, setSelectedNav] = useState(navs[1]);

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
    setLinks([links[0], { ...links[1], title: jobsData?.job?.name }]);
  };

  useEffect(() => {
    setBreadcrumbList();
    setNavs([
      navs[0],
      { ...navs[1], count: jobsData?.job?.applicants?.length },
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
            {JSON.stringify(jobsData?.job, null, 2)}
          </pre>

          <DetailsActions
            title={jobsData?.job?.name}
            type={type?.toLowerCase()}
            details={jobsData?.job}
          />

          <SectionNavs
            navs={navs}
            selectedNav={selectedNav}
            setSelectedNav={setSelectedNav}
          />

          <div className="">
            {selectedNav?.label?.toLowerCase() == "details" && (
              <Details details={jobsData?.job} />
            )}

            {selectedNav?.label?.toLowerCase() == "applicants" && (
              <Applicants details={jobsData?.job} />
            )}

            {selectedNav?.label?.toLowerCase() == "analytics" && (
              <Analytics details={jobsData?.job} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
