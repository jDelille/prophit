"use client";
import React from "react";
import "./tabChip.scss";

type TabChipProps = {
  prop: string;
  currentLeague: string;
  selectedTab: string | null; // Track the active tab
  onSelectTab: (prop: string) => void; // Handler for selecting the tab
};

const TabChip: React.FC<TabChipProps> = ({
  prop,
  currentLeague,
  selectedTab,
  onSelectTab,
}) => {
 
  // Determine if the tab is active
  const isActive = selectedTab === prop;

  // Handle click event to select the tab
  const handleSelectTab = () => {
    onSelectTab(prop); // Set the clicked tab as active
  };

  return (
    <div
      className={`tab-chip ${isActive ? "active" : ""}`}
      onClick={handleSelectTab}
    >
      {prop}
    </div>
  );
};

export default TabChip;