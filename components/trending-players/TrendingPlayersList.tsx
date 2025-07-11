"use client";

import React, { useEffect, useState } from "react";
import { TrendingPlayersListVM } from "./TrendingPlayersListVM";
import { TrendingPlayer } from "@/types";
import TrendingPlayerCard from "./trending-player-card/TrendingPlayerCard";
import styles from "./TrendingPlayersList.module.scss";
import { PlayerStats } from "@/types/player-stats";

type TrendingPlayersListProps = {
  prop: string;
};

const TrendingPlayersList: React.FC<TrendingPlayersListProps> = ({ prop }) => {
  const [players, setPlayers] = useState<TrendingPlayer[]>([]);
  const [playerStats, setPlayerStats] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const vm = new TrendingPlayersListVM("baseball", "mlb", prop);

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const { players, playerStats, propCount } = await vm.fetchPlayersAndStats();
        setPlayers(players);
        setPlayerStats(playerStats);
      } catch (e) {
        console.error(e);
        setError("Failed to fetch players or stats.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, [prop]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  

  return (
    <div className={styles.trendingPlayersList}>
      {players.length > 0 ? (
        players.map((player) => (
          <TrendingPlayerCard
            player={player}
            key={player.id}
            playerStats={playerStats[player.id]}
            
          />
        ))
      ) : (
        <div>No players found</div>
      )}
    </div>
  );
};

export default TrendingPlayersList;
