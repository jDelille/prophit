"use client";

import Header from "@/components/header/Header";
import EmailSubscription from "@/components/settings/email-preferences/EmailPreferences";
import MyAccount from "@/components/settings/my-account/MyAccount";
import ToggleThemeButton from "@/components/toggle-theme-button/ToggleThemeButton";
import React, { useState } from "react";

type PageProps = {};

const Page: React.FC<PageProps> = () => {
  const [prop, setProp] = useState<string>("My Account");

  return (
    <div className="page">
      <div className="main">
        <Header setProp={setProp} activeProp={prop} />
        {/* <ToggleThemeButton /> */}
        {prop === "My Account" && <MyAccount />}
        {prop === "Email Preferences" && <EmailSubscription />}
      </div>
    </div>
  );
};

export default Page;
