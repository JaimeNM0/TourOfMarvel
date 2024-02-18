import { Component, OnDestroy, OnInit } from '@angular/core';
import { CharactersListRegisterComponent } from '../characters-list-register/characters-list-register.component';
import { CharactersService } from '../services/characters.service';
import { Character } from '../models/character.interface';
import { Observable, Subscription, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { SearchComponent } from '../search/search.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AsyncPipe, RouterModule, SearchComponent, CharactersListRegisterComponent],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css',
  providers: [CharactersService],
})
export class CharactersListComponent implements OnInit, OnDestroy {
  public miniPage: string = '1';
  public maxPage!: string;
  public totalRecords!: string;
  public limit: number = 20;
  public characters!: Character[];
  public charactersObservable$!: Observable<Character[]>;
  public susbscribeCharactersService!: Subscription;
  public susbscribeTotalRecords!: Subscription;

  public control: FormControl = new FormControl();

  constructor(private charactersService: CharactersService) { }

  public ngOnInit(): void {
    this.control.disable();
    setTimeout(() => {
      this.control.setValue(1);
    }, 100);
    this.getTotalRecords();
    this.getCharacters();
  }

  public ngOnDestroy(): void {
    this.susbscribeTotalRecords.unsubscribe();
  }

  public getCharacters(): void {
    this.charactersObservable$ = this.control.valueChanges.pipe(
      debounceTime(700),
      distinctUntilChanged(),
      switchMap(value => {
        return this.charactersService.getCharacters('' + ((Number(value) - 1) * 20))
      }),
    );
  }

  public getTotalRecords(): void {
    this.susbscribeTotalRecords = this.charactersService.getTotalRecords()
      .subscribe(response => {
        this.totalRecords = response;
        this.maxPage = '' + Math.ceil(Number(this.totalRecords) / this.limit);
      });
  }

  public pagerPrinciple(): void {
    if (this.control.value != this.miniPage || this.control.value > this.miniPage) {
      this.control.setValue('' + this.miniPage);
    }
  }

  public pagerBack(): void {
    if (this.control.value != this.miniPage || this.control.value > this.miniPage) {
      this.control.setValue('' + (Number(this.control.value) - 1));
    }
  }

  public pagerForward(): void {
    if (this.control.value != this.maxPage || this.control.value < this.maxPage) {
      this.control.setValue('' + (Number(this.control.value) + 1));
    }
  }

  public pagerEnd(): void {
    if (this.control.value != this.maxPage || this.control.value < this.maxPage) {
      this.control.setValue('' + this.maxPage);
    }
  }
}
