import { mapPropToStat } from "@/types";

export const extractCombinedStats = (
    seasonTypes: any[],
    prop: string,
    league: string,
    includedSeasons: ("postseason" | "regular")[]
  ): number[] => {
    const statIndex = mapPropToStat(prop, league)?.index ?? 13;
  
    const targetSeasons = seasonTypes.filter((s) =>
      includedSeasons.some((seasonType) =>
        seasonType === "postseason"
          ? s.displayName.toLowerCase().includes("postseason")
          : s.displayName.toLowerCase().includes("regular")
      )
    );
  
    return targetSeasons.flatMap((season) => {
      const eventCategory = season.categories?.find((c: any) => c.type === "event");
      if (!eventCategory) return [];
      return eventCategory.events.map(({ stats }: any) => stats.at(statIndex));
    });
  };

  export const extractSeasonAverage = (
    seasonTypes: any[],
    prop: string,
    league: string,
    seasonType: "postseason" | "regular"
  ) => {
    const statIndex = mapPropToStat(prop, league)?.index ?? 0;
  
    const targetSeason = seasonTypes.find((s) =>
      seasonType === "postseason"
        ? s.displayName.toLowerCase().includes("postseason")
        : s.displayName.toLowerCase().includes("regular")
    );
  
    if (
      !targetSeason ||
      !targetSeason.categories?.[1] ||
      !Array.isArray(targetSeason.categories[1].totals)
    )
      return 0;
  
    return parseFloat(targetSeason.categories[1].totals.at(statIndex));
  };