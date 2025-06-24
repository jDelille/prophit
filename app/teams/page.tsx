"use client";

import React, { useState } from "react";
import Header from "@/components/header/Header";
import Teams from "@/components/teams/Teams";

type PageProps = {};

const Page: React.FC<PageProps> = () => {
  const [prop, setProp] = useState<string>("All Teams");

  return (
    <div className="page">
      <div className="main">
        <Header setProp={setProp} activeProp={prop} />
        <Teams />
      </div>
    </div>
  );
};

export default Page;
