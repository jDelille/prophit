import React from "react";
import styles from "./TrendingPlayerCard.module.scss";
import { TrendingPlayer } from "@/types";
import { PlayerStats } from "@/types/player-stats";
import playerStore from "@/store/playerStore";
import { PipeChartIcon } from "@/icons";

type TrendingPlayerCardProps = {
  player: TrendingPlayer;
  playerStats: PlayerStats;
  setIsOpen: (val: boolean) => void;
};

const TrendingPlayerCard: React.FC<TrendingPlayerCardProps> = ({
  player,
  playerStats,
  setIsOpen,
}) => {
  if (player?.selections?.[0]?.points === undefined) {
    return;
  }

  if (playerStats.values.seasonPercentage === "0") {
    return;
  }

  const handleAddPlayerToStore = () => {
    playerStore.setPlayer(player);
    setIsOpen(true);
  };

  const getPercentageClass = (percentage: number) => {
    if (percentage > 60) return styles.above60;
    if (percentage >= 50) return styles.between50And60;
    return styles.below50;
  };

  const isOver = playerStats.values.propPick === "Over";
  const selection = isOver ? player.selections[0] : player.selections[1];

  return (
    <div
      className={styles.trendingPlayerCard}
      key={player.id}
      onClick={handleAddPlayerToStore}
    >
      <div className={styles.playerInfo}>
        <div className={styles.imageContainer}>
          <img
            src={player.headshot}
            alt={player.name}
            className={styles.playerHeadshot}
          />
        </div>

        <div className={styles.flexCol}>
          <h3 className={styles.playerName}>{player.name}</h3>
          <div className={styles.flex}>
            <p className={styles.playerPosition}>{player.position}</p>
            <p className={styles.playerTeam}>
              {player.teamData.team.shortDisplayName}
            </p>
          </div>
        </div>
      </div>
      <div className=""></div>
      <div className={styles.values}>
        <div className={styles.value}>
          {player?.selections?.[0].points} <span>{player.propType}</span>
        </div>
        <div className={styles.value}>
          {playerStats.values.projectedPoints}{" "}
          <span>{playerStats.values.propPick}</span>
        </div>
        <div className={styles.value}>
          {`${playerStats.values.projectionDifference >= 0 ? "+" : ""}${
            playerStats.values.projectionDifference
          }`}
        </div>
        <div
          className={`${styles.value} ${getPercentageClass(
            playerStats.values.latest3Percentage
          )}`}
        >
          {playerStats.values.latest3Percentage}%
        </div>
        <div
          className={`${styles.value} ${getPercentageClass(
            playerStats.values.latest5Percentage
          )}`}
        >
          {playerStats.values.latest5Percentage}%
        </div>
        <div
          className={`${styles.value} ${getPercentageClass(
            playerStats.values.latest15Percentage
          )}`}
        >
          {playerStats.values.latest15Percentage}%
        </div>
        <div
          className={`${styles.value} ${getPercentageClass(
            parseInt(playerStats.values.seasonPercentage)
          )}`}
        >
          {playerStats.values.seasonPercentage}%
        </div>
        <div className={styles.pick}>
          {isOver ? "O" : "U"} {selection?.points}{" "}
          <span className={styles.odds}> ({selection?.odds})</span>
        </div>
        <div className={styles.analyze}>
          <button>
            <PipeChartIcon size={20} color="black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingPlayerCard;
