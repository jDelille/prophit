export type NewsTypes = {
        categories: {
            athlete: {
                id: number;
                description: string;
            }
            athleteId: number;
            description: string;
            id: number;
            sportId: number;
            type: string;
            league: {
                abbreviation: string;
                description: string;
                id: number
            }
            leagueId: number;
        }[]
        description: string;
        headline: string;
        id: number;
        images: {
            alt: string;
            caption: string;
            height: number;
            name: string;
            url: string;
        }[]
        premium: boolean;
        published: string;
        type: string;
        detail: {
            story: string
        }
    }[];