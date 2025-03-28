"use client";

import React, { useEffect, useState } from "react";
import getTrendingPlayers from "@/app/lib/services/getTrendingPlayers";
import store from "@/app/mobx/store";
import PlayerCard from "../player-card/PlayerCard";
import projectPlayerStats from "@/app/lib/stat-projections/pointProjection";
import { observer } from "mobx-react-lite";
import playersStore from "@/app/mobx/playersStore";
import "./playerList.scss";
import PlayerCardSkeleton from "../player-card/PlayerCardSkeleton";

type PlayerListProps = {};

const PlayerList: React.FC<PlayerListProps> = observer(() => {
  const [combinedPlayers, setCombinedPlayers] = useState<any[]>([]);
  const [playerStats, setPlayerStats] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchAndCombineData = async () => {
      setIsLoading(true)
      const players = await getTrendingPlayers(
        "basketball",
        "nba",
        playersStore.prop
      );

      if (!players || players.length === 0) {
        console.warn("No players found");
        setIsLoading(false)
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
      setIsLoading(false)
    };

    fetchAndCombineData();
  }, [playersStore.prop]);

  return (
    <div className="player-list">
      {isLoading ? (
        <PlayerCardSkeleton />
      ): (
        combinedPlayers.map((player) => {
          if (player.selections?.length > 1) {
            return (
              <PlayerCard
                player={player}
                key={player.id + player.propType}
                playerStats={playerStats[player.id]}
              />
            );
          }
        })
      )}
      
    </div>
  );
});

export default PlayerList;
