import React from "react";

import { UserPost, CommunityCard } from "../../components";

export default function General() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="mb-6">
          <CommunityCard shadow>
            <UserPost isAsk/>
          </CommunityCard>
        </div>
      </div>
    </div>
  );
}
