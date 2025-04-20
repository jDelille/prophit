import axios from "axios";
import { getBaseURL } from "../../getBaseURL";
import { mapPropToStat } from "@/types";

const playerStatProjections = async (
  playerId: string,
  prop: string,
  currentPropValue: string,
  venueRole: string,
  sport: string,
  league: string
) => {
  const baseURL = getBaseURL();

  const response = await axios.get(
    `${baseURL}/api/espn/gamelog?sport=${sport}&league=${league}&playerId=${playerId}`
  );

  const gamelogs = response.data;

  console.log(gamelogs);

  const combineAndSortStats = (seasonTypes: any, statIndex: number) => {
    return seasonTypes[0].categories.flatMap(({ events }: any) =>
      events.map(({ stats }: any) => stats.at(statIndex))
    );
  };

  const combinedPPG = combineAndSortStats(
    gamelogs.seasonTypes,
    mapPropToStat(prop, league)?.index ?? 13
  );
};
