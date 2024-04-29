import React, { useState } from "react";
import {
  Button,
  SearchComponent,
  SectionNavs,
  Modal,
  AddPost,
  CommunityFilter,
} from "../../components";
import DiscoverTab from "./DiscoverTab";
import ConnectionsTab from "./ConnectionsTab";
import CommunityTab from "./CommunityTab";
import { Link } from "react-router-dom";
import { useCommunityContext } from "../../context/hooks";
import { useGetCommunityPostQuery } from "../../api";
import DiscoverSectionFilter from "./DiscoverSectionFilter";

function Community() {
  const { postModal, setAddPostModal, filterModal, setFilterModal } =
    useCommunityContext();
  const { refetch: communityPostsRefetch } = useGetCommunityPostQuery();
  const [navs] = useState([
    { id: 1, label: "Discover", count: null },
    { id: 2, label: "Connections", count: null },
    { id: 3, label: "Community", count: null },
  ]);
  const [selectedNav, setSelectedNav] = useState(navs[0]);

  return (
    <div>
      <div className="mb-6 flex items-start justify-between px-10">
        <div className=" flex flex-col gap-4 text-[20px] text-[#212121]">
          <h3 className="font-semibold ">Welcome to Nodes Community!</h3>
          <span className="font-normal text-base">
            something something nice tagline about the community
          </span>
        </div>{" "}
        <div className=" gap-4 hidden">
          <Link to={"/spaces"}>
            <Button className={`max-w-max`}>See Spaces</Button>
          </Link>
        </div>
      </div>

      <div className="px-10 mb-10 flex justify-between items-center border-b border-[#D6D6D6]">
        <SectionNavs
          navs={navs}
          selectedNav={selectedNav}
          setSelectedNav={setSelectedNav}
        />
        <div className="hidden">
          {" "}
          <SearchComponent placeholder="ex: acting" />
        </div>
      </div>

      {selectedNav?.label?.toLowerCase() !== "community" ? (
        <div className="px-10 mb-10">
          <div className="">
            <CommunityFilter setFilterModal={setFilterModal} />
          </div>{" "}
        </div>
      ) : null}

      <div className="px-10">
        {selectedNav?.label?.toLowerCase() == "discover" && <DiscoverTab />}

        {selectedNav?.label?.toLowerCase() == "connections" && (
          <ConnectionsTab />
        )}

        {selectedNav?.label?.toLowerCase() == "community" && (
          <CommunityTab getCommunityPostsQuery={useGetCommunityPostQuery} />
        )}
      </div>

      <Modal
        sizeClass="sm:max-w-[800px]"
        open={postModal}
        setOpen={setAddPostModal}
      >
        <AddPost
          refetch={() => {
            communityPostsRefetch();
          }}
          closeModal={() => setAddPostModal(false)}
        />{" "}
      </Modal>

      <Modal
        sizeClass="sm:max-w-[522px]"
        open={filterModal}
        setOpen={setFilterModal}
      >
        <DiscoverSectionFilter closeModal={() => setFilterModal(false)} />
      </Modal>
    </div>
  );
}

export default Community;
