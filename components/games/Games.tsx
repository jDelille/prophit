import React, { useEffect, useState } from "react";
import styles from "./Games.module.scss";
import getGamesByLeague from "@/lib/services/getGamesByLeague";
import GameCard from "./game-card/GameCard";
import { GameTypes } from "@/types/game-types";
import Labels from "./games-labels/Labels";


type GamesProps = {};
const Games: React.FC<GamesProps> = () => {
  const [games, setGames] = useState<GameTypes[]>([]);

  useEffect(() => {
    async function fetchGames() {
      const gamesData = await getGamesByLeague("baseball", "mlb");
      setGames(gamesData);
    }
    fetchGames();
  }, []);

  console.log(games);

  return (
    <div className={styles.games}>
      <Labels />
      {games.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </div>
  );
};

export default Games;
