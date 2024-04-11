/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useDashboardContext } from "../../../context/hooks";
import {
  ItemsCarousel,
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
  const [jobsData, setJobsData] = useState<any>([]);
  const [eventsData, setEventsData] = useState<any>([]);

  const [jobModal, setJobModal] = useState(false);
  const [eventModal, setEventModal] = useState(false);

  const [subscriptionModal, setSubscriptionModal] = useState(false);

  const {
    data: jobsResponse,
    refetch: jobsRefetch,
    isFetching: jobsLoading,
  } = useGetBusinessUserJobsQuery({ businessId: user?.business?.id });

  const {
    data: eventsResponse,
    refetch: eventsRefetch,
    isFetching: eventsLoading,
  } = useGetBusinessUserEventsQuery({ businessId: user?.business?.id });

  const navigate = useNavigate();
  const addJobOrEvents = (type) => {
    if (type == "job") {
      setJobModal(true);
    }
    if (type == "event") [setEventModal(true)];
  };
  const [WelcomeCardItems] = useState([
    {
      id: 1,
      text1: "Create a job",
      text2: "post",
      icon: "/img/Connect.png",
      buttonText: "Create a job post",
      buttonLink: "/profile",
      action: () => addJobOrEvents("job"),
    },
    {
      id: 2,
      text1: "Complete",
      text2: "business profile",
      icon: "/img/CompleteProfile.png",
      buttonText: "Complete profile",
      buttonLink: "/profile/edit-profile",
    },
  ]);

  useEffect(() => {
    if (eventsResponse?.result?.items?.length > 0) {
      setEventsData(eventsResponse?.result.items);
    }
  }, [eventsResponse]);

  useEffect(() => {
    if (jobsResponse?.result?.items?.length > 0) {
      setJobsData(jobsResponse?.result.items);
    }
  }, [jobsResponse]);

  return (
    <div>
      <pre className="hidden text-blue-400 text-wrap max-w-[600px]">
        {/* {JSON.stringify(jobsData, null, 2)} */}
        {JSON.stringify(!user?.business?.id, null, 2)}
      </pre>
      {/* //remember to change back to !user?.business?.id */}
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

            {jobsLoading && jobsData.length === 0 ? (
              <div className="my-40">
                <Loader />
              </div>
            ) : null}

            {!jobsLoading && jobsData.length === 0 ? (
              <div>
                <BusinessDashboardSectionEmptyStates
                  type="job"
                  user={user}
                  addJobOrEvents={() => addJobOrEvents("job")}
                />
              </div>
            ) : null}

            {jobsData?.length > 0 ? (
              <ItemsCarousel
                data={jobsData || []}
                refetchJobs={jobsRefetch}
                navigateTo={() => navigate("/dashboard/see-more/business-jobs")}
                seeMore
                isBusiness
                canViewJob
                job
                title={`Jobs by you`}
                description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}
              />
            ) : null}

            {eventsLoading && eventsData.length === 0 ? (
              <div className="my-40">
                <Loader />
              </div>
            ) : null}

            {!eventsLoading && eventsData.length === 0 ? (
              <div>
                <BusinessDashboardSectionEmptyStates
                  type="events"
                  user={user}
                  addJobOrEvents={() => addJobOrEvents("event")}
                />
              </div>
            ) : null}

            {eventsData?.length > 0 ? (
              <ItemsCarousel
                data={eventsData || []}
                refetchEvents={eventsRefetch}
                isBusiness
                navigateTo={() =>
                  navigate("/dashboard/see-more/business-events")
                }
                seeMore
                event
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
      <Modal
        sizeClass="sm:max-w-[800px]"
        open={eventModal}
        setOpen={setEventModal}
      >
        <EventPostForm
          refetchEvents={eventsRefetch}
          closeModal={() => setEventModal(false)}
        />
      </Modal>
    </div>
  );
}
