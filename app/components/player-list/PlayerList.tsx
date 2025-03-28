"use client";

import React, { useEffect, useState } from "react";
import getTrendingPlayers from "@/app/lib/services/getTrendingPlayers";
import store from "@/app/mobx/store";
import PlayerCard from "../player-card/PlayerCard";
import projectPlayerStats from "@/app/lib/stat-projections/pointProjection";
import { observer } from "mobx-react-lite";
import playersStore from "@/app/mobx/playersStore";
import "./playerList.scss";

type PlayerListProps = {};

const PlayerList: React.FC<PlayerListProps> = observer(() => {
  const [combinedPlayers, setCombinedPlayers] = useState<any[]>([]);
  const [playerStats, setPlayerStats] = useState<Record<string, any>>({});

  useEffect(() => {
    const fetchAndCombineData = async () => {
      const players = await getTrendingPlayers(
        "basketball",
        "nba",
        playersStore.prop
      );

      if (!players || players.length === 0) {
        console.warn("No players found");
        return;
      }

      const statsData = await Promise.all(
        players.map(async (player) => {
          const points = player.selections?.[0]?.points ?? 0;
          const stats = await projectPlayerStats(
            player.id,
            playersStore.prop,
            points,
            "basketball",
            "nba"
          );
          return { [player.id]: stats };
        })
      );
      const statsObj = Object.assign({}, ...statsData);

      setCombinedPlayers(players);
      setPlayerStats(statsObj);
    };

    fetchAndCombineData();
  }, [playersStore.prop]);

  console.log(combinedPlayers);

  return (
    <div className="player-list">
      {combinedPlayers.map((player) => {
        if (player.selections?.length > 1) {
          return (
            <PlayerCard
              player={player}
              key={player.id + player.propType}
              playerStats={playerStats[player.id]}
            />
          );
        }
      })}
    </div>
  );
});

export default PlayerList;
