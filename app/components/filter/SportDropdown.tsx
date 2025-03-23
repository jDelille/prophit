import React from "react";
import DropdownSelect from "../reusable/dropdown-select/DropdownSelect";

const sportsOptions = [
  { label: "NBA", value: "basketball" },
  { label: "MLB", value: "baseball" },
];

const SportDropdown: React.FC<{ currentLeague: string }> = ({ currentLeague }) => {
  const handleSportChange = (selectedSport: string) => {
    console.log(`Selected Sport: ${selectedSport}`);
  };

  return (
    <DropdownSelect
      options={sportsOptions}
      defaultValue={currentLeague}
      onSelect={handleSportChange}
    />
  );
};

export default SportDropdown;