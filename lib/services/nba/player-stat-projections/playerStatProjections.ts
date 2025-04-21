import axios from "axios";
import { getBaseURL } from "../../getBaseURL";
import { mapPropToStat } from "@/types";
import { calculateAveragePPG } from "@/lib/utils/nba/calculateAveragePPG";

const playerStatProjections = async (
  playerId: string,
  prop: string,
  currentPropValue: number,
  venueRole: string,
  sport: string,
  league: string
) => {
  const baseURL = getBaseURL();

  const response = await axios.get(
    `${baseURL}/api/espn/gamelog?sport=${sport}&league=${league}&playerId=${playerId}`
  );

  const gamelogs = response.data;

  const combineAndSortStats = (seasonTypes: any, statIndex: number) => {
    return seasonTypes[1].categories.flatMap(({ events }: any) =>
      events.map(({ stats }: any) => stats.at(statIndex))
    );
  };

  const combinedPPG = combineAndSortStats(
    gamelogs.seasonTypes,
    mapPropToStat(prop, league)?.index ?? 13
  );

  const latest3Avg = calculateAveragePPG(combinedPPG, 3);
  const latest5Avg = calculateAveragePPG(combinedPPG, 5);
  const latest10Avg = calculateAveragePPG(combinedPPG, 10);

  return {
    values: {
      latest3Avg,
      latest5Avg,
      latest10Avg
    }
  } 
} 


export default playerStatProjections;