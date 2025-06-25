import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const sport = url.searchParams.get("sport");
    const league = url.searchParams.get("league");

    const espnURL = `https://site.api.espn.com/apis/site/v2/sports/${sport}/${league}/scoreboard`;

    const res = await fetch(espnURL, {
      method: "GET",
      cache: "default",
    });

    if (!res.ok)
      throw new Error(`Error fetching data: ${res.status} ${res.statusText}`);

    const data = await res.json();
    console.log(data.events);
    return NextResponse.json(data.events);
  } catch (error) {
    console.error("Error fetching ESPN (games) data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
