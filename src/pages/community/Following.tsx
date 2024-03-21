import React from "react";
import { SpacesGrid, EmptySection } from "../../components";

export default function Following({createAction}) {
  const spaces = [
    {
      id: 1,
      title: "Main Title",
      numberOfMembers: "555 members",
      numberOfPosts: "3 new posts last week",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 2,
      title: "Main Title",
      numberOfMembers: "555 members",
      numberOfPosts: "3 new posts last week",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 3,
      title: "Main Title",
      numberOfMembers: "555 members",
      numberOfPosts: "3 new posts last week",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 4,
      title: "Main Title",
      numberOfMembers: "555 members",
      numberOfPosts: "3 new posts last week",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 5,
      title: "Main Title",
      numberOfMembers: "555 members",
      numberOfPosts: "3 new posts last week",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 6,
      title: "Main Title",
      numberOfMembers: "555 members",
      numberOfPosts: "3 new posts last week",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 7,
      title: "Main Title",
      numberOfMembers: "555 members",
      numberOfPosts: "3 new posts last week",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 8,
      title: "Main Title",
      numberOfMembers: "555 members",
      numberOfPosts: "3 new posts last week",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 9,
      title: "Main Title",
      numberOfMembers: "555 members",
      numberOfPosts: "3 new posts last week",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  return (
    <div>
      {spaces?.length < 0 ? (
        <div className="">
          <SpacesGrid title={"Spaces you follow"} data={spaces} />
        </div>
      ) : (
        <div className="">
          <EmptySection
            description={
              "You are just getting started. Discover spaces to follow now."
            }
            buttonText={"Discover spaces"}

            createAction={createAction}
          />
        </div>
      )}
    </div>
  );
}
