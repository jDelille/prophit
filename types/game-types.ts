import { Team } from "./teams";

export type GameTypes = {
  id: string;
  date: string;
  name: string;
  shortName: string;
  uid: string;
  status: {
   clock: number;
   displayClock: string;
   period?: string;
   type: {
    completed: boolean;
    description: string;
    id: string;
    shortDetail: string;
    state: string;
   } 
  }
  competitions: {
    id: string;
    outsText?: string;
    playByPlayAvailable: boolean;
    timeValid: boolean;
    odds: {
        awayTeamOdds: {
            favorite: boolean;
            underdog: boolean;
        }
    }[]
    broadcasts: {
      market: string;
      names: string[];
    }[];
    competitors: {
      id: string;
      errors?: number;
      hits?: number;
      score: string;
      records: {
        abbreviation: string;
        name: string;
        summary: string;
        type: string;
      }[]
      team: {
        abbreviation: string;
        alternateColor: string;
        color: string;
        displayName: string;
        id: string;
        isActive: boolean;
        location: string;
        name: string;
        nickname: string;
        shortDisplayName: string;
        slug: string;
        logo: string;
      };
    }[];
  }[];
};
