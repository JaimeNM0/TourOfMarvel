import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { DashboardRegisterComponent } from '../dashboard-register/dashboard-register.component';
import { CharactersService } from '../services/characters.service';
import { Character } from '../models/character.interface';
import { CommonModule } from '@angular/common';
import { Result } from '../models/result.interface';
import { Observable, Subscribable, Subscription, map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SearchComponent, DashboardRegisterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [CharactersService],
})
export class DashboardComponent implements OnInit, OnDestroy {
  public characters!: Character[];
  public susbscribeCharactersService!: Subscription;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  ngOnDestroy(): void {
    this.susbscribeCharactersService.unsubscribe();
  }

  getCharacters(): void {
    const numRandom: string = "" + (Math.floor(Math.random() * 1564) + 1);
    this.susbscribeCharactersService = this.charactersService.getCharacters(numRandom)
      .subscribe(response => {
        this.characters = response;
        console.log(this.characters);
      });
  }
}
