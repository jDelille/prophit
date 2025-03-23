import axios from "axios";
import {
  calculateAveragePPG,
  calculateProjectedPoints,
} from "../utils/calculateAveragePPG";
import { getHomeAwayGameIds } from "../utils/getHomeAwayGameIds";
import store from "@/app/mobx/store";
import { calculateHitRatePercentage } from "../utils/calculateHitRatePercentage";

export enum StatType {
  MIN = "MIN",
  FG = "FG",
  FG_PERCENTAGE = "FG%",
  THREE_PT = "3PT",
  THREE_PT_PERCENTAGE = "3P%",
  FT = "FT",
  FT_PERCENTAGE = "FT%",
  REB = "REB",
  AST = "AST",
  BLK = "BLK",
  STL = "STL",
  PF = "PF",
  TO = "TO",
  PTS = "PTS",
}

export const getStatIndex = (statName: StatType): number => {
  const statMapping: Record<StatType, number> = {
    [StatType.MIN]: 0,
    [StatType.FG]: 1,
    [StatType.FG_PERCENTAGE]: 2,
    [StatType.THREE_PT]: 3,
    [StatType.THREE_PT_PERCENTAGE]: 4,
    [StatType.FT]: 5,
    [StatType.FT_PERCENTAGE]: 6,
    [StatType.REB]: 7,
    [StatType.AST]: 8,
    [StatType.BLK]: 9,
    [StatType.STL]: 10,
    [StatType.PF]: 11,
    [StatType.TO]: 12,
    [StatType.PTS]: 13,
  };
  return statMapping[statName];
};

export const mapPropToStatType = (prop: string): { statType: StatType; index: number } | null => {
  const mapping: Record<string, { statType: StatType; index: number }> = {
    "Pts": { statType: StatType.PTS, index: getStatIndex(StatType.PTS) },
    "Reb": { statType: StatType.REB, index: getStatIndex(StatType.REB) },
    "Ast": { statType: StatType.AST, index: getStatIndex(StatType.AST) },
    
  };

  return mapping[prop] || null; // Handle unmapped props gracefully
};

const projectPlayerStats = async (playerId: string, prop: string, currentPropValue: number) => {
  try {
    const response = await axios.get(
      `https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/${playerId}/gamelog`
    );

    const gameLogs = response.data;
    // console.log(gameLogs);

    const combineAndSortStats = (seasonTypes: any, statIndex: number) => {
      return seasonTypes[0].categories.flatMap(({ events }: any) =>
        events.map(({ stats }: any) => stats.at(statIndex))
      );
    };

    const combinedPPG = combineAndSortStats(
      gameLogs.seasonTypes, 
      mapPropToStatType(prop)?.index ?? 13
    );
    // Get latest 3, 5, and 10 games point averages
    const latest3Avg = calculateAveragePPG(combinedPPG, 3);
    const latest5Avg = calculateAveragePPG(combinedPPG, 5);
    const latest10Avg = calculateAveragePPG(combinedPPG, 10);

    // console.log("combined", combinedPPG);

    // Get percentage of times player has hit the current over
    const latest3Percentage = calculateHitRatePercentage(combinedPPG, currentPropValue, 3);
    const latest5Percentage = calculateHitRatePercentage(combinedPPG, currentPropValue, 5);
    const latest10Percentage = calculateHitRatePercentage(combinedPPG, currentPropValue, 10);


    const lastestPPG = [
      parseFloat(latest3Avg),
      parseFloat(latest5Avg),
      parseFloat(latest10Avg),
    ];
    const averagePoints = parseFloat(
      gameLogs.seasonTypes[0].summary.stats[0].stats.at(mapPropToStatType(prop)?.index ?? 0)
    );
    const homeGamePoints = getHomeAwayGameIds(gameLogs.events, gameLogs.seasonTypes, true, prop);

    const projectedPoints = calculateProjectedPoints(
      lastestPPG,
      averagePoints,
      homeGamePoints

    );

    return {
      points: {
        latest3Avg,
        latest5Avg,
        latest10Avg,
        projectedPoints,
        latest3Percentage, 
        latest5Percentage,
        latest10Percentage
      },
    };
  } catch (error) {
    console.error("Error fetching player stats:", error);
    return null;
  }
};

export default projectPlayerStats;
