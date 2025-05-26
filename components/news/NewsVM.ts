export class NewsVM {
  sport: string;
  league: string;

  constructor(sport: string, league: string) {
    this.sport = sport;
    this.league = league;
  }

  async fetchNews() {
    const res = await fetch(
      `/api/espn/news?sport=${this.sport}&league=${this.league}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch news");
    }

    const news = await res.json();

    return {
      news
    };
  }
}
