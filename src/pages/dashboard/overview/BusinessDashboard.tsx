import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import { useDashboardContext } from "../../../context/hooks";
import {
  CarouselSection,
  HeaderAndDescription,
  WelcomeComponent,
  WelcomeCard,
} from "../../../components";
import { useNavigate } from "react-router-dom";
// import { useGetBusinessUserJobsQuery } from "../../../api";
import BusinessDashboardEmptyState from "./BusinessDashboardEmptyState.tsx";
import { SubscriptionAndBilling, Modal } from "../../../components";
export default function BusinessDashboard() {
  const { user } = useDashboardContext();
  const [subscriptionModal, setSubscriptionModal] = useState(false);

  // const {
  //   data: jobsData,
  //   refetch: jobsRefetch,
  //   isFetching: jobsLoading,
  // } = useGetBusinessUserJobsQuery(user?.business?.id);

  const navigate = useNavigate();
  const [WelcomeCardItems] = useState([
    {
      id: 1,
      text1: "Create a job",
      text2: "post",
      icon: "/img/Connect.png",
      buttonText: "Create a job post",
      buttonLink: "/dashboard/profile",
    },
    {
      id: 2,
      text1: "Complete",
      text2: "business profile",
      icon: "/img/CompleteProfile.png",
      buttonText: "Complete profile",
      buttonLink: "/dashboard/profile/edit-profile",
    },
  ]);
  return (
    <div>
      <div className="flex">
        {" "}
        <pre className="hidden text-blue-400 text-wrap max-w-[600px]">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
      <BusinessDashboardEmptyState
        user={user}
        addBusinessAccount={() => {
          setSubscriptionModal(true);
        }}
      />
      <HeaderAndDescription
        title={`Welcome to ${user?.business?.name}'s business account!`}
      />

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

      <Modal
        sizeClass="sm:max-w-[800px]"
        open={subscriptionModal}
        setOpen={setSubscriptionModal}
      >
        <SubscriptionAndBilling
          closeModal={() => setSubscriptionModal(false)}
        />
      </Modal>
    </div>
  );
}
