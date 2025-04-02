import React from "react";
import { Player } from "../PlayerCard";
import PlayerCardLogic, { PlayerStats } from "../playerCardLogic";
import PlayerCardColumn from "./PlayerCardColumn";
import "./playerCardColumns.scss";
import playersStore from "@/app/mobx/playersStore";

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
      <div className="hide-mobile">
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

        <PlayerCardColumn
          value={logic.getProjectedDifference().formattedValue}
        />
        <PlayerCardColumn value={player.selections[0].statistic.value} />

        <PlayerCardColumn value="NULL" />
      </div>

      <PlayerCardColumn
        value={playerStats.points.latest3Percentage + "%"}
        className={logic.getPercentageClass(
          playerStats.points.latest3Percentage
        )}
        label="H2H"
      />

      <PlayerCardColumn
        value={playerStats.points.latest3Percentage + "%"}
        className={logic.getPercentageClass(
          playerStats.points.latest3Percentage
        )}
        label="L-3"
      />

      <PlayerCardColumn
        value={playerStats.points.latest5Percentage + "%"}
        className={logic.getPercentageClass(
          playerStats.points.latest5Percentage
        )}
        label="L-5"
      />

      <PlayerCardColumn
        value={playerStats.points.latest10Percentage + "%"}
        className={logic.getPercentageClass(
          playerStats.points.latest10Percentage
        )}
        label="L-10"
      />

      <PlayerCardColumn
        className={logic.getPercentageClass(
          playerStats.points.seasonPercentage
        )}
        value={playerStats.points.seasonPercentage + "%"}
        label="SZN"
      />

      <div className="hide-mobile">
        <PlayerCardColumn
          value={logic.isOverOrUnder(
            parseFloat(player.selections[0]?.points?.toString() ?? "0"),
            playerStats.points.projectedPoints
          )}
        />
      </div>

      <PlayerCardColumn
        className={logic.getPercentageClass(
          playerStats.points.venueHitRatePercentage
        )}
        label="Venue"
        value={playerStats.points.venueHitRatePercentage + "%"}
      />
      <PlayerCardColumn value="Analytics" />
    </div>
  );
};

export default PlayerCardColumns;
