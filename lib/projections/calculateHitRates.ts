import { calculateHitRatePercentage } from "@/lib/utils/calculateHitRatePercentage";

export const getHitRates = (stats: number[], value: number) => {
  return {
    latest3Percentage: calculateHitRatePercentage(stats, value, 3),
    latest5Percentage: calculateHitRatePercentage(stats, value, 5),
    latest15Percentage: calculateHitRatePercentage(stats, value, 15),
    seasonPercentage: calculateHitRatePercentage(stats, value, stats.length),
    postseasonPercentage: calculateHitRatePercentage(stats, value, stats.length)
  };
};