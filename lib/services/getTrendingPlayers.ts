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

  return data.athletes.map((athlete: any) => {
    const playerName = athlete.athlete.displayName;

    const selections = draftkingsData[playerName] || [];

    return {
      id: athlete.athlete.id,
      name: athlete.athlete.displayName,
      headshot: athlete.athlete?.headshot.href,
      propType: prop.toUpperCase(),
      value: athlete.categories[1].totals[0],
      position: athlete.athlete.position.abbreviation,
      team: athlete.athlete.teamName,
      teamLogo: athlete.athlete.teamLogos[0].href,
      selections,
    };
  });
}
