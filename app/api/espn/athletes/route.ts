import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const sport = url.searchParams.get("sport");
    const league = url.searchParams.get("league");

    const espnURL = `https://site.web.api.espn.com/apis/common/v3/sports/${sport}/${league}/statistics/byathlete?region=us&lang=en&contentorigin=espn&isqualified=true&page=1&limit=25`;

    const res = await fetch(espnURL, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`Error fetching data: ${res.status} ${res.statusText}`);

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching ESPN (atheletes) data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
