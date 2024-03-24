import React, { useState } from "react";
import Interaction from "../../../components/custom/Interaction.tsx";
import { Card } from "../../../components";

export default function Interactions() {
  const [interactions] = useState([
    {
      id: "1",
      title: "Jane Doe created a space called “insert name of space”",
      text: "Lorem ipsum dolor sit amet consectetur. Libero adipiscing phasellus interdum ullamcorper sed amet netus iaculis.",
      img: "stuff",
    },
    {
      id: "2",
      title: "Jane Doe created a space called “insert name of space”",
      text: "Lorem ipsum dolor sit amet consectetur. Libero adipiscing phasellus interdum ullamcorper sed amet netus iaculis.",
      img: null,
    },
    {
      id: "3",
      title: "Jane Doe created a space called “insert name of space”",
      text: "Lorem ipsum dolor sit amet consectetur. Libero adipiscing phasellus interdum ullamcorper sed amet netus iaculis.",
      img: null,
    },
    {
      id: "4",
      title: "Jane Doe created a space called “insert name of space”",
      text: "Lorem ipsum dolor sit amet consectetur. Libero adipiscing phasellus interdum ullamcorper sed amet netus iaculis.",
      img: null,
    },
  ]);
  return (
    <Card title="Interactions">
      {interactions?.map((interaction) => (
        <div key={interaction.id} className="">
          <Interaction data={interaction} />
        </div>
      ))}
    </Card>
  );
}
