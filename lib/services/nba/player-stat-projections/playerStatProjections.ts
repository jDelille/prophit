import { getLatestPPGAverages } from "@/lib/projections/calculateAverages";
import { extractCombinedStats, extractSeasonAverage } from "@/lib/projections/extractStats";
import { fetchPlayerGameLog } from "@/lib/projections/fetchPlayerGameLog";
import { getHomeAwayGameIds } from "../../getHomeAwayGameIds";
import { getProjectedPoints } from "@/lib/projections/calculateProjections";
import { getHitRates } from "@/lib/projections/calculateHitRates";


const playerStatProjections = async (
  playerId: string,
  prop: string,
  currentPropValue: number,
  venueRole: string,
  sport: string,
  league: string
) => {
  const gamelogs = await fetchPlayerGameLog(playerId, sport, league);

  const combinedStats = extractCombinedStats(gamelogs.seasonTypes, prop, league, "postseason");
  const seasonAverage = extractSeasonAverage(gamelogs.seasonTypes, prop, league, "postseason");
  const { latest3Avg, latest5Avg, latest15Avg } = getLatestPPGAverages(combinedStats);

  const venueStats = getHomeAwayGameIds(
    gamelogs.events,
    gamelogs.seasonTypes,
    venueRole === "HomePlayer",
    prop,
    league
  );

  console.log(gamelogs)

  const { projectedPoints, projectionDifference } = getProjectedPoints(
    [parseFloat(latest3Avg), parseFloat(latest5Avg), parseFloat(latest15Avg)],
    seasonAverage,
    venueStats,
    currentPropValue
  );

  const {
    latest3Percentage,
    latest5Percentage,
    latest15Percentage,
    seasonPercentage,
  } = getHitRates(combinedStats, currentPropValue);

  return {
    values: {
      latest3Avg,
      latest5Avg,
      latest15Avg,
      latest3Percentage,
      latest5Percentage,
      latest15Percentage,
      projectedPoints,
      projectionDifference,
      seasonPercentage
    }
  };
};

export default playerStatProjections;