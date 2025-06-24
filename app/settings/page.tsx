"use client";

import Header from "@/components/header/Header";
import ToggleThemeButton from "@/components/toggle-theme-button/ToggleThemeButton";
import React, { useState } from "react";

type PageProps = {};

const Page: React.FC<PageProps> = () => {
  const [prop, setProp] = useState<string>("My Account");

  return (
    <div className="page">
      <div className="main">
        <Header setProp={setProp} activeProp={prop} />
        <ToggleThemeButton />
      </div>
    </div>
  );
};

export default Page;
