"use client";

import Header from "@/components/header/Header";
import { getLabelsByLeague } from "@/constants/labels";
import React, { useState } from "react";

type PageProps = {};


const options = [
 "Parlay Calculator",
 "Hedging Calculator"
];

const Page: React.FC<PageProps> = () => {
  const [prop, setProp] = useState<string>("Points");
  const [propCount, setPropCount] = useState(0);
  const labelList = getLabelsByLeague("nba");
  return (
    <div className="page">
      <div className="main">
        <Header setProp={setProp} activeProp={prop} options={options} />
      </div>
    </div>
  );
};

export default Page;
