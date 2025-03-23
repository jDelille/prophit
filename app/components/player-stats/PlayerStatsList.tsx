"use client";
import React, { useState } from "react";
import PlayerStats from "./PlayerStats";
import "./playerStats.scss";

type PlayerStatsData = {
  categoryName: string;
  events: {
    eventName: string;
    stats: string[];
  }[];
};

const statLabels = [
  "MIN",
  "FG",
  "FG%",
  "3PT",
  "3P%",
  "FT",
  "FT%",
  "REB",
  "AST",
  "BLK",
  "STL",
  "PF",
  "TO",
  "PTS",
];

type PlayerStatsListProps = {
  playerStats: PlayerStatsData[]; // Now using the correct type for playerStats
};

const PlayerStatsList: React.FC<PlayerStatsListProps> = ({ playerStats }) => {
  const [numEvents, setNumEvents] = useState(5); // Default is showing 5 events

  const handleEventSelection = (num: number) => {
    setNumEvents(num); // Update the state when a button is clicked
  };

  const test = playerStats[0]; // Assuming you have player stats data here

  // Get the latest events by reversing the order and then taking the first 'numEvents'
  const latestEvents = test?.events.slice().slice(0, numEvents); // Reverse the array and slice the top 'numEvents'

  return (
    <>
      {/* Event selection buttons */}
      <div className="event-selection">
        <button onClick={() => handleEventSelection(3)}>Latest 3</button>
        <button onClick={() => handleEventSelection(5)}>Latest 5</button>
        <button onClick={() => handleEventSelection(10)}>Latest 10</button>
      </div>

      {/* Labels */}
      <div className="labels">
        {statLabels.map((label, i) => (
          <p key={i}>{label}</p>
        ))}
      </div>

      {/* Display the stats */}
      <ul className="player-stats-list">
        {latestEvents?.map((player, index) => (
          <li key={index}>
            <PlayerStats events={player.stats} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default PlayerStatsList;