import React from "react";
// import { useNavigate } from "react-router-dom";
// import AppConfig from "../../../utilities/config";
import JobSection from "./sections/JobSection";
import EventsSection from "./sections/EventsSection";
import MoviesAndShowsSection from "./sections/MoviesAndShowsSection";
import TrendingNewsSection from "./sections/TrendingNewsSection";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import {
  HeaderAndDescription,
  // ItemsCarousel,
  UpgradeCTA,
} from "../../../components";
import { capitalizeWords } from "../../../utilities";

export default function IndividualDashboard() {
  const user = useSelector((state: RootState) => state.user.user);

  // const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col gap-[64px]">
        <div className="pb-6 border-b border-[#D6D6D6]">
          <HeaderAndDescription
            titleClass={"font-semibold"}
            title={`Welcome to Nodes, ${capitalizeWords(user?.name)}`}
            description={"Checkout the blah blah blah blah blah blah"}
          />
        </div>
        <TrendingNewsSection />
        <MoviesAndShowsSection />
        <EventsSection />

        <UpgradeCTA />
        <JobSection canViewJob={true} />

        {/* <ItemsCarousel
          job
          title={`Trending jobs on Nodes`}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}
        /> */}
        {/* <ItemsCarousel title={`Hidden Gems`} event viewAll borderBottom /> */}
        {/* <ItemsCarousel title={`Flashbacks`} event viewAll borderBottom /> */}
        {/* <ItemsCarousel
          title={`Spaces you might like`}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
        /> */}
        {/* <ItemsCarousel
          title={`Collaboration Spotlights`}
          event
          viewAll
          borderBottom
        /> */}
        {/* <ItemsCarousel title={`Birthdays`} event viewAll borderBottom /> */}
      </div>
    </div>
  );
}
