import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../models/character.interface';
import { Thumbnail } from '../models/thumbnail.interface';

@Component({
  selector: 'app-dashboard-register',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-register.component.html',
  styleUrl: './dashboard-register.component.css'
})
export class DashboardRegisterComponent implements OnInit {
  @Input() register!: Character;
  public imagen!: string;

  ngOnInit(): void {
    this.imagen = this.register.thumbnail.path + '.' + this.register.thumbnail.extension;
  }
}
