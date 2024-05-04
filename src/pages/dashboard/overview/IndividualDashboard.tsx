import React from "react";
// import { useNavigate } from "react-router-dom";
// import AppConfig from "../../../utilities/config";
import JobSection from "./sections/JobSection";
// import EventsSection from "./sections/EventsSection";
import MoviesAndShowsSection from "./sections/MoviesAndShowsSection";
import TrendingNewsSection from "./sections/TrendingNewsSection";
import BirthdaysSection from './sections/BirthdaysSection.tsx'
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
    <div className="">
      <div className="flex flex-col gap-[64px]">
        <div className="pb-6 border-b border-[#D6D6D6]">
          <HeaderAndDescription
            titleClass={"font-semibold"}
            title={`Welcome to Nodes, ${capitalizeWords(user?.name)}`}
            description={
              "Discover all the cool things waiting for you to tap into."
            }
          />
        </div>
        <TrendingNewsSection />
        <MoviesAndShowsSection />
        {/* <EventsSection /> */}

        {!user?.subscription?.plan ? <UpgradeCTA username={user?.name}/> : null}
        <JobSection canViewJob={true} />
        <BirthdaysSection />
      </div>
    </div>
  );
}
