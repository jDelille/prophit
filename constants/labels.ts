export type Labels = {
    id: number;
    name: string;
  };
  
  export const getLabelsByLeague = (league: string): Labels[] => {
    const lowerLeague = league.toLowerCase();
  
    const leagueLabels: Record<string, Labels[]> = {
      nba: [
        { id: 1, name: "Player" },
        { id: 2, name: "Prop" },
        { id: 3, name: "Proj." },
        { id: 4, name: "Diff" },
        { id: 5, name: "Rating" },
        { id: 6, name: "Opp Rank" },
        { id: 7, name: "L-3" },
        { id: 8, name: "L-5" },
        { id: 9, name: "L-15" },
        { id: 10, name: "Season" },
        { id: 11, name: "Pick" },
        { id: 12, name: "Analyze" }
      ]
    };
  
    return leagueLabels[lowerLeague] || [];
  };