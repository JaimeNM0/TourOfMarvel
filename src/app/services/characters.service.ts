import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  public urlCharacters: string = 'http://gateway.marvel.com/v1/public/characters?ts=hola&apikey=a83030911970da5743ca666ea5c612b2&hash=2848d1d298c839d5be3c4e42d2688ad4';
  public urlOneCharacter: string = 'http://gateway.marvel.com/v1/public/characters/:id?ts=hola&apikey=a83030911970da5743ca666ea5c612b2&hash=2848d1d298c839d5be3c4e42d2688ad4';

  constructor(private http: HttpClient) { }

  public getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.urlCharacters);
  }

  public getOneCharacter(id: string): Observable<Character[]> {
    let urlOne: string = this.urlOneCharacter.replace(":id", id);
    return this.http.get<Character[]>(urlOne);
  }
}
