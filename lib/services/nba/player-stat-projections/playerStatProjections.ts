import { getLatestPPGAverages } from "@/lib/projections/calculateAverages";
import {
  extractCombinedStats,
  extractSeasonAverage,
} from "@/lib/projections/extractStats";
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
  league: string,
  oppRank?: string,
  isPostSeason?: boolean
) => {
  const gamelogs = await fetchPlayerGameLog(playerId, sport, league);

  const combinedStats = extractCombinedStats(
    gamelogs.seasonTypes,
    prop,
    league,
    ["regular", "postseason"]
  );

  const seasonAverage = extractSeasonAverage(
    gamelogs.seasonTypes,
    prop,
    league,
    "regular"
  );

  const postseasonAverage = extractSeasonAverage(
    gamelogs.seasonTypes,
    prop,
    league,
    "postseason"
  );

  const { latest3Avg, latest5Avg, latest15Avg } =
    getLatestPPGAverages(combinedStats);

  const venueStats = getHomeAwayGameIds(
    gamelogs.events,
    gamelogs.seasonTypes,
    venueRole === "HomePlayer",
    prop,
    league
  );

  const { projectedPoints, projectionDifference } = getProjectedPoints(
    [parseFloat(latest3Avg), parseFloat(latest5Avg), parseFloat(latest15Avg)],
    postseasonAverage,
    venueStats,
    currentPropValue
  );

  const {
    latest3Percentage,
    latest5Percentage,
    latest15Percentage,
    seasonPercentage,
    postseasonPercentage,
  } = getHitRates(combinedStats, currentPropValue);

  const propPick = parseFloat(projectionDifference) >= 0.1 ? "Over" : "Under";

  const projDiff = Math.max(Math.min(parseFloat(projectionDifference), 10), -10);
  const projectionScore = ((projDiff + 10) / 20) * 100; // -10 => 0, +10 => 100
  
  // const opponentScore = ((parseInt(oppRank) - 1) / 29) * 100; // rank 1 => 0, rank 30 => 100
  
  const l3 = parseFloat(latest3Percentage);
  const l5 = parseFloat(latest5Percentage);
  const l15 = parseFloat(latest15Percentage);
  const season = parseFloat(seasonPercentage);
  const hitRateScore = l3 * 0.4 + l5 * 0.3 + l15 * 0.2 + season * 0.1;
  
  const rating =
    Math.round(projectionScore * 0.4 +
    // opponentScore * 0.2 +
    hitRateScore * 0.5);


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
      seasonPercentage,
      postseasonPercentage,
      propPick,
      rating
    },
  };
};

export default playerStatProjections;
