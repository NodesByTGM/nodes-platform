import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  ButtonOutline,
  SearchComponent,
  SectionNavs,
  Modal,
  CreateSpaceForm,
} from "../../components";
import Discover from "./Discover";
import Following from "./Following";
import Created from "./Created";
// import { useSpacesContext } from "../../context/hooks";
function Community() {
  // const { pageName } = useSpacesContext();
  const [createSpaceModal, setCreateSpaceModal] = useState(false);
  const [navs] = useState([
    { id: 1, label: "Discover", count: null },
    { id: 2, label: "Following", count: null },
    { id: 3, label: "Created", count: null },
  ]);
  const [selectedNav, setSelectedNav] = useState(navs[0]);

  return (
    <div>
      <div className="mb-4 flex items-start justify-between">
        <div className="mb-6 flex flex-col gap-4 text-[20px] text-[#212121]">
          <h3 className="font-medium ">Welcome to Nodes Spaces!</h3>
          <span className="font-nnormal">
            We believe in the power of every individual's creative spark.{" "}
          </span>
        </div>{" "}
        <div className="flex gap-4">
          <ButtonOutline
            onClick={() => setCreateSpaceModal(true)}
            className={`${
              selectedNav?.label?.toLowerCase() === "created" ? "" : "hidden"
            }`}
          >
            Create a space
          </ButtonOutline>
          <Link to={"/community"}>
            {" "}
            <Button className={`max-w-max`}>See Community</Button>
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
        {selectedNav?.label?.toLowerCase() == "discover" && <Discover />}

        {selectedNav?.label?.toLowerCase() == "following" && (
          <Following createAction={() => {}} />
        )}

        {selectedNav?.label?.toLowerCase() == "created" && (
          <Created
            createAction={() => {
              setCreateSpaceModal(true);
            }}
          />
        )}
      </div>

      <Modal
        sizeClass="sm:max-w-[800px]"
        open={createSpaceModal}
        setOpen={setCreateSpaceModal}
      >
        <CreateSpaceForm closeModal={() => setCreateSpaceModal(false)} />
      </Modal>
    </div>
  );
}

export default Community;
