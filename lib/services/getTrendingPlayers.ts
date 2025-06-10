import { TrendingPlayer } from "@/types";
import { getPropDraftKingsData } from "../utils/propMetadata";
import getTeamStats from "./getTeamStats";

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

      const playerTeamId = teamData.team.id;
      const competitors = teamData.team.nextEvent?.[0]?.competitions?.[0]?.competitors || [];

      const opponentTeamId = competitors.find(
        (competitor: any) => competitor.team.id !== playerTeamId
      )?.team.id;

      const teamStats = await getTeamStats(sport, league, opponentTeamId);

      const selections = draftkingsData[playerName] || [];

      return {
        id: athlete.athlete.id,
        name: playerName,
        headshot: athlete.athlete?.headshot?.href || '',
        propType: prop,
        value: athlete.categories[1]?.totals?.[0] ?? null,
        position: athlete.athlete?.position?.abbreviation ?? '',
        teamData, 
        selections,
        teamStats

      };
    })
  );

  return players;
}