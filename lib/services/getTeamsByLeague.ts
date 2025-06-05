import { Teams } from "@/types/teams";


export default async function getTeamsByLeague(
  sport: string,
  league: string
): Promise<Teams[]> {
  const res = await fetch(`/api/espn/teams?sport=${sport}&league=${league}`);

  if (!res.ok) return [];

  const data = await res.json();

  const teams = data;

  return teams;
}
