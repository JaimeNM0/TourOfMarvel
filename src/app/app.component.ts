import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Character } from './models/character.interface';
import { CharactersService } from './services/characters.service';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [CharactersService]
})
export class AppComponent {
  public title = 'tourOfMarvel';
  /*public characters: Character[] = [];

  constructor(private heroService: CharactersService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getCharacters()
      .subscribe(characters => this.characters = characters);
    console.log(this.characters);
  }*/
}
