"use client";

import Header from "@/components/header/Header";
import React, { useState } from "react";

type PageProps = {};

const Page: React.FC<PageProps> = () => {
  const [prop, setProp] = useState<string>("Top");
  return (
    <div className="page">
      <div className="main">
        <Header setProp={setProp} activeProp={prop}/>
      </div>
    </div>
  );
};

export default Page;
