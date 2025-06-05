import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const sport = url.searchParams.get("sport");
    const league = url.searchParams.get("league");
    const prop = "avgPoints";

    const espnURL = `
https://site.web.api.espn.com/apis/common/v3/sports/${sport}/${league}/statistics/byteam?region=us&lang=en&contentorigin=espn&sort=opponent.offensive.${prop}%3Aasc&limit=30&season=2025&seasontype=2`;

    const res = await fetch(espnURL, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok)
      throw new Error(`Error fetching data: ${res.status} ${res.statusText}`);

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching ESPN (team) data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
