import { StoriesItem } from "./stories-item.interface";

export interface Stories {
    available: number;
    collectionURI: string;
    items: StoriesItem[];
    returned: number;
}
