import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const league = url.searchParams.get("league");
    const eventId = url.searchParams.get("eventId");

    const foxURL = `https://api.foxsports.com/bifrost/v1/${league}/event/${eventId}/odds?api-version=1.1&apikey=${process.env.FOX_API_KEY}`;

    const res = await fetch(foxURL, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`Error fetching data: ${res.status} ${res.statusText}`);

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching Fox (matchup) data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}