import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const sport = url.searchParams.get("sport");
    const league = url.searchParams.get("league");
    const playerId = url.searchParams.get("playerId");

    const espnURL = `https://site.api.espn.com/apis/site/v2/sports/${sport}/${league}/news`;

    const res = await fetch(espnURL, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    const articles = data.articles || [];

    const ids = articles.map((article: { id: string }) => article.id);

    const detailsPromises = ids.map(async (idStr: string) => {
      const detailRes = await fetch(
        `https://content.core.api.espn.com/v1/sports/news/${idStr}`,
        {
          method: "GET",
          cache: "no-store",
        }
      );

      if (!detailRes.ok) {
        console.warn(
          `Failed to fetch details for article ID ${idStr}: ${detailRes.statusText}`
        );
        return null;
      }

      const detailData = await detailRes.json();

      return detailData;
    });

    const details = await Promise.all(detailsPromises);

    console.log(details);

    const combinedArticles = articles.map((article: any) => {
      const detailObj = details.find((d) =>
        d?.headlines?.some(
          (headline: { id: string | number }) =>
            headline.id.toString() === article.id.toString()
        )
      );

      const headlineDetail = detailObj?.headlines.find(
        (headline: { id: string | number }) =>
          headline.id.toString() === article.id.toString()
      );

      return {
        ...article,
        detail: headlineDetail || null,
      };
    });

    return NextResponse.json({ articles: combinedArticles });
  } catch (error) {
    console.error("Error fetching ESPN (news) data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
