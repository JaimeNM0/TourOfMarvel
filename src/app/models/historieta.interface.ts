import { HistorietaItem } from "./historieta-item.interface";

export interface Historieta {
    available: number;
    collectionURI: string;
    items: HistorietaItem[];
    returned: number;
}
