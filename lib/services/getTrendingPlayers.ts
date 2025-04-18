import { Selection, TrendingPlayer } from "@/types";
import { getDraftkingsData } from "./getDraftkingsData";

export default async function getTrendingPlayers(
  sport: string,
  league: string,
  prop: string
): Promise<TrendingPlayer[]> {
  const res = await fetch(`/api/espn/athletes?sport=${sport}&league=${league}`);

  if (!res.ok) return [];

  const data = await res.json();

  let draftkingsData: Record<string, Selection[]> = {};

  switch (prop) {
    case "Reb":
      draftkingsData = await getDraftkingsData("42648", "1216", "12492");
      break;
    case "Pts":
      draftkingsData = await getDraftkingsData("42648", "1215", "12488");
      break;
    case "Ast":
      draftkingsData = await getDraftkingsData("42648", "1217", "12495");
      break;
    default:
      draftkingsData = await getDraftkingsData("42648", "1215", "12488");
      break;
  }

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
