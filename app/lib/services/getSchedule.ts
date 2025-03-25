interface Game {
  teams: { abbrev: string }[];
  status: { detail: string };
}

export interface Schedule {
  events: { [date: string]: Game[] };
}

export default async function getSchedule(league: string): Promise<Schedule> {
  const res = await fetch(`http://localhost:3000/api/espn/schedule?league=${league}`);

  if (!res.ok) return { events: {} };

  const data = await res.json();

  return data as Schedule;
}
