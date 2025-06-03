import { NextResponse } from "next/server";

let cache: any = null;
let lastFetched = 0;
const TTL = 60 * 1000; 

export async function GET(request: Request) {
  try {
    const now = Date.now();
    const url = new URL(request.url);
    const sport = url.searchParams.get("sport");
    const league = url.searchParams.get("league");

    if (cache && now - lastFetched < TTL) {
      return NextResponse.json(cache);
    }

    const espnURL = `https://site.web.api.espn.com/apis/common/v3/sports/${sport}/${league}/statistics/byathlete?region=us&lang=en&contentorigin=espn&isqualified=true&page=1&limit=25`;

    const res = await fetch(espnURL, { cache: "no-store" });
    if (!res.ok) throw new Error(`Error fetching ESPN: ${res.status}`);

    const data = await res.json();
    cache = data;
    lastFetched = now;

    return NextResponse.json(data);
  } catch (error) {
    console.error("ESPN API error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
