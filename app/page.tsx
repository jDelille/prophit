"use client";

import { useState } from "react";
import Categories from "@/components/categories/Categories";
import TrendingPlayersList from "@/components/trending-players/TrendingPlayersList";

export default function Home() {
  const [prop, setProp] = useState<string>("Hits O/U");

  return (
    <div>
      <Categories setProp={setProp} prop={prop} />
      <TrendingPlayersList setProp={setProp} prop={prop} />
    </div>
  );
}
