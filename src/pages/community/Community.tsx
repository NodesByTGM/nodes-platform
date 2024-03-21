import React, { useState } from "react";
import { Button, SearchComponent, SectionNavs } from "../../components";
import Discover from "./Discover";
import Following from "./Following";
import Created from "./Created";
function Community() {
  const [navs] = useState([
    {
      label: "Discover",
      count: null,
    },
    {
      label: "Following",
      count: null,
    },
    {
      label: "Created",
      count: null,
    },
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
        <Button className={`max-w-max`}>See Community</Button>
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

        {selectedNav?.label?.toLowerCase() == "following" && <Following />}

        {selectedNav?.label?.toLowerCase() == "created" && <Created />}
      </div>
    </div>
  );
}

export default Community;
