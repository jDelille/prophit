export type Labels = {
    id: number;
    name: string;
}

export const getLabelsByLeague = (league: string): Labels[] => {
    const lowerLeague = league.toLowerCase();

    const leagueLabels: Record<string, Labels[]> = {
        nba: [
            {id: 1, name: "Player"},
            {id: 2, name: "L-3"},
            {id: 3, name: "L-5"},
            {id: 4, name: "L-10"}
        ]
    }

    return leagueLabels[lowerLeague] || [];
}