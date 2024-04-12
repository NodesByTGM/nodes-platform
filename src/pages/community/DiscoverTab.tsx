import React from "react";
// import {
//   UserPost,

// } from "../../components";
import PeopleGrid from "./PeopleGrid";
import BrandGrid from "./BrandGrid";

import { useCommunityContext } from "../../context/hooks";

export default function DiscoveryTab() {
  const { peopleOrBrand } = useCommunityContext();
  return (
    <div className="pb-40">
      {peopleOrBrand.toLowerCase() === "people" ? (
        <PeopleGrid />
      ) : (
        <BrandGrid />
      )}
    </div>
  );
}
