export type Category = {
  id: number;
  name: string;
};

export const getCategoriesByLeague = (league: string): Category[] => {
  const lowerLeague = league.toLowerCase();

  const leagueCategories: Record<string, Category[]> = {
    nba: [
      { id: 1, name: "Pts" },
      { id: 2, name: "Reb" },
      { id: 3, name: "Ast" },
    ],
    mlb: [
      { id: 1, name: "Hits O/U" },
      { id: 2, name: "Total Bases" },
    ],
  };

  return leagueCategories[lowerLeague] || [];
};
