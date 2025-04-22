import axios from "axios";
import { getBaseURL } from "../../getBaseURL";
import { mapPropToStat } from "@/types";
import { calculateAveragePPG, calculateProjectedPoints } from "@/lib/utils/nba/calculateAveragePPG";
import { calculateHitRatePercentage } from "@/lib/utils/calculateHitRatePercentage";
import { getHomeAwayGameIds } from "../../getHomeAwayGameIds";

const playerStatProjections = async (
  playerId: string,
  prop: string,
  currentPropValue: number,
  venueRole: string,
  sport: string,
  league: string
) => {
  const baseURL = getBaseURL();

  const response = await axios.get(
    `${baseURL}/api/espn/gamelog?sport=${sport}&league=${league}&playerId=${playerId}`
  );

  const gamelogs = response.data;

  const combineAndSortStats = (seasonTypes: any, statIndex: number) => {
    return seasonTypes[1].categories.flatMap(({ events }: any) =>
      events.map(({ stats }: any) => stats.at(statIndex))
    );
  };

  const combinedPPG = combineAndSortStats(
    gamelogs.seasonTypes,
    mapPropToStat(prop, league)?.index ?? 13
  );

  const latest3Avg = calculateAveragePPG(combinedPPG, 3);
  const latest5Avg = calculateAveragePPG(combinedPPG, 5);
  const latest15Avg = calculateAveragePPG(combinedPPG, 15);

  const lastestPPG = [
    parseFloat(latest3Avg),
    parseFloat(latest5Avg),
    parseFloat(latest15Avg),
  ];

  const averagePoints = parseFloat(
    gamelogs.seasonTypes[0].summary.stats[0].stats.at(
      mapPropToStat(prop, league)?.index ?? 0
    )
  );

  const homeGamePoints = getHomeAwayGameIds(
    gamelogs.events,
    gamelogs.seasonTypes,
    true,
    prop,
    league
  );

  const awayGamePoints = getHomeAwayGameIds(
    gamelogs.events,
    gamelogs.seasonTypes,
    false,
    prop,
    league
  );

  const projectedPoints = calculateProjectedPoints(
    lastestPPG,
    averagePoints,
    venueRole === "HomePlayer" ? homeGamePoints : awayGamePoints
  );

  const latest3Percentage = calculateHitRatePercentage(
    combinedPPG,
    currentPropValue,
    3
  );
  const latest5Percentage = calculateHitRatePercentage(
    combinedPPG,
    currentPropValue,
    5
  );
  const latest15Percentage = calculateHitRatePercentage(
    combinedPPG,
    currentPropValue,
    15
  );

  const projectionDifference = parseInt(projectedPoints) - currentPropValue;

  return {
    values: {
      latest3Avg,
      latest5Avg,
      latest15Avg,
      latest3Percentage,
      latest5Percentage,
      latest15Percentage,
      projectedPoints,
      projectionDifference
      
    }
  } 
} 


export default playerStatProjections;