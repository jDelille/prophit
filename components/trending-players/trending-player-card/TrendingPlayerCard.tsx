import React from "react";
import styles from "./TrendingPlayerCard.module.scss";
import { TrendingPlayer } from "@/types";
import { PlayerStats } from "@/types/player-stats";
import playerStore from "@/store/playerStore";

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

  console.log(player);

  const isOver = playerStats.values.propPick === "Over";
  const selection = isOver ? player.selections[0] : player.selections[1];

  return (
    <div
      className={styles.trendingPlayerCard}
      key={player.id}
      onClick={handleAddPlayerToStore}
    >
      <div className={styles.playerInfo}>
        <img
          src={player.headshot}
          alt={player.name}
          className={styles.playerHeadshot}
        />
        <div className={styles.flexCol}>
          <h3 className={styles.playerName}>{player.name}</h3>
          <div className={styles.flex}>
            <p className={styles.playerTeam}>
              {player.teamData.team.shortDisplayName}
            </p>
            <p className={styles.playerPosition}>{player.position}</p>
          </div>
        </div>
      </div>
      <div className={styles.values}>
        <div className={styles.value}>{player?.selections?.[0].points}</div>
        <div className={styles.value}>{playerStats.values.projectedPoints}</div>
        <div className={styles.value}>
          {playerStats.values.projectionDifference}
        </div>
        <div className={styles.value}>
          {playerStats.values.latest3Percentage}%
        </div>
        <div className={styles.value}>
          {playerStats.values.latest5Percentage}%
        </div>
        <div className={styles.value}>
          {playerStats.values.latest15Percentage}%
        </div>
        <div className={styles.value}>
          {playerStats.values.seasonPercentage}%
        </div>
        <div className={styles.pick}>
            {isOver ? "O" : "U"} {selection?.points}{" "}
            <span className={styles.odds}>({selection?.odds})</span>
        </div>
        <div className={styles.analyze}>icon</div>
      </div>
    </div>
  );
};

export default TrendingPlayerCard;
