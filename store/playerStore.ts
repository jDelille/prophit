import { TrendingPlayer } from "@/types";
import { makeAutoObservable } from 'mobx';

class PlayerStore {
    player: TrendingPlayer | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setPlayer(player: TrendingPlayer) {
        this.player = player;
    }
}

const playerStore = new PlayerStore();
export default playerStore;