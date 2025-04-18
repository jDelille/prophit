import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const leagueId = url.searchParams.get("leagueId") || "42648";
    const categoryId = url.searchParams.get("categoryId") || "1215";
    const subCategoryId = url.searchParams.get("subCategoryId") || "12488";

    const draftkingsURL = `${process.env.DRAFTKINGS_BASE_URL}/leagues/${leagueId}/categories/${categoryId}/subcategories/${subCategoryId}`;

    const res = await fetch(draftkingsURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        "Cache-Control": "no-cache",
      },
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`Error fetching data: ${res.status} ${res.statusText}`);

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching DraftKings data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}