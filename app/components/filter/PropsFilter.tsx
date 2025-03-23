"use client";
import React, { useState } from "react";
import TabChip from "../reusable/tab-chip/TabChip";
import store from "@/app/mobx/store";
import { observer } from "mobx-react-lite";
import { usePathname } from "next/navigation";
import { sportsProps } from "@/app/lib/utils/sportsProps";
import { SportDropdown, FilterOptions } from "./index";
import "./filter.scss";

type PropsFilterProps = {
  query: string;
};

const PropsFilter: React.FC<PropsFilterProps> = observer(({ query }) => {
  const pathname = usePathname();
  const currentLeague = pathname?.split("/")[1].toUpperCase();
  const propOptions = sportsProps[currentLeague || "NBA"] || [];

  function defaultActiveProp() {
    switch (currentLeague) {
      case "MLB":
        return "Hr";
      case "NBA":
        return "Pts";
      default:
        return "";
    }
  }

  const [selectedTab, setSelectedTab] = useState<string | null>(
    defaultActiveProp
  );

  const handleSelectTab = (prop: string) => {
    setSelectedTab(prop);
    store.setProp(prop);
  };


  return (
    <div className="filters-container">
      <div className="props-filter">
        <SportDropdown currentLeague={currentLeague} />
        {propOptions.map((prop, index) => (
          <TabChip
            key={index}
            prop={prop.label}
            currentLeague={currentLeague}
            selectedTab={selectedTab} 
            onSelectTab={handleSelectTab}
          />
        ))}
      </div>
      <div className="filters">
        <FilterOptions query={query} />
        <p className="num-of-results">
          {store.results} of {store.results}
        </p>
      </div>
    </div>
  );
});

export default PropsFilter;
