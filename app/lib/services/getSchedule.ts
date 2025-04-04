import { getBaseUrl } from "../getBaseUrl";

interface Game {
  teams: { abbrev: string }[];
  status: { detail: string };
}

export interface Schedule {
  sectionList: {
    events: {
      id: string;
    }[];
  }[];
}

export default async function getSchedule(league: string): Promise<Schedule> {
  const baseUrl = getBaseUrl();
  const res = await fetch(
    `${baseUrl}/api/fox/scoreboard?league=${league}`
  );

  if (!res.ok) return { sectionList: [{ events: [] }] };

  const data = await res.json();

  return data as Schedule;
}
