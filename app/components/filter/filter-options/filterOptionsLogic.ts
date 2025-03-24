import { Schedule } from "@/app/lib/services/getSchedule";

export interface FilterOptionsProps {
  query: string;
  todaysGames: Schedule;
}

export default class FilterOptionsLogic {
  private props: FilterOptionsProps;

  constructor(props: FilterOptionsProps) {
    this.props = props;
  }

  getTodaysDate(): string | null {
    const { todaysGames } = this.props;
    const dates = Object.keys(todaysGames.events);
    return dates.length > 0 ? dates[0] : null;
  }

  getMatchupOptions() {
    const { todaysGames } = this.props;
    const todaysDate = this.getTodaysDate();

    if (!todaysDate) {
      return [];
    }

    const games = todaysGames.events[todaysDate];
    return games.map((game) => {
      const teamAbbreviations = game.teams.map((team) => team.abbrev);
      return {
        label: `${teamAbbreviations[1]} @ ${teamAbbreviations[0]}`,
        value: `${teamAbbreviations[1]}-${teamAbbreviations[0]}`,
      };
    });
  }

  getPositionsOptions() {
    return [
      { label: "C", value: "Center" },
      { label: "PG", value: "Point Guard" },
      { label: "SF", value: "Small Forward" },
      { label: "SG", value: "Shooting Guard" },
      { label: "PF", value: "Power Forward" },
    ];
  }

  getBetRatingOptions() {
    return [
      { label: "5 stars", value: "5 stars" },
      { label: "4 stars", value: "4 stars" },
      { label: "3 stars", value: "3 stars" },
      { label: "2 stars", value: "2 stars" },
      { label: "1 star", value: "1 star" },
    ];
  }
}
