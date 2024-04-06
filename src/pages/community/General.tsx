/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { filterOptions } from "../../utilities/constants";
import { useCommunityContext } from "../../context/hooks";
// import {useGetCommunityPostQuery} from '../../api'
import {
  UserPost,
  CommunityCard,
  LabeledSelect,
  CommunityPost,
  Loader,
} from "../../components";

export default function General({ getCommunityPostsQuery }) {
  const { setAddPostModal } = useCommunityContext();
  const [communityPostsData, setCommunityPostsData] = useState<any>([]);
  const {
    data: communityPostsResponse,
    // refetch: communityPostsRefetch,
    // isSuccess: communityPostsIsSuccess,
    isFetching: communityPostsLoading,
  } = getCommunityPostsQuery();

  useEffect(() => {
    if (communityPostsResponse?.result?.items?.length > 0) {
      setCommunityPostsData(communityPostsResponse?.result?.items);
    }
  }, [communityPostsResponse]);

  const updatePosts = (post) => {
      console.log(JSON.stringify('Post: '+ post.id, null, 2));
      const updatedCommunityPostsData = communityPostsData.map(item => item.id === post.id ? post : item);


   
    setCommunityPostsData(updatedCommunityPostsData);
  };

  return (
    <div>
      <div className="flex flex-col">
        <div
          onClick={() => setAddPostModal(true)}
          className="mb-6 cursor-pointer"
        >
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

      <div className="flex flex-col gap-6 ">
        <pre className="text-blue-400 hidden">
          {JSON.stringify(communityPostsResponse?.result?.items, null, 2)}
        </pre>
        {communityPostsLoading && communityPostsData.length === 0 ? (
          <div className="my-20">
            <Loader />
          </div>
        ) : null}

        {communityPostsData?.length > 0 ? (
          <div className="flex flex-col gap-6 mt-[64px]">
            {communityPostsData?.map((data) => (
              <div key={data?.id} className="">
                <CommunityCard>
                  <CommunityPost data={data} updatePosts={updatePosts} />
                </CommunityCard>
              </div>
            ))}
          </div>
        ) : null}

        {!communityPostsLoading && communityPostsData.length === 0 ? (
          <div className="mx-auto max-w-[239px] flex flex-col justify-center items-center ">
            {/* <h3 className="text-center font-medium text-base text-[#212121]">
                Hi, {user?.username}
              </h3> */}
            <span className="mt-8  text-center font-normal text-base text-[#212121]">
              Nothing to see here yet, add a post
            </span>
          </div>
        ) : null}

        {/* <CommunityCard>
          <CommunityPost />

          <div className="border-t border-[#EFEFEF] mt-6 pt-8 pl-12">
            <CommunityPost canShare={false} canReply={false} />
          </div>
        </CommunityCard> */}
      </div>
    </div>
  );
}
