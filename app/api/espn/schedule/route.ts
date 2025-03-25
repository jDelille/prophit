import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const league = url.searchParams.get("league");

    if (!league) {
        return NextResponse.json({ error: "League is required" }, { status: 400 });
      }

    const espnURL = `https://www.espn.com/${league}/schedule/_/date/20250322?_xhr=pageContent&refetchShell=false&offset=-07%3A00&original=date%3D20250322&date=20250322`;
    const res = await fetch(espnURL, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok)
      throw new Error(`Error fetching data: ${res.status} ${res.statusText}`);

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching ESPN (schedule) data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
