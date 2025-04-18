import React from "react";
import styles from "./TrendingPlayerCard.module.scss";
import { TrendingPlayer } from "@/types";

type TrendingPlayerCardProps = {
  player: TrendingPlayer;
};

const TrendingPlayerCard: React.FC<TrendingPlayerCardProps> = ({ player }) => {
  return (
    <div className={styles.trendingPlayerCard} key={player.id}>
      <div className={styles.flex}>
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
    </div>
  );
};

export default TrendingPlayerCard;
