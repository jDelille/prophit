import { Selection } from "@/types";
import { getDraftkingsData } from "../services/getDraftkingsData";

export async function getPropDraftKingsData(
  prop: string,
  sport: string
): Promise<Record<string, Selection[]>> {
  switch (sport) {
    case "basketball":
      switch (prop) {
        case "Reb":
          return await getDraftkingsData("42648", "1216", "12492");
        case "Pts":
          return await getDraftkingsData("42648", "1215", "12488");
        case "Ast":
          return await getDraftkingsData("42648", "1217", "12495");
        default:
          return await getDraftkingsData("42648", "1215", "12488");
      }

    case "baseball":
      switch (prop) {
        case "HR":
          return await getDraftkingsData("84240", "743", "6719");
        case "Hits O/U":
          return await getDraftkingsData("84240", "743", "6719");
        case "Total Bases":
          return await getDraftkingsData("84240", "743", "17322");
        default:
          return await getDraftkingsData("84240", "743", "6719");
      }

    default:
      return {};
  }
}