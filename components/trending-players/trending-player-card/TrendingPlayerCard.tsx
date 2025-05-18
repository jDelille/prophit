import React from "react";
import styles from "./TrendingPlayerCard.module.scss";
import { TrendingPlayer } from "@/types";
import { PlayerStats } from "@/types/player-stats";
import playerStore from "@/store/playerStore";
import { PipeChartIcon } from "@/icons";
import PercentageBar from "@/components/percentage-bar/PercentageBar";

type TrendingPlayerCardProps = {
  player: TrendingPlayer;
  playerStats: PlayerStats;
};

const TrendingPlayerCard: React.FC<TrendingPlayerCardProps> = ({
  player,
  playerStats,
}) => {
  if (player?.selections?.[0]?.points === undefined) {
    return;
  }

  if (playerStats.values.seasonPercentage === "0") {
    return;
  }

  const handleAddPlayerToStore = () => {
    playerStore.setPlayer(player);
  };

  const getPercentageClass = (percentage: number) => {
    if (percentage > 60) return styles.above60;
    if (percentage >= 50) return styles.between50And60;
    return styles.below50;
  };

  const getOUClass = (isOver: boolean) => {
    if (isOver) return styles.over;
    if (!isOver) return styles.under;
  };

  const isOver = playerStats.values.propPick === "Over";
  const selection = isOver ? player.selections[0] : player.selections[1];

  function getOrdinalSuffix(rank: number): string {
    const j = rank % 10,
      k = rank % 100;

    if (j === 1 && k !== 11) return `${rank}st`;
    if (j === 2 && k !== 12) return `${rank}nd`;
    if (j === 3 && k !== 13) return `${rank}rd`;
    return `${rank}th`;
  }

  const getRankClass = (rank: number) => {
    if (rank < 10) return styles.highRank;
    if (rank > 10 && rank < 20) return styles.mediumRank;
    if (rank >= 20) return styles.lowRank;
  };

  const getRatingClass = (rating: number) => {
    if (rating >= 70) return styles.goodRating;
    if (rating >= 50) return styles.averageRating;
    return styles.weakRating;
  };

  const getRatingLabel = (rating: number): "Strong" | "Average" | "Weak" => {
    if (rating >= 70) return "Strong";
    if (rating >= 50) return "Average";
    return "Weak";
  };

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
          <img src={player.teamData.team.logos[0].href} alt="" className={styles.teamLogo}/>
        </div>

        <div className={styles.flexCol}>
          <h3 className={styles.playerName}>{player.name}</h3>
          <div className={styles.flex}>
            <p className={styles.playerPosition}>{player.position} -</p>
            <p className={styles.playerTeam}>
              {player.teamData.team.nextEvent[0].shortName}
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
          <span className={getOUClass(isOver)}>
            {playerStats.values.propPick}
          </span>
        </div>
        <div className={styles.value}>
          {`${playerStats.values.projectionDifference >= 0 ? "+" : ""}${
            playerStats.values.projectionDifference
          }`}
        </div>
        <div className={styles.value}>
          <div className={getRatingClass(playerStats.values.rating)}>
            {getRatingLabel(playerStats.values.rating)}
          </div>
        </div>
        <div className={styles.value}>
          <p className={getRankClass(player.teamStats.ranks[0])}>
            {getOrdinalSuffix(player.teamStats.ranks[0])}
          </p>
        </div>
        <div
          className={`${styles.value} ${getPercentageClass(
            playerStats.values.latest3Percentage
          )}`}
        >
          <PercentageBar percentage={playerStats.values.latest3Percentage} />
        </div>
        <div
          className={`${styles.value} ${getPercentageClass(
            playerStats.values.latest5Percentage
          )}`}
        >
          <PercentageBar percentage={playerStats.values.latest5Percentage} />
        </div>
        <div
          className={`${styles.value} ${getPercentageClass(
            playerStats.values.latest15Percentage
          )}`}
        >
          <PercentageBar percentage={playerStats.values.latest15Percentage} />
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
