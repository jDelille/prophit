export default async function getNews(
    sport: string,
    league: string
) {
    const res = await fetch(`/api/espn/news?sport=${sport}&league=${league}`);

    if (!res.ok) return [];

    const data = await res.json();

    return data;
}