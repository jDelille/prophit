import store from "@/app/mobx/store";
import { getStatIndex, mapPropToStatType, StatType } from "../stat-projections/pointProjection";
import { calculateAveragePPG } from "./calculateAveragePPG";

type Event = {
  atVs: string;
  id: string;
};

export function getHomeAwayGameIds(events: Event, seasonTypes: any, isHome: boolean, prop: string) {
  if (isHome) {
    const eventData = Object.entries(events).map(([eventId, eventData]) => {
      return eventData;
    });

    const homeGameIds = eventData.map((event: any) => {
      if (event.atVs === "vs") {
        return event.id;
      }
    });

    // console.log(seasonTypes)

    const combineAndSortStats = (seasonTypes: any, statIndex: number) => {
      return seasonTypes.categories.flatMap(({ events }: any) =>
        events
          .filter(({ eventId }: any) => homeGameIds.includes(eventId))
          .map(({ stats }: any) => stats.at(statIndex))
      );
    };

    const homePPG = combineAndSortStats(seasonTypes[0], mapPropToStatType(prop)?.index ?? 13)

    const homeAvgPPG = calculateAveragePPG(homePPG, homePPG.length);

    return parseFloat(homeAvgPPG)
    
  }
}

//401705583
