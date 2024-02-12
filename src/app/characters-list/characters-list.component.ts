import { Component } from '@angular/core';
import { CharactersListRegisterComponent } from '../characters-list-register/characters-list-register.component';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CharactersListRegisterComponent],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css'
})
export class CharactersListComponent {

}
