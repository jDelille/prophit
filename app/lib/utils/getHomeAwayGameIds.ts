import { mapPropToStatType } from "../stat-projections/pointProjection";
import { calculateAveragePPG } from "./calculateAveragePPG";
import { calculateHitRatePercentage } from "./calculateHitRatePercentage";

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
    .filter((event: any) => (isHome ? event.atVs === "vs" : event.atVs === "@"))
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

export function getHomeAwayHitPercentage(
  events: Event,
  seasonTypes: any,
  isHome: boolean,
  prop: string,
  currentPropValue: number
) {
  const eventData = Object.entries(events).map(([eventId, eventData]) => {
    return eventData;
  });

  const getGameIds = eventData
    .filter((event: any) => (isHome ? event.atVs === "vs" : event.atVs === "@"))
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

  const venueHitRatePercentage = calculateHitRatePercentage(
    stats,
    currentPropValue,
    stats.length
  );

  return parseFloat(venueHitRatePercentage);
}
