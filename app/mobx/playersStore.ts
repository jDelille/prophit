import { makeAutoObservable } from "mobx";

class PlayersStore {
  playersData = new Map();
  prop: string = ""; 
  lastFetchedProp = "";

  constructor() {
    makeAutoObservable(this);
    this.loadFromLocalStorage();
  }

  loadFromLocalStorage() {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("playersData");
      if (storedData) {
        try {
          const parsedData = JSON.parse(storedData);
          this.playersData = new Map(Object.entries(parsedData));
        } catch (error) {
          console.error("Error parsing localStorage data:", error);
          this.playersData = new Map();
        }
      }
    }
  }

  async fetchPlayerData(playerId: string) {
    if (this.playersData.has(playerId)) return;

    const cachedData = this.getCachedData(playerId);

    if (cachedData) {
      this.playersData.set(playerId, cachedData.stats);
    } else {
      const response = await fetch(
        `/gamelog?sport=basketball&league=nba&playerId=${playerId}`
      );
      const data = await response.json();

      this.playersData.set(playerId, data);
      this.updateCache(playerId, data);
    }
  }

  getCachedData(playerId: string) {
    const cachedData = JSON.parse(localStorage.getItem("playersData") || "{}");
    const playerData = cachedData[playerId];
    if (playerData && Date.now() - playerData.timestamp < 3600000) {
      return playerData;
    }
    return null;
  }

  updateCache(playerId: string, data: any) {
    const cachedData = JSON.parse(localStorage.getItem("playersData") || "{}");
    cachedData[playerId] = { stats: data, timestamp: Date.now() };
    localStorage.setItem("playersData", JSON.stringify(cachedData));
  }

  setProp(newProp: string) {
    this.prop = newProp;
  }

  setLastFetchedProp(prop: string) {
    this.lastFetchedProp = prop;
  }

  setPlayersData(players: any[], stats: Record<string, any>) {
    this.playersData.clear(); // Reset the Map before setting new data
    players.forEach(player => {
      this.playersData.set(player.id, stats[player.id]);
    });
  }

  setResults(count: number) {
    // Logic to set number of results
    console.log(`Fetched ${count} results`);
  }
}

const playersStore = new PlayersStore();
export default playersStore;