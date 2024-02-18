import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location, NgIf, UpperCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../services/characters.service';
import { Subscription } from 'rxjs';
import { CharacterDetails } from '../models/character-details.interface';

@Component({
  selector: 'app-characters-details',
  standalone: true,
  imports: [NgIf, UpperCasePipe],
  templateUrl: './characters-details.component.html',
  styleUrl: './characters-details.component.css',
  providers: [CharactersService],
})
export class CharactersDetailsComponent implements OnInit, OnDestroy {
  public susbscribeCharacterOne!: Subscription;
  public character!: CharacterDetails[];
  public imagen!: string;

  constructor(private route: ActivatedRoute, private charactersService: CharactersService, private location: Location) { }

  public ngOnInit(): void {
    this.getCharacters();
  }

  public ngOnDestroy(): void {
    this.susbscribeCharacterOne.unsubscribe();
  }

  public getCharacters(): void {
    const id = '' + Number(this.route.snapshot.paramMap.get('id'));
    this.susbscribeCharacterOne = this.charactersService.getOneCharacter(id)
      .subscribe(response => {
        this.character = response;
        this.imagen = this.character[0].thumbnail.path + '.' + this.character[0].thumbnail.extension;
      });
  }

  public goBack(): void {
    this.location.back();
  }
}
