"use client";

import { useState } from "react";
import Categories from "@/components/categories/Categories";
import TrendingPlayersList from "@/components/trending-players/TrendingPlayersList";
import Labels from "@/components/labels/Labels";
import { getLabelsByLeague } from "@/constants/labels";

export default function Home() {
  const [prop, setProp] = useState<string>("Pts");
  const labelList = getLabelsByLeague("nba");

  return (
    <div>
      <Categories setProp={setProp} prop={prop} league={"nba"} />
      <Labels labels={labelList} />
      <TrendingPlayersList setProp={setProp} prop={prop} />
    </div>
  );
}
