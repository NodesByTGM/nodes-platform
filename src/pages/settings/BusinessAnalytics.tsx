import React from "react";
import { AnalyticsComponent } from "../../components";

export default function BusinessAnalytics() {
  const analytics = [
    {
      id: 1,
      title: "Number of profile visits",
      metric: "20",
    },
    {
      id: 2,
      title: "Number of impressions",
      metric: "24",
    },
    {
      id: 2,
      title: "Number of unique visits",
      metric: "24",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        {analytics?.map((item) => (
          <div key={item.id} className="">
            <AnalyticsComponent item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
