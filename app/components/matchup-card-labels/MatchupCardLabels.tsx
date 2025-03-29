import React from "react";
import "./matchupCardLabels.scss";

type MatchupCardLabelsProps = {};
const MatchupCardLabels: React.FC<MatchupCardLabelsProps> = () => {
  const labels = ["Odds", "Chance to Win", "% of Bets", "% of Money"];

  return (
    <div className="matchup-card-labels">
      <div className="games-label">
        Games
      </div>
      <div className="labels">
        {labels.map((label) => (
          <div className="label" key={label}>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchupCardLabels;
