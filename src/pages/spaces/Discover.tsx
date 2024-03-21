import React from "react";
import { SpacesGrid } from "../../components";
export default function Discover() {
  const recommendedData = [
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
  ];

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
    <div className="flex flex-col gap-10">
      <SpacesGrid title={"Recommended for you"} data={recommendedData} />
      <SpacesGrid title={"Spaces"} data={spaces} />
    </div>
  );
}
