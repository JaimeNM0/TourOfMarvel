import { ContentItem } from "./content-item.interface";

export interface Content {
    available: number;
}

export interface ContentWithItem {
    available: number;
    items: ContentItem[];
}