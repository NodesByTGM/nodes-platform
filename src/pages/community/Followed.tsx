import React from "react";
import { filterOptions } from "../../utilities/constants";
import {
  UserPost,
  CommunityCard,
  LabeledSelect,
  CommunityPost,
} from "../../components";

export default function Followed() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="mb-6">
          <CommunityCard shadow>
            <UserPost isAsk />
          </CommunityCard>
        </div>
        <div className="flex justify-end">
          <LabeledSelect
            onChange={() => {}}
            isSort
            options={filterOptions["postsSort"]}
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 mt-[64px]">
        <CommunityCard>
          <CommunityPost />
        </CommunityCard>

        <CommunityCard>
          <CommunityPost />

          <div className="border-t border-[#EFEFEF] mt-6 pt-8 pl-12">
            <CommunityPost canShare={false} canReply={false} />
          </div>
        </CommunityCard>
      </div>
    </div>
  );
}
