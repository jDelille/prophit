export type Selection = {
    id: string;
    label: string;
    odds: string;
    decimalOdds: string;
    marketId: string;
    points?: number;
    venueRole: string; // homePlayer or awayPlayer
    statistic: {
      prefix: string;
      value: number;
    };
  };