import React, { useState } from "react";
import { IndividualProfileCard } from "../../../components";
import Interaction from "../../../components/custom/Interaction.tsx";
export default function Individual() {
  const navs = ["Interactions"];
  const [selected, setSelected] = useState(navs[0]);

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
    {
      id: "5",
      title: "Jane Doe created a space called “insert name of space”",
      text: "Lorem ipsum dolor sit amet consectetur. Libero adipiscing phasellus interdum ullamcorper sed amet netus iaculis.",
      img: null,
    },
    {
      id: "6",
      title: "Jane Doe created a space called “insert name of space”",
      text: "Lorem ipsum dolor sit amet consectetur. Libero adipiscing phasellus interdum ullamcorper sed amet netus iaculis.",
      img: null,
    },
  ]);

  return (
    <div className="flex gap-x-8 h-full">
     <div className="max-h-max">   <IndividualProfileCard /></div>
      <div className="flex-1 ">
        <div className="flex flex-col w-full gap-10">
          <div className="flex items-center  gap-[32px] overflow-x-auto  ">
            {navs.map((nav) => (
              <div
                onClick={() => setSelected(nav)}
                key={nav}
                className={`${
                  selected.toLowerCase() == nav.toLowerCase()
                    ? "border-primary text-primary "
                    : "border-transparent text-[#727272] "
                } flex cursor-pointer flex-col items-center justify-center text-nowrap border-b-[2px] pb-2   pt-2 px-4 font-semibold  `}
              >
                <span className="text-base font-medium ">{nav}</span>
              </div>
            ))}
          </div>
          <div className="w-full bg-white p-6 rounded-lg flex flex-col gap-10">
            <span className="text-black font-medium text-base">
              Interactions
            </span>
            {interactions?.map((interaction) => (
              <div key={interaction.id} className="">
                <Interaction data={interaction} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
