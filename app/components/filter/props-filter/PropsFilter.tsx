"use client";
import React, { useState } from "react";
import TabChip from "../../reusable/tab-chip/TabChip";
import store from "@/app/mobx/store";
import { observer } from "mobx-react-lite";
import { usePathname } from "next/navigation";
import { sportsProps } from "@/app/lib/utils/sportsProps";
import { FilterOptions, PropsFilterLogic, SportDropdown } from "../index";
import { Schedule } from "@/app/lib/services/getSchedule";
import playersStore from "@/app/mobx/playersStore";
import "../filter.scss";

type PropsFilterProps = {
  query: string;
  schedule: Schedule;
  hideFilterOptions?: boolean;
};

const PropsFilter: React.FC<PropsFilterProps> = observer(
  ({ query, schedule, hideFilterOptions }) => {
    const pathname = usePathname();
    const currentLeague = pathname?.split("/")[1].toUpperCase();
    const currentTab = pathname?.split("/")[2].toUpperCase();
    const propOptions =
      sportsProps[currentLeague + "_" + currentTab || "NBA_PROPS"] || [];

    const propsFilterLogic = new PropsFilterLogic(schedule, currentLeague);

    const [selectedTab, setSelectedTab] = useState<string | null>(
      propsFilterLogic.getDefaultActiveProp()
    );

    const handleSelectTab = (prop: string) => {
      propsFilterLogic.handleSelectTab(prop);
      setSelectedTab(prop);
      playersStore.setProp(prop)
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
        {!hideFilterOptions && (
          <div className="filters">
            <FilterOptions query={query} todaysGames={todaysGames} />
            <p className="num-of-results">
              {store.results} of {store.results}
            </p>
          </div>
        )}
      </div>
    );
  }
);

export default PropsFilter;
