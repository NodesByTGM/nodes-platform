import React from "react";
import { CommunityPeopleCard } from "../../components";
type IPeopleGrid = {
  isConnected?: boolean;
};
export default function PeopleGrid({ isConnected = false }: IPeopleGrid) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        <CommunityPeopleCard isConnected={isConnected} />
        <CommunityPeopleCard isConnected={isConnected} />
        <CommunityPeopleCard isConnected={isConnected} />
        <CommunityPeopleCard isConnected={isConnected} />
        <CommunityPeopleCard isConnected={isConnected} />
        <CommunityPeopleCard isConnected={isConnected} />
      </div>
    </div>
  );
}
