export const calculateAveragePPG = (
  combinedPPG: number[],
  numGames: number
) => {
  const latestGames = combinedPPG.slice(0, numGames);
  const totalPPG = latestGames
    .map(Number)
    .reduce((sum: number, value: number) => sum + value, 0);
  return (totalPPG / numGames).toFixed(1);
};

export const calculateProjectedPoints = (
  latestPPG: number[],
  averagePoints: number,
  homeGamePoints: number | undefined
) => {

  const recentAndSeasonAvg =
    latestPPG[0] * 0.4 +
    latestPPG[1] * 0.3 +
    latestPPG[2] * 0.2 +
    averagePoints * 0.1;

  const avgHomePPG = homeGamePoints;

  const projectedPoints = recentAndSeasonAvg + (avgHomePPG as number) * 0.1;

  return projectedPoints.toFixed(1);
};
