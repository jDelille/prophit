export type Teams = {
  team: {
    abbreviation: string;
    alternateColor: string;
    color: string;
    displayName: string;
    id: string;
    isActive: boolean;
    location: string;
    name: string;
    nickname: string;
    shortDisplayName: string;
    slug: string;
    logos: {
        href: string;
    }[]
  }
};

export type Team = {
    abbreviation: string;
    alternateColor: string;
    color: string;
    displayName: string;
    id: string;
    isActive: boolean;
    location: string;
    name: string;
    nickname: string;
    shortDisplayName: string;
    slug: string;
    logos: {
        href: string;
    }[]
}