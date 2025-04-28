import { Selection } from "./draftkings-selection";
import { TeamData } from "./team-data";

export type TrendingPlayer = {
  id: string;
  name: string;
  headshot: string;
  prop: string;
  value: string;
  type: string;
  position: string;
  selections?: Selection[];
  teamData: TeamData;
  propType: string;
};
