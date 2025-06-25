"use client";

import GameCard from "@/components/games/game-card/GameCard";
import Games from "@/components/games/Games";
import Header from "@/components/header/Header";
import React, { useState } from "react";

type PageProps = {};

const Page: React.FC<PageProps> = () => {
  const [prop, setProp] = useState<string>("Top");
  return (
    <div className="page">
      <div className="main">
        <Header setProp={setProp} activeProp={prop}/>
        <Games />
      </div>
    </div>
  );
};

export default Page;
