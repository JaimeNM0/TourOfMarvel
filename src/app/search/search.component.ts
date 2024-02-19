import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { Observable, debounceTime, distinctUntilChanged, map, of, switchMap } from 'rxjs';
import { CharactersService } from '../services/characters.service';
import { Character } from '../models/character.interface';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgFor, FormsModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, RouterOutlet, RouterModule, ReactiveFormsModule, AsyncPipe],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  public charactersSearch$!: Observable<Character[]>;
  public control: FormControl = new FormControl('');

  constructor(private route: ActivatedRoute, private charactersService: CharactersService) { }

  public ngOnInit(): void {
    this.getCharactersSearch();
  }

  public getCharactersSearch(): void {
    this.charactersSearch$ = this.control.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      map(value => {
        return value !== '' ? value : '-';
      }),
      switchMap(value => {
        return this.charactersService.getCharactersSearch(value)
      }),
    );
  }

  public filter(): void {
    const filterValue: string = this.input.nativeElement.value.toLowerCase();
    this.control.setValue(filterValue);
  }
}
