import React, { useCallback, useEffect, useState } from "react";
import { Button, SectionNavs } from "../../components";
import Account from "./Account";
import Analytics from "./Analytics";
import SettingsProvider from "../../context/settings";
import BusinessAnalytics from "./BusinessAnalytics";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
function AccountSettingsBase() {
  const user = useSelector((state: RootState) => state.user.user);
  const allNavs = [
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
  ]

  const [navs, setNavs] = useState([allNavs[0]]);

  const handleNavs = useCallback(() => {
    const plan = user?.subscription?.plan?.toLowerCase();
    if (plan !== "pro" && plan !== "business") {
      setNavs([allNavs[0]]);
    }
    if (plan === "pro") {
      setNavs(allNavs);
    }
    if (plan === "business") {
      setNavs(allNavs);
    }
  }, [user]);

  useEffect(() => {
    handleNavs();
  }, [user, handleNavs]);



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
