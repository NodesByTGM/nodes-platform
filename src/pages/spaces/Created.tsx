import React from "react";
import { SpacesGrid, EmptySection } from "../../components";

export default function Created({ createAction }) {
  const spaces = [
    // {
    //   id: 1,
    //   title: "Main Title",
    //   numberOfMembers: "555 members",
    //   numberOfPosts: "3 new posts last week",
    //   description: "Lorem ipsum dolor sit amet consectetur.",
    // },
    // {
    //   id: 2,
    //   title: "Main Title",
    //   numberOfMembers: "555 members",
    //   numberOfPosts: "3 new posts last week",
    //   description: "Lorem ipsum dolor sit amet consectetur.",
    // },
    // {
    //   id: 3,
    //   title: "Main Title",
    //   numberOfMembers: "555 members",
    //   numberOfPosts: "3 new posts last week",
    //   description: "Lorem ipsum dolor sit amet consectetur.",
    // },
    // {
    //   id: 4,
    //   title: "Main Title",
    //   numberOfMembers: "555 members",
    //   numberOfPosts: "3 new posts last week",
    //   description: "Lorem ipsum dolor sit amet consectetur.",
    // },
    // {
    //   id: 5,
    //   title: "Main Title",
    //   numberOfMembers: "555 members",
    //   numberOfPosts: "3 new posts last week",
    //   description: "Lorem ipsum dolor sit amet consectetur.",
    // },
    // {
    //   id: 6,
    //   title: "Main Title",
    //   numberOfMembers: "555 members",
    //   numberOfPosts: "3 new posts last week",
    //   description: "Lorem ipsum dolor sit amet consectetur.",
    // },
    // {
    //   id: 7,
    //   title: "Main Title",
    //   numberOfMembers: "555 members",
    //   numberOfPosts: "3 new posts last week",
    //   description: "Lorem ipsum dolor sit amet consectetur.",
    // },
    // {
    //   id: 8,
    //   title: "Main Title",
    //   numberOfMembers: "555 members",
    //   numberOfPosts: "3 new posts last week",
    //   description: "Lorem ipsum dolor sit amet consectetur.",
    // },
    // {
    //   id: 9,
    //   title: "Main Title",
    //   numberOfMembers: "555 members",
    //   numberOfPosts: "3 new posts last week",
    //   description: "Lorem ipsum dolor sit amet consectetur.",
    // },
  ];

  return (
    <div>
      {spaces?.length > 0 ? (
        <div className="">
          <SpacesGrid title={"Created by you"} data={spaces} />
        </div>
      ) : (
        <div className="">
          <EmptySection
            createAction={createAction}
            description={
              "You haven’t created a space yet. Get started now and create one"
            }
            buttonText={"Create a space"}
          />
        </div>
      )}
    </div>
  );
}
