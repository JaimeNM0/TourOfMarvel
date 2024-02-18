import { Injectable } from '@angular/core';
import { Observable, map, of, switchMap } from 'rxjs';
import { Character } from '../models/character.interface';
import { HttpClient } from '@angular/common/http';
import { UrlMarvel, UrlMarvelDetails } from '../models/url-marvel.interface';
import { CharacterDetails } from '../models/character-details.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  public urlCharacters: string = 'http://gateway.marvel.com/v1/public/characters?ts=hola&apikey=a83030911970da5743ca666ea5c612b2&hash=2848d1d298c839d5be3c4e42d2688ad4';
  public urlCharactersOffset: string = 'http://gateway.marvel.com/v1/public/characters?offset=:num&ts=hola&apikey=a83030911970da5743ca666ea5c612b2&hash=2848d1d298c839d5be3c4e42d2688ad4';
  public urlOneCharacter: string = 'http://gateway.marvel.com/v1/public/characters/:id?ts=hola&apikey=a83030911970da5743ca666ea5c612b2&hash=2848d1d298c839d5be3c4e42d2688ad4';
  public characters!: UrlMarvel;

  constructor(private http: HttpClient) { }

  public getCharacters(num: string): Observable<Character[]> {
    return this.http.get<UrlMarvel>(this.urlCharactersOffset.replace(':num', num)).pipe(
      map((response) => response.data.results)
    );

    let observableMarvel: Observable<UrlMarvel> = this.http.get<UrlMarvel>(this.urlCharacters);

    observableMarvel.subscribe((characters) => {
      this.characters = characters;
      console.log(this.characters);
    }
    );
  }

  public getOneCharacter(id: string): Observable<CharacterDetails[]> {
    return this.http.get<UrlMarvelDetails>(this.urlOneCharacter.replace(":id", id)).pipe(
      map((response) => response.data.results)
    );
  }

  public getTotalRecords(): Observable<string> {
    return this.http.get<UrlMarvel>(this.urlCharacters).pipe(
      map((response) => response.data.total)
    );
  }
}
