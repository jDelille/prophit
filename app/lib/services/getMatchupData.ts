export interface MatchupData {
    model: any;
    };

export default async function getMatchupData(
  league: string,
  eventId: string
): Promise<MatchupData> {
  const res = await fetch(
    `http://localhost:3000/api/fox/matchup?league=${league}&eventId=${eventId}`
  );

  

  if (!res.ok) return { model: [] };

  const data = await res.json();
  return data.sectionList[0].modules;
}
