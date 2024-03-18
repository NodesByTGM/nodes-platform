import React, { useState } from "react";
// import { useParams } from "react-router-dom";

import {
  CarouselSection,
  HeaderAndDescription,
  WelcomeComponent,
  WelcomeCard,
} from "../../../components";
import { useNavigate } from "react-router-dom";

export default function BusinessDashboard() {
  const navigate = useNavigate();
  const [WelcomeCardItems] = useState([
    {
      id: 1,
      text1: "Create a job",
      text2: "post",
      icon: "/img/Connect.png",
      buttonText: "Create a job post",
      buttonLink: "profile",
    },
    {
      id: 2,
      text1: "Complete",
      text2: "business profile",
      icon: "/img/CompleteProfile.png",
      buttonText: "Complete profile",
      buttonLink: "profile",
    },
  ]);
  return (
    <div>
      <HeaderAndDescription title="Welcome to <insert business name>”s business account!" />

      <div className={` h-4 mb-10 border-b border-[#D6D6D6]`}></div>

      <div className="flex flex-col gap-[64px]">
        <WelcomeComponent
          title="Welcome to Nodes 
          for business!"
          description="You now have access to a creative ecosystem, follow spaces, connect with the community and access job opportunities"
        >
          <div className="grid grid-cols-2 gap-6">
            {WelcomeCardItems.map((item) => (
              <div key={item.id} className="">
                <WelcomeCard
                  text1={item.text1}
                  text2={item.text2}
                  icon={item.icon}
                  buttonText={item.buttonText}
                  buttonLink={item.buttonLink}
                />
              </div>
            ))}
          </div>
        </WelcomeComponent>

        <CarouselSection
          navigateTo={() => navigate("/dashboard/see-more/business")}
          isBusiness
          seeMore
          job
          title={`Jobs by you`}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}
        />

        <CarouselSection
          trend
          title={`Exclusive events`}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}
        />
      </div>
    </div>
  );
}
