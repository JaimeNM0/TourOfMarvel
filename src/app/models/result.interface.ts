import { Historieta } from "./historieta.interface";
import { Stories } from "./stories.interface";
import { Thumbnail } from "./thumbnail.interface";

export interface Result {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: Thumbnail;
    resourceURI: string;
    comics: Historieta;
    series: Historieta;
    stories: Stories;
    events: Historieta;
    urls: URL[];
}
