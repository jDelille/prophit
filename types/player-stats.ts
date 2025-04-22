export type PlayerStats = {
    values: {
      latest3Avg: string;
      latest5Avg: string;
      latest15Avg: string;
      projectedPoints: number;
      latest3Percentage: number;
      latest5Percentage: number;
      latest15Percentage: number;
      seasonPercentage: string;
      venueHitRatePercentage: number;
      projectionDifference: number;
    };
  };