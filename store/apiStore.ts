import { makeAutoObservable } from "mobx";

class APIStore {
    sport: string = "baseball";
    league: string = "mlb";

    constructor() {
        makeAutoObservable(this);
    }

    setSport(sport: string) {
        this.sport = sport;
    }
}

const apiStore = new APIStore();
export default apiStore;