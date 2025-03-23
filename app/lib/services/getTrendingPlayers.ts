import { getDraftkingsData, Selection } from "./getDraftkingsData";

export type TrendingPlayer = {
  id: string;
  name: string;
  headshot: string;
  prop: string;
  value: string;
  type: string;
  position: string;
  team: string;
  selections?: Selection[];
};

export default async function getTrendingPlayers(sport: string, league: string, prop: string): Promise<TrendingPlayer[]> {
  const res = await fetch(
    `https://site.web.api.espn.com/apis/common/v3/sports/${sport}/${league}/statistics/byathlete?region=us&lang=en&contentorigin=espn&isqualified=true&page=1&limit=50`,
    { cache: "no-store" }
  );

  if (!res.ok) return [];

  const data = await res.json();
  // console.log(data)

  let dkData: Record<string, Selection[]> = {};

  switch (prop) {
    case "Reb":
      dkData = await getDraftkingsData("42648", "1216", "12492"); 
      break;
    case "Pts":
      dkData = await getDraftkingsData("42648", "1215", "12488"); 
      break;
    case "Ast":
      dkData = await getDraftkingsData("42648", "1217", "12495"); 
      break;
    default:
      dkData = await getDraftkingsData("42648", "1215", "12488"); 
      break;
  }

  // console.log(dkData);

  return data.athletes.map((athlete: any) => {
    const playerName = athlete.athlete.displayName;

    const selections = dkData[playerName] || [];

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
