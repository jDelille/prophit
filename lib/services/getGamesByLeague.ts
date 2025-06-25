import { GameTypes } from "@/types/game-types";

export default async function getGamesByLeague(
  sport: string,
  league: string
): Promise<GameTypes[]> {
  const res = await fetch(`/api/espn/games?sport=${sport}&league=${league}`);

  if (!res.ok) return [];

  const data = await res.json();

  const games = data;

  return games;
}
