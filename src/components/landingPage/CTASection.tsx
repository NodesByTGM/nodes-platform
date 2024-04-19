/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Plus, X } from "react-feather";

import { PaleSection } from "../../components/landingPage";
export default function CTASection() {
  const faq = [
    {
      id: 1,
      title: "What is Nodes?",
      description:
        "Lorem ipsum dolor sit amet consectetur. Risus egestas aliquet accumsan libero ipsum facilisis nibh. ",
    },
    {
      id: 2,
      title: "What is are the benefits?",
      description:
        "Lorem ipsum dolor sit amet consectetur. Risus egestas aliquet accumsan libero ipsum facilisis nibh. ",
    },
    {
      id: 3,
      title: "Who needs nodes",
      description:
        "Lorem ipsum dolor sit amet consectetur. Risus egestas aliquet accumsan libero ipsum facilisis nibh. ",
    },
    {
      id: 4,
      title: "What is the pricing",
      description:
        "Lorem ipsum dolor sit amet consectetur. Risus egestas aliquet accumsan libero ipsum facilisis nibh. ",
    },
  ];
  const [selected, setSelected] = useState<any>(faq[0]);
  return (
    <div className="landingPageMainDiv pt-[80px] pb-[120px]">
      <PaleSection>
        <div className=" grid grid-cols-2 gap-[34px] ">
          <div className="flex flex-col max-w-[319px] font-medium text-primary">
            <h3 className=" text-[35px] mb-4">Get to know us better </h3>

            <NavLink to={"/"}>
              <button
                className={`border-primary text-primary p-4 rounded-[8px]  border `}
              >
                <div className="flex items-center gap-2">
                  {" "}
                  <span className="font-medium text-base">
                    {" "}
                    Learn more about us
                  </span>
                </div>
              </button>
            </NavLink>
          </div>
          <div className="grid  gap-6">
            {faq.map((item, index) => (
              <div
                key={item.title}
                className={`${
                  index !== 0 ? "border-t-2 border-[#D6DE21]              " : ""
                }    w-full flex flex-col gap-4 `}
              >
                <div className={`${selected?.id !== item.id ? 'py-10' :  index === 0 ? '' : 'pt-10'} flex items-center justify-between`}>
                  <h3 className="text-primary text-[24px] font-medium">
                    {item.title}
                  </h3>

                  <div className="cursor-pointer max-w-max">
                    {selected?.id === item.id ? (
                      <X
                        onClick={() => setSelected(null)}
                        className="size-[14px]"
                      />
                    ) : (
                      <Plus
                        onClick={() => setSelected(item)}
                        className="size-[14px]"
                      />
                    )}
                  </div>
                </div>
                {selected?.id === item.id ? (
                  <span className="text-primary text-base font-normal">
                    {item.description}
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </PaleSection>
    </div>
  );
}
