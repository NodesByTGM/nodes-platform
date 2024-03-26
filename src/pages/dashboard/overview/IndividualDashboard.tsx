import React from "react";
import { useNavigate } from "react-router-dom";
import AppConfig from "../../../utilities/config";
import JobSection from "./sections/JobSection";
import EventsSection from "./sections/EventsSection";

import {
  HeaderAndDescription,
  CarouselSection,
  UpgradeCTA,
} from "../../../components";
export default function IndividualDashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col gap-[64px]">
        <div className="pb-6 border-b border-[#D6D6D6]">
          <HeaderAndDescription
            title={`Welcome to Nodes, Jane`}
            description={"Checkout the blah blah blah blah blah blah"}
          />
        </div>
        <EventsSection />
        <JobSection />

        <CarouselSection
          title={`Top Movies`}
          movie
          viewAll
          borderBottom
          navigateTo={() => navigate(`${AppConfig.PATHS.Dashboard.ViewAll}`)}
        />
        <UpgradeCTA />
        <CarouselSection
          job
          title={`Trending jobs on Nodes`}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}
        />
        <CarouselSection title={`Hidden Gems`} event viewAll borderBottom />
        <CarouselSection title={`Flashbacks`} event viewAll borderBottom />
        <CarouselSection
          title={`Spaces you might like`}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
        />
        <CarouselSection
          title={`Collaboration Spotlights`}
          event
          viewAll
          borderBottom
        />
        <CarouselSection title={`Birthdays`} event viewAll borderBottom />
      </div>
    </div>
  );
}
