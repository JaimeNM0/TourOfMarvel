import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { DashboardRegisterComponent } from '../dashboard-register/dashboard-register.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SearchComponent, DashboardRegisterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
