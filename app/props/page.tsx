"use client";

import Header from "@/components/header/Header";
import Labels from "@/components/labels/Labels";
import TrendingPlayersList from "@/components/trending-players/TrendingPlayersList";
import { getLabelsByLeague } from "@/constants/labels";
import React, { useState } from "react";

type PageProps = {};

const options = [
  "All",
  "Points",
  "Rebounds",
  "Assists",
  "3 Pointers",
  "Steals",
  "Blocks",
  "Points + Assists",
  "Points + Rebounds",
  "Rebounds + Assists",
  "Points + Assists + Rebounds",
];

const Page: React.FC<PageProps> = () => {
  const [prop, setProp] = useState<string>("Points");
  const labelList = getLabelsByLeague("nba");
  return (
    <div className="page">
      <div className="main">
        <Header setProp={setProp} activeProp={prop} options={options} />
        <Labels labels={labelList} />
        <TrendingPlayersList prop={prop} />
      </div>
    </div>
  );
};

export default Page;
