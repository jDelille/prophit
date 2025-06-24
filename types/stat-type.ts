export enum NBAStatType {
  MIN = "MIN",
  FG = "FG",
  FG_PERCENTAGE = "FG%",
  THREE_PT = "3PT",
  THREE_PT_PERCENTAGE = "3P%",
  FT = "FT",
  FT_PERCENTAGE = "FT%",
  REB = "REB",
  AST = "AST",
  BLK = "BLK",
  STL = "STL",
  PF = "PF",
  TO = "TO",
  PTS = "PTS",
}

export enum MLBStatType {
  HITS_OU = "HITS O/U",
  HITS = "Hits",
  HOME_RUNS = "Home Runs",
}

export type StatType = NBAStatType | MLBStatType;

// --- NBA Stat Index Mapping ---
const nbaStatIndexMap: Record<NBAStatType, number> = {
  [NBAStatType.MIN]: 0,
  [NBAStatType.FG]: 1,
  [NBAStatType.FG_PERCENTAGE]: 2,
  [NBAStatType.THREE_PT]: 3,
  [NBAStatType.THREE_PT_PERCENTAGE]: 4,
  [NBAStatType.FT]: 5,
  [NBAStatType.FT_PERCENTAGE]: 6,
  [NBAStatType.REB]: 7,
  [NBAStatType.AST]: 8,
  [NBAStatType.BLK]: 9,
  [NBAStatType.STL]: 10,
  [NBAStatType.PF]: 11,
  [NBAStatType.TO]: 12,
  [NBAStatType.PTS]: 13,
};

// --- MLB Stat Index Mapping ---
const mlbStatIndexMap: Record<MLBStatType, number> = {
  [MLBStatType.HITS_OU]: 0,
  [MLBStatType.HITS]: 2,
  [MLBStatType.HOME_RUNS]: 5,
};

type StatMapping = {
  statType: StatType;
  index: number;
};

export const mapPropToStat = (
  prop: string,
  league: string
): StatMapping | null => {
  if (league === "nba") {
    const nbaMap: Record<string, StatMapping> = {
      Pts: {
        statType: NBAStatType.PTS,
        index: nbaStatIndexMap[NBAStatType.PTS],
      },
      Reb: {
        statType: NBAStatType.REB,
        index: nbaStatIndexMap[NBAStatType.REB],
      },
      Ast: {
        statType: NBAStatType.AST,
        index: nbaStatIndexMap[NBAStatType.AST],
      },
    };
    return nbaMap[prop] || null;
  }

  if (league === "mlb") {
    const mlbMap: Record<string, StatMapping> = {
      "HITS O/U": {
        statType: MLBStatType.HITS_OU,
        index: mlbStatIndexMap[MLBStatType.HITS_OU],
      },
      "Hits": {
        statType: MLBStatType.HITS,
        index: mlbStatIndexMap[MLBStatType.HITS],
      },
      "Home Runs": {
        statType: MLBStatType.HOME_RUNS,
        index: mlbStatIndexMap[MLBStatType.HOME_RUNS],
      },
    };
    return mlbMap[prop] || null;
  }

  return null;
};
