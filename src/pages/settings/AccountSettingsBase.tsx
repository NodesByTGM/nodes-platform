import React, { useState } from "react";
import { Button, SectionNavs } from "../../components";
import Account from "./Account";
import Analytics from "./Analytics";
import SettingsProvider from "../../context/settings";
import BusinessAnalytics from "./BusinessAnalytics";

function AccountSettingsBase() {
  const [navs] = useState([
    { id: 1, label: "Account", count: null },
    {
      id: 2,
      label: "Analytics",
      count: null,
    },
    {
      id: 3,
      label: "Business Analytics",
      count: null,
    },
  ]);

  // const triggerSave = (saveFn) => {
  //   saveFn();
  // };

  const [selectedNav, setSelectedNav] = useState(navs[0]);

  return (
    <SettingsProvider>
      <div className="min-h-[100vh] main-container">
        <div className="mb-4 flex items-start justify-between">
          <div className="mb-6 flex flex-col gap-4 text-[20px] text-[#212121]">
            <h3 className="font-medium ">Account Settings</h3>
            <span className="font-nnormal">
              We believe in the power of every individual's creative spark.{" "}
            </span>
          </div>{" "}
          <div className="flex gap-4">
            <Button className={`max-w-max`}>Save Changes</Button>
          </div>
        </div>
        <SectionNavs
          navs={navs}
          selectedNav={selectedNav}
          setSelectedNav={setSelectedNav}
        />

        <div className="mt-10">
          {selectedNav?.label.toLowerCase() == "account" && <Account />}
          {selectedNav?.label.toLowerCase() == "analytics" && <Analytics />}

          {selectedNav?.label.toLowerCase() == "business analytics" && (
            <BusinessAnalytics />
          )}
        </div>
      </div>
    </SettingsProvider>
  );
}

export default AccountSettingsBase;
