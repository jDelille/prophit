import { getBaseUrl } from "../getBaseUrl";

export interface MatchupData {
    model: any;
    };

export default async function getMatchupData(
  league: string,
  eventId: string
): Promise<MatchupData> {
  const baseUrl = getBaseUrl();
  const res = await fetch(
    `${baseUrl}/api/fox/matchup?league=${league}&eventId=${eventId}`
  );

  

  if (!res.ok) return { model: [] };

  const data = await res.json();
  return data.sectionList[0].modules;
}
