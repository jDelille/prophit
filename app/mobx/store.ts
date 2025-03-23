import { makeAutoObservable } from 'mobx';

class Store { 
    results = 0;
    prop = "Pts";

    constructor() {
        makeAutoObservable(this);
    }

    setResults(count: number) {
        this.results = count;
    }

    setProp(newProp: string) {
        this.prop = newProp;
    }

}

const store = new Store();
export default store;