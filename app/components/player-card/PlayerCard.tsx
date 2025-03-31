import React from "react";
import { Selection } from "@/app/lib/services/getDraftkingsData";
import { PlayerStats } from "./playerCardLogic";
import PlayerCardColumns from "./player-card-columns/PlayerCardColumns";
import PlayerCardHeader from "./player-card-header/PlayerCardHeader";
import "./playerCard.scss";

export type Player = {
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
  return (
    <div className="player-card" key={player.id + player.propType}>
      <PlayerCardHeader player={player} />
      <PlayerCardColumns player={player} playerStats={playerStats} />
    </div>
  );
};

export default PlayerCard;
