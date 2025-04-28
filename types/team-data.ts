export type TeamData = {
    team: {
        abbreviation: string;
        alternateColor: string;
        color: string;
        displayName: string;
        id: string;
        location: string;
        logos: {
            href: string;
        }[];
        name: string;
        record: {
            items: {    
                description: string;
                type: string;
                summary: string;
                stats: {
                    name: string;
                    value: string;
                }[];
            }[];
        };
        shortDisplayName: string;
        slug: string;
        standingSummary: string;
        uid: string;
        nextEvent: {
            shortName: string;
        }[]
    }
  
}