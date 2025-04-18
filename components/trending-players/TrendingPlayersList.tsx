"use client";

import React, { useEffect, useState } from "react";
import { TrendingPlayersListVM } from "./TrendingPlayersListVM";
import { TrendingPlayer } from "@/types";
import TrendingPlayerCard from "./trending-player-card/TrendingPlayerCard";
import styles from './TrendingPlayersList.module.scss';

type TrendingPlayersListProps = {};
const TrendingPlayersList: React.FC<TrendingPlayersListProps> = () => {
  const [players, setPlayers] = useState<TrendingPlayer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const vm = new TrendingPlayersListVM("baseball", "mlb", "hr");

    const fetchPlayers = async () => {
      try {
        setLoading(true);
        await vm.fetchTrendingPlayers();
        setPlayers(vm.getPlayers());
      } catch (err) {
        setError("Failed to fetch players.");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={styles.trendingPlayersList}>
      {players.length > 0 ? (
        players.map((player) => <TrendingPlayerCard player={player} key={player.id} />)
      ) : (
        <div>No players found</div>
      )}
    </div>
  );
};

export default TrendingPlayersList;
