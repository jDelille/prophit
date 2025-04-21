import React from "react";
import styles from "./TrendingPlayerCard.module.scss";
import { TrendingPlayer } from "@/types";
import { PlayerStats } from "@/types/player-stats";

type TrendingPlayerCardProps = {
  player: TrendingPlayer;
  playerStats: PlayerStats;
};

const TrendingPlayerCard: React.FC<TrendingPlayerCardProps> = ({
  player,
  playerStats,
}) => {

  console.log(player)

  return (
    <div className={styles.trendingPlayerCard} key={player.id}>
      <div className={styles.playerInfo}>
        <img
          src={player.headshot}
          alt={player.name}
          className={styles.playerHeadshot}
        />
        <div className={styles.flexCol}>
          <h3 className={styles.playerName}>{player.name}</h3>
          <div className={styles.flex}>
            <p className={styles.playerTeam}>{player.team}</p>
            <p className={styles.playerPosition}>{player.position}</p>
          </div>
        </div>
      </div>
      <div className={styles.values}>
        <div className={styles.value}>{player?.selections?.[0]?.points}</div>
        <div className={styles.value}>{playerStats.values.latest3Percentage}</div>
        <div className={styles.value}>{playerStats.values.latest5Percentage}</div>
        <div className={styles.value}>{playerStats.values.latest10Percentage}</div>
      </div>
    </div>
  );
};

export default TrendingPlayerCard;
