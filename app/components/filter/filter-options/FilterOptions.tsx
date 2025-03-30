import React from "react";
import DropdownSelect from "../../reusable/dropdown-select/DropdownSelect";
import SearchBar from "../../search-bar/SearchBar";
import { Schedule } from "@/app/lib/services/getSchedule";
import { FilterIcon } from "@/app/icons";

const FilterOptions: React.FC<{ query: string; todaysGames?: Schedule }> = ({
  query,
  todaysGames,
}) => {
  // const todaysDate = Object.keys(todaysGames.events)[0];

  // const matchupOptions = (todaysGames.events[todaysDate] || []).map((game) => {
  //   const teamAbbreviations = game.teams.map((team) => team.abbrev);

  //   return {
  //     label: `${teamAbbreviations[1]} @ ${teamAbbreviations[0]}`,
  //     value: `${teamAbbreviations[1]}-${teamAbbreviations[0]}`,
  //   };
  // });

  const positionsOptions = [
    { label: "C", value: "Center" },
    { label: "PG", value: "Point Guard" },
    { label: "SF", value: "Small Forward" },
    { label: "SG", value: "Shooting Guard" },
    { label: "PF", value: "Power Forward" },
  ];

  const betRatingOptions = [
    { label: "5 stars", value: "5 stars" },
    { label: "4 stars", value: "4 stars" },
    { label: "3 stars", value: "3 stars" },
    { label: "2 stars", value: "2 stars" },
    { label: "1 stars", value: "1 stars" },
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
      {/* <DropdownSelect
        options={matchupOptions}
        defaultValue="Matchups"
        onSelect={handleMatchupChange}
        hasCheckboxes
      /> */}
      <div className="desktop">
        <SearchBar query={query} />
        <DropdownSelect
          options={positionsOptions}
          defaultValue="Positions"
          onSelect={handleMatchupChange}
          hasCheckboxes
        />
        <DropdownSelect
          options={betRatingOptions}
          defaultValue="Bet Rating"
          onSelect={handleBetRatingChange}
        />
      </div>
      <div className="mobile">
        <button><FilterIcon color="black" size={14}/>Filters</button>
      </div>
    </div>
  );
};

export default FilterOptions;
