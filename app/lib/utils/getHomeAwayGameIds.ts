import store from "@/app/mobx/store";
import {
  getStatIndex,
  mapPropToStatType,
  StatType,
} from "../stat-projections/pointProjection";
import { calculateAveragePPG } from "./calculateAveragePPG";

type Event = {
  atVs: string;
  id: string;
};

export function getHomeAwayGameIds(
  events: Event,
  seasonTypes: any,
  isHome: boolean,
  prop: string
) {
  const eventData = Object.entries(events).map(([eventId, eventData]) => {
    return eventData;
  });

  const getGameIds = eventData
  .filter((event: any) => isHome ? event.atVs === "vs" : event.atVs === "@")
  .map((event: any) => event.id);
    
  const combineAndSortStats = (seasonTypes: any, statIndex: number) => {
    return seasonTypes.categories.flatMap(({ events }: any) =>
      events
        .filter(({ eventId }: any) => getGameIds.includes(eventId))
        .map(({ stats }: any) => stats.at(statIndex))
    );
  };

  const stats = combineAndSortStats(
    seasonTypes[0],
    mapPropToStatType(prop)?.index ?? 13
  );

  const homeAvgPPG = calculateAveragePPG(stats, stats.length);

  return parseFloat(homeAvgPPG);
}

//401705583
