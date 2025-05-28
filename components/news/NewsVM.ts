export class NewsVM {
  sport: string;
  league: string;

  constructor(sport: string, league: string) {
    this.sport = sport;
    this.league = league;
  }

  async fetchNews() {
    const nbaRes = await fetch(`/api/espn/news?sport=${this.sport}&league=${this.league}`);
    const mlbRes = await fetch(`/api/espn/news?sport=baseball&league=mlb`);
    const nflRes = await fetch(`/api/espn/news?sport=football&league=nfl`);

    if (!nbaRes.ok || !mlbRes.ok) {
      throw new Error("Failed to fetch news");
    }

    const nbaNews = await nbaRes.json();
    const mlbNews = await mlbRes.json();
    const nflNews = await nflRes.json();

    return {
      news: [...nbaNews.articles, ...mlbNews.articles, ...nflNews.articles],
    };
  }
}