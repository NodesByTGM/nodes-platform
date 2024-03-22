import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import { useDashboardContext } from "../../../context/hooks";
import {
  CarouselSection,
  HeaderAndDescription,
  WelcomeComponent,
  WelcomeCard,
  Loader,
  JobPostForm,
  EventPostForm,
  Modal,
} from "../../../components";
import { useNavigate } from "react-router-dom";
import {
  useGetBusinessUserJobsQuery,
  useGetBusinessUserEventsQuery,
} from "../../../api";
import BusinessDashboardEmptyState from "./BusinessDashboardEmptyState.tsx";
import { SubscriptionAndBilling } from "../../../components";
import BusinessDashboardSectionEmptyStates from "./BusinessDashboardSectionEmptyStates";

export default function BusinessDashboard() {
  const { user } = useDashboardContext();
  const [jobModal, setJobModal] = useState(false);
  const [eventModal, setEventModal] = useState(false);

  const [subscriptionModal, setSubscriptionModal] = useState(false);

  const {
    data: jobsData,
    refetch: jobsRefetch,
    isFetching: jobsLoading,
  } = useGetBusinessUserJobsQuery({ businessId: user?.business?.id });

  const {
    data: eventsData,
    refetch: eventsRefetch,
    isFetching: eventsLoading,
  } = useGetBusinessUserEventsQuery({ businessId: user?.business?.id });

  const navigate = useNavigate();
  const addJobOrEvents = (type) => {
    if (type == "job") {
      setJobModal(true);
    }
    if(type == 'event')[
      setEventModal(true)
    ]
  };
  const [WelcomeCardItems] = useState([
    {
      id: 1,
      text1: "Create a job",
      text2: "post",
      icon: "/img/Connect.png",
      buttonText: "Create a job post",
      buttonLink: "/dashboard/profile",
      action: () => addJobOrEvents('job')
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
      <pre className="hidden text-blue-400 text-wrap max-w-[600px]">
        {JSON.stringify(jobsData?.jobs, null, 2)}
      </pre>
      {!user?.business?.id ? (
        <BusinessDashboardEmptyState
          user={user}
          addBusinessAccount={() => {
            setSubscriptionModal(true);
          }}
        />
      ) : (
        <div className="">
          <HeaderAndDescription
            title={`Welcome to ${user?.business?.name}'s business account!`}
          />

          <div className={` h-4 mb-10 border-b border-[#D6D6D6]`}></div>

          <div className="flex flex-col gap-[64px]">
            <WelcomeComponent
              title="Welcome to Nodes for business!"
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
                      action={item.action}
                    />
                  </div>
                ))}
              </div>
            </WelcomeComponent>

            {jobsLoading && !jobsData ? (
              <div className="my-40">
                <Loader />
              </div>
            ) : null}

            {(!jobsLoading && jobsData?.jobs?.length === 0) ||
            (!jobsLoading && !jobsData) ? (
              <div>
                <BusinessDashboardSectionEmptyStates
                  type="job"
                  user={user}
                  addJobOrEvents={() => addJobOrEvents("job")}
                />
              </div>
            ) : null}

            {!jobsLoading && jobsData && jobsData?.jobs?.length > 0 ? (
              <CarouselSection
                data={jobsData?.jobs || []}
                refetchJobs={jobsRefetch}
                navigateTo={() => navigate("/dashboard/see-more/business-jobs")}
                seeMore
                isBusiness
                job
                title={`Jobs by you`}
                description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}
              />
            ) : null}

            {eventsLoading && !eventsData ? (
              <div className="my-40">
                <Loader />
              </div>
            ) : null}

            {(!eventsLoading && eventsData?.events?.length === 0) ||
            (!eventsLoading && !eventsData) ? (
              <div>
                <BusinessDashboardSectionEmptyStates
                  type="events"
                  user={user}
                  addJobOrEvents={() => addJobOrEvents("event")}
                />
              </div>
            ) : null}

            {!eventsLoading && eventsData && eventsData?.events?.length > 0 ? (
              <CarouselSection
                data={eventsData?.events || []}
                navigateTo={() => navigate("/dashboard/see-more/business-jobs")}
                seeMore
                trend
                title={`Exclusive events`}
                description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}
              />
            ) : null}

         
          </div>
        </div>
      )}
      <Modal
        sizeClass="sm:max-w-[800px]"
        open={subscriptionModal}
        setOpen={setSubscriptionModal}
      >
        <SubscriptionAndBilling
          closeModal={() => setSubscriptionModal(false)}
        />
      </Modal>

      <Modal sizeClass="sm:max-w-[800px]" open={jobModal} setOpen={setJobModal}>
        <JobPostForm
          refetchAllJobs={jobsRefetch}
          closeModal={() => setJobModal(false)}
        />
      </Modal>
      <Modal sizeClass="sm:max-w-[800px]" open={eventModal} setOpen={setEventModal}>
        <EventPostForm
          refetchAllJobs={eventsRefetch}
          closeModal={() => setEventModal(false)}
        />
      </Modal>
    </div>
  );
}
