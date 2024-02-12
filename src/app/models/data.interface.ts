import { Result } from "./result.interface";

export interface Data {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Result;
}
