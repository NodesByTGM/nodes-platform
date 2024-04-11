import React from "react";
import { useDashboardContext } from "../../../context/hooks";

export default function BusinessProfile() {
  const { user } = useDashboardContext();

  return (
    <div>
      <pre className="">{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
