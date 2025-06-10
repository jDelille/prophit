"use client";

import React, { useState } from "react";
import Header from "@/components/header/Header";
import Labels from "@/components/labels/Labels";
import TrendingPlayersList from "@/components/trending-players/TrendingPlayersList";

type PageProps = {};

const Page: React.FC<PageProps> = () => {
  const [prop, setProp] = useState<string>("Home Runs");
  return (
    <div className="page">
      <div className="main">
        <Header setProp={setProp} activeProp={prop} />
        <Labels />
        <TrendingPlayersList prop={prop} />
      </div>
    </div>
  );
};

export default Page;
