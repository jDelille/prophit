import { Selection } from "@/types";

export async function getDraftkingsData(
    leagueId: string,
    categoryId: string,
    subCategoryId: string
  ): Promise<Record<string, Selection[]>> {
    const res = await fetch(
      `/api/draftkings?leagueId=${leagueId}&categoryId=${categoryId}&subCategoryId=${subCategoryId}`
    );
  
    if (!res.ok) return {};
  
    const data = await res.json();
  
    const groupedSelections: Record<string, Selection[]> = {};
  
    data.selections.forEach((selection: any) => {
      selection.participants.forEach((participant: any) => {
        const playerName = participant.name;
  
        if (!groupedSelections[playerName]) {
          groupedSelections[playerName] = [];
        }
  
        groupedSelections[playerName].push({
          id: selection.id,
          label: selection.label,
          points: selection.points,
          odds: selection.displayOdds.american,
          decimalOdds: selection.displayOdds.decimal,
          marketId: selection.marketId,
          venueRole: participant.venueRole,
          statistic: {
            prefix: participant.statistic?.prefix,
            value: participant.statistic?.value,
          },
        });
      });
    });
  
    return groupedSelections;
  }
  