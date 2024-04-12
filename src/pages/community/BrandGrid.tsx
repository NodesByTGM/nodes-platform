import React from "react";
import { CommunityBrandsCard } from "../../components";
type IBrandGrid = {
  isConnected?: boolean;
};
export default function BrandGrid({ isConnected = false }: IBrandGrid) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        <CommunityBrandsCard isConnected={isConnected} />
        <CommunityBrandsCard isConnected={isConnected} />
        <CommunityBrandsCard isConnected={isConnected} />
        <CommunityBrandsCard isConnected={isConnected} />
        <CommunityBrandsCard isConnected={isConnected} />
        <CommunityBrandsCard isConnected={isConnected} />
      </div>
    </div>
  );
}
