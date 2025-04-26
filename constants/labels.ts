export type Labels = {
    id: number;
    name: string;
}

export const getLabelsByLeague = (league: string): Labels[] => {
    const lowerLeague = league.toLowerCase();

    const leagueLabels: Record<string, Labels[]> = {
        nba: [
            {id: 1, name: "Player"},
            {id: 2, name: "Prop"},
            {id: 3, name: "Proj."},
            {id: 4, name: "Proj. Diff"},
            {id: 5, name: "L-3"},
            {id: 6, name: "L-5"},
            {id: 7, name: "L-15"},
            {id: 8, name: "Season"},
            {id: 9, name: "Pick"},
            {id: 10, name: "Analyze"}
        ]
    }

    return leagueLabels[lowerLeague] || [];
}