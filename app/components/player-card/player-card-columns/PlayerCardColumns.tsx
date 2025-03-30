import React from "react";
import { Player } from "../PlayerCard";
import PlayerCardLogic, { PlayerStats } from "../playerCardLogic";
import PlayerCardColumn from "./PlayerCardColumn";
import './playerCardColumns.scss';

type PlayerCardColumnsProps = {
  player: Player;
  playerStats: PlayerStats;
};
const PlayerCardColumns: React.FC<PlayerCardColumnsProps> = ({
  player,
  playerStats,
}) => {
  const logic = new PlayerCardLogic(player, playerStats);

  return (
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
        label={logic.getProjectedDifference().className}
      />

      <PlayerCardColumn value={logic.getProjectedDifference().formattedValue} />

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
  );
};

export default PlayerCardColumns;
