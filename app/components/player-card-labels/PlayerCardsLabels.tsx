import React from "react";
import { SortIcon } from "@/app/icons";
import "./playerCardsLabel.scss";

type PlayerCardsLabelsProps = {};

const PlayerCardsLabels: React.FC<PlayerCardsLabelsProps> = () => {
  const labels = [
    "Prop",
    "Proj.",
    "Proj. Diff",
    "Average",
    "Rating",
    "L-3",
    "L-5",
    "L-10",
    "Streak",
    "Pick",
    "Sportsbook",
  ];

  return (
    <div className="player-cards-labels-container">
      <div className="player-label">
        <p>Player</p>
      </div>
      <div className="projections">
        {labels.map((label) => (
          <div className="label" key={label}>
            {label} <SortIcon size={13} color="gray" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerCardsLabels;
