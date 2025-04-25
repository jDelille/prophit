import { calculateAveragePPG } from "@/lib/utils/nba/calculateAveragePPG";

export const getLatestPPGAverages = (stats: number[]) => {
  return {
    latest3Avg: calculateAveragePPG(stats, 3),
    latest5Avg: calculateAveragePPG(stats, 5),
    latest15Avg: calculateAveragePPG(stats, 15),
  };
};