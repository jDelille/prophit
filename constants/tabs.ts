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
    ]
  };

  return tabs[key] || [];
};
