import { NextResponse } from "next/server";
import moment from 'moment';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const league = url.searchParams.get("league");
    const date = moment().format('YYYYMMDD');

    const foxURL = `https://api.foxsports.com/bifrost/v1/${league}/scoreboard/segment/${date}?apikey=${process.env.FOX_API_KEY}`;

    const res = await fetch(foxURL, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`Error fetching data: ${res.status} ${res.statusText}`);

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching Fox (scoreboard) data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}