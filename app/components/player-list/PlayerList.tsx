"use client";

import React, { useEffect, useState } from "react";
import getTrendingPlayers from "@/app/lib/services/getTrendingPlayers";
import store from "@/app/mobx/store";
import PlayerCard from "../player-card/PlayerCard";
import projectPlayerStats from "@/app/lib/stat-projections/pointProjection";
import { observer } from "mobx-react-lite";
import "./playerList.scss";

type PlayerListProps = {};

const PlayerList: React.FC<PlayerListProps> = observer(() => {
  const [combinedPlayers, setCombinedPlayers] = useState<any[]>([]);
  const [playerStats, setPlayerStats] = useState<Record<string, any>>({});

  useEffect(() => {
    const fetchAndCombineData = async () => {
      const players = await getTrendingPlayers("basketball", "nba", store.prop);

      const statsData = await Promise.all(
        players.map(async (player) => {
          const points = player.selections?.[0]?.points ?? 0;
          const stats = await projectPlayerStats(
            player.id,
            store.prop,
            points,
            "basketball",
            "nba"
          );

          return { [player.id]: stats };
        })
      );

      store.setResults(players.length);

      const statsObj = Object.assign({}, ...statsData);
      setPlayerStats(statsObj);
      setCombinedPlayers(players);
    };

    fetchAndCombineData();
  }, [store.prop]);

  return (
    <div className="player-list">
      {combinedPlayers.map((player) => {
        if (player.selections.length > 1) {
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
