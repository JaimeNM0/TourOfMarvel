import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { DashboardRegisterComponent } from '../dashboard-register/dashboard-register.component';
import { CharactersService } from '../services/characters.service';
import { Character } from '../models/character.interface';
import { CommonModule } from '@angular/common';
import { Observable, Subscribable, Subscription, map } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchComponent, DashboardRegisterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [CharactersService],
})
export class DashboardComponent implements OnInit, OnDestroy {
  public characters!: Character[];
  public susbscribeCharactersService!: Subscription;

  constructor(private charactersService: CharactersService) { }

  public ngOnInit(): void {
    this.getCharacters();
  }

  public ngOnDestroy(): void {
    this.susbscribeCharactersService.unsubscribe();
  }

  public getCharacters(): void {
    const numRandom: string = "" + (Math.floor(Math.random() * 1564) + 1);
    this.susbscribeCharactersService = this.charactersService.getCharacters(numRandom)
      .subscribe(response => {
        this.characters = response;
      });
  }
}
