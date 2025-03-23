import React from "react";
import DropdownSelect from "../reusable/dropdown-select/DropdownSelect";
import SearchBar from "../search-bar/SearchBar";

const FilterOptions: React.FC<{ query: string }> = ({ query }) => {
  const matchupOptions = [{ label: "Matchups", value: "matchup" }];
  const positionsOptions = [
    { label: "C", value: "Center" },
    { label: "PG", value: "Point Guard" },
    { label: "SF", value: "Small Forward" },
    { label: "SG", value: "Shooting Guard" },
    { label: "PF", value: "Power Forward" }
  ];
  const betRatingOptions = [
    { label: "5 stars", value: "5 stars" },
    { label: "4 stars", value: "4 stars" },
    { label: "3 stars", value: "3 stars" },
    { label: "2 stars", value: "2 stars" },
    { label: "1 stars", value: "1 stars" }
  ];

  const handleMatchupChange = () => {
    console.log("matchup change");
  };

  const handleBetRatingChange = () => {
    console.log("bet rating");
  };

  return (
    <div className="filters">
      <p className="title">Filters:</p>
      <DropdownSelect
        options={matchupOptions}
        defaultValue="Matchups"
        onSelect={handleMatchupChange}
      />
      <SearchBar query={query} />
      <DropdownSelect
        options={positionsOptions}
        defaultValue="Positions"
        onSelect={handleMatchupChange}
      />
      <DropdownSelect
        options={betRatingOptions}
        defaultValue="Bet Rating"
        onSelect={handleBetRatingChange}
      />
    </div>
  );
};

export default FilterOptions;