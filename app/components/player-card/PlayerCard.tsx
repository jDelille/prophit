import React from "react";
import { Selection } from "@/app/lib/services/getDraftkingsData";
import PlayerCardColumn from "./PlayerCardColumns";
import PlayerCardLogic, { PlayerStats } from "./playerCardLogic";
import "./playerCard.scss";

type Player = {
  id: string;
  headshot: string;
  name: string;
  position: string;
  propType: string;
  team: string;
  teamLogo: string;
  value: string;
  selections: Selection[];
};

type PlayerCardProps = {
  player: Player;
  playerStats: PlayerStats;
};

const PlayerCard: React.FC<PlayerCardProps> = ({ player, playerStats }) => {
  const logic = new PlayerCardLogic(player, playerStats);

  return (
    <div className="player-card">
      <div className="player-card" key={player.id + player.propType}>
        <div className="player-headshot">
          <img src={player.headshot} alt={player.name} />
        </div>
        <div className="info">
          <div className="name">{player.name}</div>
          <div className="player-info">
            {player.position} - {player.team}
          </div>
        </div>
        <div className="projections">
          <PlayerCardColumn
            value={player.selections[0]?.points}
            label={player.propType}
          />

          <PlayerCardColumn
            value={playerStats.points.projectedPoints}
            className={logic.isOverOrUnder(
              parseFloat(player.selections[0]?.points?.toString() ?? "0"),
              playerStats.points.projectedPoints
            )}
          />

          <PlayerCardColumn
            value={logic.getProjectedDifference().formattedValue}
            className={logic.getProjectedDifference().className}
          />

          <PlayerCardColumn value={player.selections[0].statistic.value} />

          <PlayerCardColumn value="NULL" />

          <PlayerCardColumn
            value={playerStats.points.latest3Percentage + "%"}
            className={logic.getPercentageClass(
              playerStats.points.latest3Percentage
            )}
          />

          <PlayerCardColumn
            value={playerStats.points.latest5Percentage + "%"}
            className={logic.getPercentageClass(
              playerStats.points.latest5Percentage
            )}
          />

          <PlayerCardColumn
            value={playerStats.points.latest10Percentage + "%"}
            className={logic.getPercentageClass(
              playerStats.points.latest10Percentage
            )}
          />

          <PlayerCardColumn value="NULL" />

          <PlayerCardColumn
            value={logic.isOverOrUnder(
              parseFloat(player.selections[0]?.points?.toString() ?? "0"),
              playerStats.points.projectedPoints
            )}
          />

          <PlayerCardColumn value="Analytics" />
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
