import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { ErrorScreenComponent } from './error-screen/error-screen.component';
import { CharactersDetailsComponent } from './characters-details/characters-details.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'characters', component: CharactersListComponent },
    { path: 'characters/:id', component: CharactersDetailsComponent },
    { path: 'dashboard', component: DashboardComponent },


    { path: '**', component: ErrorScreenComponent } //Está es la pantalla de error.
];
