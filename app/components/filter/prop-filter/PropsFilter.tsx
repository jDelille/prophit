"use client";
import React, { useState } from "react";
import TabChip from "../../reusable/tab-chip/TabChip";
import store from "@/app/mobx/store";
import { observer } from "mobx-react-lite";
import { usePathname } from "next/navigation";
import { sportsProps } from "@/app/lib/utils/sportsProps";
import { SportDropdown, FilterOptions } from "../index";
import { Schedule } from "@/app/lib/services/getSchedule";
import PropsFilterLogic from "./propsFilter";
import "../filter.scss";

type PropsFilterProps = {
  query: string;
  schedule: Schedule;
};

const PropsFilter: React.FC<PropsFilterProps> = observer(
  ({ query, schedule }) => {
    const pathname = usePathname();
    const currentLeague = pathname?.split("/")[1].toUpperCase();
    const propOptions = sportsProps[currentLeague || "NBA"] || [];

    const propsFilterLogic = new PropsFilterLogic(schedule, currentLeague);

    const [selectedTab, setSelectedTab] = useState<string | null>(
      propsFilterLogic.getDefaultActiveProp()
    );

    const handleSelectTab = (prop: string) => {
      propsFilterLogic.handleSelectTab(prop);
      setSelectedTab(prop);
    };

    const todaysGames = propsFilterLogic.getTodaysGames();

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
          <FilterOptions query={query} todaysGames={todaysGames} />
          <p className="num-of-results">
            {store.results} of {store.results}
          </p>
        </div>
      </div>
    );
  }
);

export default PropsFilter;
