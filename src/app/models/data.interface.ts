import { Character } from "./character.interface";
import { Result } from "./result.interface";

export interface Data {
    offset: number;
    limit: number;
    total: string;
    count: number;
    results: Character[];
}
