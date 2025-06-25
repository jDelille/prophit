import React from "react";
import styles from "./GameCard.module.scss";
import { GameTypes } from "@/types/game-types";

type GameCardProps = {
  game: GameTypes;
};
const GameCard: React.FC<GameCardProps> = ({ game }) => {
  console.log(game);

  const homeTeam = game.competitions[0].competitors[0];
  const awayTeam = game.competitions[0].competitors[1];

const getScoreClass = (teamScore: number, otherScore: number) => {
  return teamScore > otherScore ? styles.winnerScore : styles.loserScore;
};
  return (
    <div className={styles.gameCard}>
      <div className={styles.team}>
        <div className={styles.name}>
          <img src={homeTeam.team.logo} alt="" />
          <p>
            {homeTeam.team.name} <span>{homeTeam.records[0].summary}</span>
          </p>
        </div>
<div className={getScoreClass(parseInt(homeTeam.score), parseInt(awayTeam.score))}>
          <p>{homeTeam.score}</p>
        </div>
      </div>
      <div className={styles.team}>
        <div className={styles.name}>
          <img src={awayTeam.team.logo} alt="" />
          <p>
            {awayTeam.team.name}
            <span>{awayTeam.records[1].summary}</span>
          </p>
        </div>
<div className={getScoreClass(parseInt(awayTeam.score), parseInt(homeTeam.score))}>
          <p>{awayTeam.score}</p>
        </div>
      </div>
      <div className={styles.footer}>
        {game.status.type.state === "in" && <p className={styles.live}>LIVE</p>} 
        <p>{game.status.type.shortDetail}</p>
        <div className={styles.links}>
          <p>Props</p>
          <p>|</p>
          <p>Matchup</p>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
