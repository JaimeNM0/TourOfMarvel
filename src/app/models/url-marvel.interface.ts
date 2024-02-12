import { Data } from "./data.interface";

export interface UrlMarvel {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: Data;
}
