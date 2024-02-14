import { Component, OnDestroy, OnInit } from '@angular/core';
import { CharactersListRegisterComponent } from '../characters-list-register/characters-list-register.component';
import { CharactersService } from '../services/characters.service';
import { Character } from '../models/character.interface';
import { Subscription } from 'rxjs';
import { SearchComponent } from '../search/search.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CommonModule, SearchComponent, CharactersListRegisterComponent],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css',
  providers: [CharactersService],
})
export class CharactersListComponent implements OnInit, OnDestroy {
  public miniPage: string = '1';
  public page: string = '1';
  public maxPage!: string;
  public totalRecords!: string;
  public limit: number = 20;
  public characters!: Character[];
  public susbscribeCharactersService!: Subscription;
  public susbscribeTotalRecords!: Subscription;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.getTotalRecords();
    this.getCharacters();
  }

  ngOnDestroy(): void {
    this.susbscribeCharactersService.unsubscribe();
    this.susbscribeTotalRecords.unsubscribe();
  }

  public getCharacters(): void {
    this.susbscribeCharactersService = this.charactersService.getCharacters("" + ((Number(this.page) - 1) * 20))
      .subscribe(response => {
        this.characters = response;
        console.log(this.characters);
      });
  }

  public getTotalRecords(): void {
    this.susbscribeTotalRecords = this.charactersService.getTotalRecords()
      .subscribe(response => {
        this.totalRecords = response;
        this.maxPage = "" + Math.ceil(Number(this.totalRecords) / this.limit);
      });
  }

  public pagerPrinciple(): void {
    if (this.page != this.miniPage || this.page > this.miniPage) {
      this.page = this.miniPage;
      this.getCharacters();
    }
  }

  public pagerBack(): void {
    if (this.page != this.miniPage || this.page > this.miniPage) {
      this.page = "" + (Number(this.page) - 1);
      this.getCharacters();
    }
  }

  public pagerForward(): void {
    if (this.page != this.maxPage || this.page < this.maxPage) {
      this.page = "" + (Number(this.page) + 1);
      this.getCharacters();
    }
  }

  public pagerEnd(): void {
    if (this.page != this.maxPage || this.page < this.maxPage) {
      this.page = this.maxPage;
      this.getCharacters();
    }
  }
}
