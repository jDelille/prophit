import { TrendingPlayer } from "@/types";

export default async function getTeamStats(
  sport: string,
  league: string,
  teamId: string
): Promise<TrendingPlayer[]> {
  const res = await fetch(`/api/espn/teams?sport=${sport}&league=${league}`);

  if (!res.ok) return [];

  const data = await res.json();

  const team = data.teams.find((team: any) => team.team.id === teamId);

  if (!team) return [];

  const opponentOffensiveCategory = team.categories.find(
    (cat: any) => cat.displayName === "Opponent Offensive"
  );

  if (!opponentOffensiveCategory) return [];

  return opponentOffensiveCategory;

}
