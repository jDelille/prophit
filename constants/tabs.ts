export type Filters = {
  id: number;
  name: string;
};

export const getTabsByPage = (path: string): Filters[] => {

  if(!path) return [];

  const key = path.toLowerCase();

  const tabs: Record<string, Filters[]> = {
    nba: [
      { id: 1, name: "All" },
      { id: 2, name: "Points" },
      { id: 3, name: "Assists" },
      { id: 4, name: "3 Pointers" },
      { id: 5, name: "Steals" },
      { id: 6, name: "Blocks" },
      { id: 7, name: "Points + Assists" },
      { id: 8, name: "Points + Rebounds" },
      { id: 9, name: "Rebounds + Assists" },
      { id: 10, name: "Points + Assists + Rebounds" },
    ],
    mlb: [
      { id: 1, name: "All" },
      { id: 2, name: "Home Runs" },
      { id: 3, name: "Hits" },
      { id: 4, name: "Runs" },
      { id: 5, name: "Runs Batted In" },
      { id: 6, name: "Doubles" },
      { id: 7, name: "Triples" },
      { id: 8, name: "Total Bases" },
      { id: 9, name: "Singles" },
      { id: 10, name: "Stolen Bases" },
    ],
    settings: [
      {id: 1, name: "My Account"},
      {id: 2, name: "Email Preferences"},
      {id: 3, name: "Logout"}
    ],
    news: [
      {id: 1, name: "Top Headlines"},
      {id: 2, name: "Todays Top Odds"},
      {id: 3, name: "Injuries"},
      {id: 4, name: "Favorites"}
    ],
    leaderboard: [
      {id: 1, name: "Props"},
      {id: 2, name: "Parlays"},
      {id: 3, name: "Game Picks"}
    ],
    account: [
      {id: 1, name: "Overview"},
      {id: 2, name: "My Bets"},
      {id: 3, name: "Analysis"},
      {id: 4, name: "Favorites"},
      {id: 5, name: "View Public Profile"},
      {id: 6, name: "Edit Profile"}
    ],
    tools: [
      {id: 1, name: "Parlay Calculator"},
      {id: 2, name: "Hedging Calculator"}
    ],
    games: [
      {id: 1, name: "Top"},
      {id: 2, name: "NFL"},
      {id: 3, name: "MLB"},
      {id: 4, name: "NHL"},
      {id: 5, name: "NBA"},
      {id: 6, name: "Golf"},
      {id: 7, name: "F1"}
    ],
    teams: [
      {id: 1, name: "All Teams"},
    ]
  };

  return tabs[key] || [];
};
