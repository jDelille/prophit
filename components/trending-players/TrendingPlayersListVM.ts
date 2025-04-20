import getTrendingPlayers from "@/lib/services/getTrendingPlayers";
import { TrendingPlayer } from "@/types";

export class TrendingPlayersListVM {
    sport: string = "";
    league: string = "";
    prop: string = "";
    playerList: TrendingPlayer[] = [];

    constructor (sport: string, league: string, prop: string) {
        this.sport = sport;
        this.league = league;
        this.prop = prop;
    }

    async fetchTrendingPlayers(): Promise<void> {
        const data = await getTrendingPlayers(this.sport, this.league, this.prop);
        this.setTrendingPlayers(data);
    }

    setTrendingPlayers(players: TrendingPlayer[]): void {
        this.playerList = players;
    }

    getPlayers(): TrendingPlayer[] {
        return this.playerList;
    }

    setProp(prop: string) {
        this.prop = prop;
    }
    

}