import { mapPropToStat } from "@/types";
import { calculateAveragePPG } from "../utils/nba/calculateAveragePPG";
import { calculateHitRatePercentage } from "../utils/calculateHitRatePercentage";

type Event = {
  atVs: string;
  id: string;
};

export function getHomeAwayGameIds(
  events: Event,
  seasonTypes: any,
  isHome: boolean,
  prop: string,
  league: string
) {
  const eventData = Object.entries(events).map(([eventId, eventData]) => {
    return eventData;
  });

  const getGameIds = eventData
    .filter((event: any) => (isHome ? event.atVs === "vs" : event.atVs === "@"))
    .map((event: any) => event.id);

  const combineAndSortStats = (seasonType: any, statIndex: number) => {
    const categories = seasonType?.categories;
    if (!categories || !Array.isArray(categories)) {
      console.warn("seasonType has no valid categories:", seasonType);
      return [];
    }

    return categories.flatMap(({ events }: any) =>
      events
        .filter(({ eventId }: any) => getGameIds.includes(eventId))
        .map(({ stats }: any) => stats.at(statIndex))
    );
  };

  const regularSeason = seasonTypes.find(
    (season: { displayName: string }) =>
      season.displayName === "2025 Regular Season"
  );

  const stats = combineAndSortStats(
    regularSeason,
    mapPropToStat(prop, league)?.index ?? 13
  );

  const homeAvgPPG = calculateAveragePPG(stats, stats.length);

  return parseFloat(homeAvgPPG);
}

export function getHomeAwayHitPercentage(
  events: Event,
  seasonTypes: any,
  isHome: boolean,
  prop: string,
  currentPropValue: number,
  league: string
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
    mapPropToStat(prop, league)?.index ?? 13
  );

  const venueHitRatePercentage = calculateHitRatePercentage(
    stats,
    currentPropValue,
    stats.length
  );

  return parseFloat(venueHitRatePercentage);
}
