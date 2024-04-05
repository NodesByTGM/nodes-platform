import React, { useState } from "react";
import {
  Button,
  SearchComponent,
  SectionNavs,
  Modal,
  AddPost,
} from "../../components";
import General from "./General";
import Followed from "./Followed";
import MyPosts from "./MyPosts";
import { Link } from "react-router-dom";
import { useCommunityContext } from "../../context/hooks";
import {useGetCommunityPostQuery} from '../../api'

function Community() {
  const { postModal, setAddPostModal } = useCommunityContext();
  const {
   
    refetch: communityPostsRefetch,
  
  } = useGetCommunityPostQuery();
  const [navs] = useState([
    { id: 1, label: "General", count: null },
    { id: 2, label: "Followed", count: null },
    { id: 3, label: "My posts", count: null },
  ]);
  const [selectedNav, setSelectedNav] = useState(navs[0]);

  return (
    <div>
      <div className="mb-4 flex items-start justify-between">
        <div className="mb-6 flex flex-col gap-4 text-[20px] text-[#212121]">
          <h3 className="font-medium ">Welcome to Nodes Community!</h3>
          <span className="font-nnormal">
            something something nice tagline about the community
          </span>
        </div>{" "}
        <div className="flex gap-4">
          <Link to={"/spaces"}>
            <Button className={`max-w-max`}>See Spaces</Button>
          </Link>
        </div>
      </div>

      <div className="mb-10 flex justify-between items-center">
        <SectionNavs
          navs={navs}
          selectedNav={selectedNav}
          setSelectedNav={setSelectedNav}
        />
        <div className="">
          {" "}
          <SearchComponent placeholder="ex: acting" />
        </div>
      </div>

      <div className="">
        {selectedNav?.label?.toLowerCase() == "general" && <General getCommunityPostsQuery={useGetCommunityPostQuery}/>}

        {selectedNav?.label?.toLowerCase() == "followed" && <Followed />}

        {selectedNav?.label?.toLowerCase() == "my posts" && <MyPosts />}
      </div>

      <Modal
        sizeClass="sm:max-w-[800px]"
        open={postModal}
        setOpen={setAddPostModal}
      >
        <AddPost refetch={() => {communityPostsRefetch()}} closeModal={() => setAddPostModal(false)}/>{" "}
      </Modal>
    </div>
  );
}

export default Community;
