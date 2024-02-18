import { Content, ContentWithItem } from "./content.interface";
import { Thumbnail } from "./thumbnail.interface";

export interface CharacterDetails {
    id: number;
    name: string;
    description: string,
    thumbnail: Thumbnail;
    comics: Content;
    series: ContentWithItem;
    stories: Content;
    events: ContentWithItem;
}
