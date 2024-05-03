

import React from "react";
// import {
//   UserPost,

// } from "../../components";
import ConnectedPeoplesGrid from "./ConnectedPeoplesGrid";
import BrandGrid from "./BrandGrid";

import { useCommunityContext } from "../../context/hooks";

export default function ConnectionsTab() {
  const { peopleOrBrand } = useCommunityContext();
  return (
    <div className="pb-40">
      
      {peopleOrBrand.toLowerCase() === "people" ? (
        <ConnectedPeoplesGrid isConnected/>
      ) : (
        <BrandGrid isConnected/>
      )}
    </div>
  );
}

