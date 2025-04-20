export type SearchResults = {
    name: string;
    uid: string;
    headshot: string;
    type: string;
    subtitle: string;
    description: string;
  }
  
  
  export default async function getPlayerUid(searchTerm: string): Promise<SearchResults[] | null> {
      if (!searchTerm) return null;
    
      const apiUrl = `https://site.api.espn.com/apis/search/v2?region=us&lang=en&limit=10&page=1&query=${encodeURIComponent(
        searchTerm
      )}&type=promoted%2Ccontributor%2Cteam%2Cplayer%2Cleague&site=espn.com`;
    
      const res = await fetch(apiUrl);
    
      if (!res.ok) return null;
    
      const data = await res.json();
      const results = data?.results?.[0]?.contents?.map((content: any) => ({
        name: content?.displayName || content?.title,
        uid: content?.uid?.split("~a:")[1] || "", 
        headshot: content?.image?.default,
        type: content?.type,
        subtitle: content?.subtitle,
        description: content?.description
      }));
    
      return results || null; 
    }