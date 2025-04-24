import { TrendingPlayer } from "@/types";
import { getPropDraftKingsData } from "../utils/propMetadata";

export default async function getTrendingPlayers(
  sport: string,
  league: string,
  prop: string
): Promise<TrendingPlayer[]> {
  const res = await fetch(`/api/espn/athletes?sport=${sport}&league=${league}`);

  if (!res.ok) return [];

  const data = await res.json();
  const draftkingsData = await getPropDraftKingsData(prop, sport);

  const players = await Promise.all(
    data.athletes.map(async (athlete: any) => {
      const playerName = athlete.athlete.displayName;

      const teamRes = await fetch(`/api/espn/team?sport=${sport}&league=${league}&teamId=${athlete.athlete.teamId}`);
      const teamData = teamRes.ok ? await teamRes.json() : null;

      const selections = draftkingsData[playerName] || [];

      return {
        id: athlete.athlete.id,
        name: playerName,
        headshot: athlete.athlete?.headshot?.href || '',
        propType: prop.toUpperCase(),
        value: athlete.categories[1]?.totals?.[0] ?? null,
        position: athlete.athlete?.position?.abbreviation ?? '',
        teamData, 
        selections,
      };
    })
  );

  return players;
}