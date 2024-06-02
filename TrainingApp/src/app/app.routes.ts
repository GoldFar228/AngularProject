import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { DietsComponent } from './components/diets/diets.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/authGuard.guard';

import { AuthGuard } from './guards/authGuard.guard';

export const routes: Routes = [
    {path: '', loadComponent: () =>
        import('./components/authentication/authentication.component').then(
            (m) => m.AuthenticationComponent)},

    {path: 'home', loadComponent: () =>
        import('./components/home/home.component').then(
            (m) => m.HomeComponent), canActivate: [AuthGuard]},

    {path: 'registration', loadComponent: () =>
        import('./components/authorization/authorization.component').then(
            (m) => m.AuthorizationComponent)},

    {path: 'trainings', loadComponent: () =>
        import('./components/trainings/trainings.component').then(
            (m) => m.TrainingsComponent), canActivate: [AuthGuard]},

    {path: 'diets', loadComponent: () =>
        import('./components/diets/diets.component').then(
            (m) => m.DietsComponent), canActivate: [AuthGuard]},
    {path: 'profile', loadComponent: () =>
        import('./components/profile/profile.component').then(
            (m) => m.ProfileComponent), canActivate: [AuthGuard]},
            
    {path: 'detail/:id', loadComponent: () =>
        import('./components/trainings/training-detail/training-detail.component').then(
            (m) => m.TrainingDetailComponent), canActivate: [AuthGuard]},
      ]
