import { calculateProjectedPoints } from "@/lib/utils/nba/calculateAveragePPG";
//  ,

export const getProjectedPoints = (
  ppgAverages: number[],
  seasonAvg: number,
  currentPropValue: number,
  venueStats: number
) => {

  const projected = calculateProjectedPoints(ppgAverages, seasonAvg, venueStats);

  

  return {
    projectedPoints: projected,
    projectionDifference: (parseFloat(projected) - currentPropValue).toFixed(1)
  };
};