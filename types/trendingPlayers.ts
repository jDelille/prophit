import { Selection } from "./draftkingsSelection";

export type TrendingPlayer = {
    id: string;
    name: string;
    headshot: string;
    prop: string;
    value: string;
    type: string;
    position: string;
    team: string;
    selections?: Selection[];
  };
  