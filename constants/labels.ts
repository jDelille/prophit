export type Labels = {
    id: number;
    name: string;
    canSort?: boolean;
  };
  
  export const getLabelsByLeague = (league: string): Labels[] => {
    const lowerLeague = league.toLowerCase();
  
    const leagueLabels: Record<string, Labels[]> = {
      nba: [
        { id: 1, name: "Player" },
        { id: 2, name: "Prop" },
        { id: 3, name: "Proj." },
        { id: 4, name: "Diff", canSort: true },
        { id: 5, name: "Rating", canSort: true },
        { id: 6, name: "Opp Rank", canSort: true },
        { id: 7, name: "L-3", canSort: true },
        { id: 8, name: "L-5", canSort: true },
        { id: 9, name: "L-15", canSort: true },
        { id: 10, name: "Season", canSort: true },
        { id: 11, name: "Pick" },
      ]
    };
  
    return leagueLabels[lowerLeague] || [];
  };