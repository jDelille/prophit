import { NextResponse } from "next/server";

type CacheEntry = {
  timestamp: number;
  data: unknown; 
};

const gamelogCache: Record<string, CacheEntry> = {};
const TTL = 1000 * 60; // 1 minute

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const sport = url.searchParams.get("sport");
    const league = url.searchParams.get("league");
    const playerId = url.searchParams.get("playerId");

    if (!sport || !league || !playerId) {
      return NextResponse.json(
        { error: "Missing required query parameters: sport, league, playerId" },
        { status: 400 }
      );
    }

    const cacheKey = `${sport}-${league}-${playerId}`;
    const now = Date.now();

    const cached = gamelogCache[cacheKey];
    if (cached && now - cached.timestamp < TTL) {
      return NextResponse.json(cached.data);
    }

    const espnURL = `https://site.web.api.espn.com/apis/common/v3/sports/${sport}/${league}/athletes/${playerId}/gamelog`;

    const res = await fetch(espnURL, {
      method: "GET",
      cache: "no-store", // Don't cache at fetch level
    });

    if (!res.ok) {
      console.error(`ESPN API Error: ${res.status} ${res.statusText}`);
      return NextResponse.json({ error: "Failed to fetch ESPN gamelog" }, { status: res.status });
    }

    const data = await res.json();
    gamelogCache[cacheKey] = { timestamp: now, data };

    return NextResponse.json(data);
  } catch (error) {
    console.error("Unexpected error in /api/gamelog:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
