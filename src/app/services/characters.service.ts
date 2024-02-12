import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from '../models/character.interface';
import { HttpClient } from '@angular/common/http';
import { UrlMarvel } from '../models/url-marvel.interface';
import { HEROES } from '../models/mock-heroes-borrar';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  public urlCharacters: string = 'http://gateway.marvel.com/v1/public/characters?ts=hola&apikey=a83030911970da5743ca666ea5c612b2&hash=2848d1d298c839d5be3c4e42d2688ad4';
  public urlOneCharacter: string = 'http://gateway.marvel.com/v1/public/characters/:id?ts=hola&apikey=a83030911970da5743ca666ea5c612b2&hash=2848d1d298c839d5be3c4e42d2688ad4';
  characters!: UrlMarvel;

  constructor(private http: HttpClient) { }

  public getCharacters(): Observable<Character[]> {
    console.log("HOLA");
    let observableMarvel: Observable<UrlMarvel> = this.http.get<UrlMarvel>(this.urlCharacters);
    observableMarvel.subscribe((characters) => {
      this.characters = characters;
      console.log(this.characters);
    }
    );
    /*let observableMarvel: Observable<UrlMarvel[]> = this.http.get<UrlMarvel[]>(this.urlCharacters);
    console.log(observableMarvel);*/
    //return this.http.get<Character[]>(this.urlCharacters);
    const heroes = of(HEROES);
    return heroes;
  }

  /*public getOneCharacter(id: string): Observable<Character[]> {
    let urlOne: string = this.urlOneCharacter.replace(":id", id);
    return this.http.get<Character[]>(urlOne);
  }*/
}
