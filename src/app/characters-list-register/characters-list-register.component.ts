import { Component, Input } from '@angular/core';
import { Character } from '../models/character.interface';

@Component({
  selector: 'app-characters-list-register',
  standalone: true,
  imports: [],
  templateUrl: './characters-list-register.component.html',
  styleUrl: './characters-list-register.component.css'
})
export class CharactersListRegisterComponent {
  @Input() register!: Character;

}
