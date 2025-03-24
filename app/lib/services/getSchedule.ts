export type Schedule = {
  events: {
    status: {
      detail: string;
    };
    teams: [abbrev: string, isHome: boolean];
  }[];
};

export default async function getSchedule(league: string): Promise<Schedule[]> {
  const res = await fetch(
    `https://www.espn.com/${league}/schedule/_/date/20250322?_xhr=pageContent&refetchShell=false&offset=-07%3A00&original=date%3D20250322&date=20250322`,
    { cache: "no-store" }
  );

  if (!res.ok) return [];

  const data = await res.json();

  return data;
}
