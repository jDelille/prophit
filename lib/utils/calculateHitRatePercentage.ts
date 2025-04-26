export function calculateHitRatePercentage(
  combinePPG: number[],
  currentPropValue: number,
  numOfGames: number
) {
  const latestGames = combinePPG.slice(0, numOfGames);

  const countAboveThreshold = latestGames.filter(
    (num) => Number(num) > currentPropValue
  ).length;

  const percentage = (countAboveThreshold / latestGames.length) * 100;

  return percentage.toFixed(0);
}
