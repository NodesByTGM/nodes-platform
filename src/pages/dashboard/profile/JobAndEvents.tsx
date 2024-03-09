import React, { useState } from "react";
import { Card, JobAndEventsCard } from "../../../components";

type JobAndEventType = {
  id: string;
  img: string;
  title: string;
  description: string;
};

export default function JobAndEvents() {
  const [jobAndEvents, setJobAndEvents] = useState<JobAndEventType[]>([]);

  const addJobAndEvents = () => {
    const updatedJobAndEvents = [
      ...jobAndEvents,
      {
        id: "2",
        img: "/img/ProjectThumbnailSample.png",
        title: "Job Title",
        description:
          "Lorem ipsum dolor sit amet consectetur. Cum amet id lectus viverra faucibus. Arcu eget hendrerit ut dictumst id. Lorem ipsum dolor sit amet consec...",
      },
    ];
    setJobAndEvents(updatedJobAndEvents);
  };
  return (
    <div className="relative flex flex-col min-h-[400px]">
      <Card
        className=""
        title="Job/Events"
        listCount={jobAndEvents?.length}
        editButton
        editFunction={() => console.log("edit")}
      >
        {jobAndEvents?.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {jobAndEvents?.map((data) => (
              <div key={data.id} className="">
                <JobAndEventsCard data={data} />
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-[239px] flex flex-col justify-center items-center ">
            <h3 className="text-center font-medium text-base text-[#212121]">
              Hi, Aderinsola
            </h3>
            <span className="mt-8  text-center font-normal text-base text-[#212121]">
              Nothing to see here yet, add a job post or event to get started.{" "}
            </span>

            <h3
              onClick={() => addJobAndEvents()}
              className="cursor-pointer mt-10 text-primary font-medium text-base"
            >
              Add Job Post or Event
            </h3>
          </div>
        )}
      </Card>
      {jobAndEvents?.length == 0 && (
        <div className=" w-full">
          <img src="/img/AddProjects.svg" alt="" className="w-full" />
        </div>
      )}
    </div>
  );
}
