"use client";

import Header from "@/components/header/Header";
import News from "@/components/news/News";
import { getLabelsByLeague } from "@/constants/labels";
import React, { useState } from "react";

type PageProps = {};

const Page: React.FC<PageProps> = () => {
  const [prop, setProp] = useState<string>("Top Headlines");
  const [propCount, setPropCount] = useState(0);
  const labelList = getLabelsByLeague("nba");
  return (
    <div className="page">
      <div className="main">
        <Header setProp={setProp} activeProp={prop} />
        <News />
      </div>
    </div>
  );
};

export default Page;
