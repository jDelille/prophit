import getTrendingPlayers from "@/lib/services/getTrendingPlayers";
import playerStatProjections from "@/lib/services/nba/player-stat-projections/playerStatProjections";
import { TrendingPlayer } from "@/types";
import { PlayerStats } from "@/types/player-stats";

export class TrendingPlayersListVM {
  sport: string;
  league: string;
  prop: string;
  propCount: number;

  constructor(sport: string, league: string, prop: string) {
    this.sport = sport;
    this.league = league;
    this.prop = prop;
    this.propCount = 0;
  }

  private setPropCount(count: number) {
    this.propCount = count;
  }

  async fetchPlayersAndStats(): Promise<{
    players: TrendingPlayer[];
    playerStats: PlayerStats[];
    propCount: number;
  }> {
    const players = await getTrendingPlayers(
      this.sport,
      this.league,
      this.prop
    );

    if (!players || players.length === 0) {
      return { players: [], playerStats: [], propCount: 0 };
    }

    const validPlayers = players.filter(
      (player) => player?.selections?.[0]?.points !== undefined
    );

    this.setPropCount(validPlayers.length);

    const statsData = await Promise.all(
      players.map(async (player) => {
        const points = player.selections?.[0]?.points ?? 0;
        const venueRole = player.selections?.[0]?.venueRole ?? "HomePlayer";

        const stats = await playerStatProjections(
          player.id,
          this.prop,
          points,
          venueRole,
          this.sport,
          this.league,
          player.teamStats.ranks[0]
        );

        return { [player.id]: stats };
      })
    );

    const playerStats = Object.assign({}, ...statsData);

    return { players, playerStats, propCount: this.propCount };
  }
}
