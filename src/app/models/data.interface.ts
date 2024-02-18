import { CharacterDetails } from "./character-details.interface";
import { Character } from "./character.interface";

export interface Data {
    total: string;
    results: Character[];
}

export interface DataDetails {
    results: CharacterDetails[];
}
