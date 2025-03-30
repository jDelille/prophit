import React from "react";
import { Player } from "../PlayerCard";
import "./playerCardHeader.scss";

type PlayerCardHeaderProps = {
  player: Player;
};

const PlayerCardHeader: React.FC<PlayerCardHeaderProps> = ({ player }) => {
  function getPropName(propType: string) {
    const name = propType.toLowerCase();
    if (name === "pts") {
      return "Points";
    } else if (name === "reb") {
      return "Rebounds";
    } else if (name === "ast") {
      return "Assists";
    }
  }

  return (
    <div className="player">
      <div className="player-headshot">
        <img src={player.headshot} alt={player.name} />
      </div>
      <div className="info">
        <div className="name">{player.name}</div>
        <div className="player-info">
          {player.position} - {player.team}
        </div>
        <div className="prop">
          {player.selections[0]?.points} {getPropName(player.propType)}
        </div>
      </div>
    </div>
  );
};

export default PlayerCardHeader;
