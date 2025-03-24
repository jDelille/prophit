import { Selection } from "@/app/lib/services/getDraftkingsData";

export type PlayerStats = {
  points: {
    latest3Avg: string;
    latest5Avg: string;
    latest10Avg: string;
    projectedPoints: number;
    latest3Percentage: number;
    latest5Percentage: number;
    latest10Percentage: number;
  };
};

export default class PlayerCardLogic {
  private player: { selections: Selection[] };
  private playerStats: PlayerStats;

  constructor(player: { selections: Selection[] }, playerStats: PlayerStats) {
    this.player = player;
    this.playerStats = playerStats;
  }

  handleBetType(betType: string): string {
    switch (betType) {
      case "Total Points": return "Pts";
      case "Total Assists": return "Ast";
      case "Total Rebounds": return "Reb";
      case "Total Points & Rebounds": return "Pts + Reb";
      case "Total Points & Assists": return "Pts + Ast";
      case "Total Points, Rebounds, & Assists": return "Pts + Reb + Ast";
      default: return "NULL";
    }
  }

  formatDifference(value: number): { formattedValue: string; className: string } {
    if (value > 0) return { formattedValue: `+${value.toFixed(1)}`, className: "positive" };
    if (value < 0) return { formattedValue: `${value.toFixed(1)}`, className: "negative" };
    return { formattedValue: `${value.toFixed(1)}`, className: "neutral" };
  }

  isOverOrUnder(prop: number, projection: number): string {
    return projection >= prop ? "Over" : "Under";
  }

  getPercentageClass(percentage: number): string {
    if (percentage > 70) return "above-70";
    if (percentage >= 60) return "mid-range";
    return "below-50";
  }

  getProjectedDifference(): { formattedValue: string; className: string } {
    const projectedPoints = this.playerStats.points.projectedPoints;
    const propValue = parseFloat(this.player.selections[0]?.points?.toString() ?? "0");
    return this.formatDifference(projectedPoints - propValue);
  }
}
