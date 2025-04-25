import { calculateProjectedPoints } from "@/lib/utils/nba/calculateAveragePPG";

export const getProjectedPoints = (
  ppgAverages: number[],
  seasonAvg: number,
  venueStats: number,
  currentPropValue: number
) => {

  const projected = calculateProjectedPoints(ppgAverages, seasonAvg, venueStats);
  return {
    projectedPoints: projected,
    projectionDifference: parseInt(projected) - currentPropValue,
  };
};