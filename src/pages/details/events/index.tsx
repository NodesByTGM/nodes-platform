import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Breadcrumbs,
  DetailsActions,
  SectionNavs,
  Loader,
} from "../../../components";
import Details from "./Details";
import Saves from "./Saves";
import { useGetEventByIdQuery } from "../../../api";
export default function EventDetails() {
  const { type, id } = useParams();

  const {
    data: eventsData,
    refetch: eventsRefetch,
    isFetching: eventsLoading,
  } = useGetEventByIdQuery(id);
  const [navs, setNavs] = useState([
    {
      id: 1,
      label: "Details",
      count: null,
    },
    {
      id: 2,
      label: "Saves",
      count: null,
    },
  
  ]);
  const [selectedNav, setSelectedNav] = useState(navs[0]);

  const [links, setLinks] = useState([
    {
      id: 1,
      title: "Events by you",
      url: "/dashboard/see-more/business-events",
    },
    {
      id: 2,
      title: "",
      url: "#",
    },
  ]);

  const setBreadcrumbList = () => {
    setLinks([links[0], { ...links[1], title: eventsData?.result?.name }]);
  };

  useEffect(() => {
    setBreadcrumbList();
    setNavs([
      navs[0],
      { ...navs[1], count: eventsData?.result?.saves?.length },
      navs[2],
    ]);
  }, [eventsData]);
  return (
    <div className="">
      {eventsLoading ? (
        <div className="my-40 mx-auto">
          <Loader />
        </div>
      ) : (
        <div className={`flex flex-col gap-10`}>
          <div className="">
            <Breadcrumbs links={links} />
          </div>

          <pre className="hidden text-blue-400">
            {JSON.stringify(eventsData?.result, null, 2)}
          </pre>

          <DetailsActions
            title={eventsData?.result?.name}
            type={type?.toLowerCase()}
            details={eventsData?.result}
            eventsRefetch={eventsRefetch}
          />

          <SectionNavs
            navs={navs}
            selectedNav={selectedNav}
            setSelectedNav={setSelectedNav}
          />

          <div className="">
            {selectedNav?.label?.toLowerCase() == "details" && (
              <Details details={eventsData?.result} />
            )}

            {selectedNav?.label?.toLowerCase() == "saves" && (
              <Saves details={eventsData?.result} />
            )}

         
          </div>
        </div>
      )}
    </div>
  );
}
