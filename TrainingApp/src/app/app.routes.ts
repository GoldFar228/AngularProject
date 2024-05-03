import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () =>
        import('./components/authentication/authentication.component').then(
            (m) => m.AuthenticationComponent
        ) },
    {path: 'home', loadComponent: () =>
        import('./components/home/home.component').then(
            (m) => m.HomeComponent
        )},
    {path: 'registration', loadComponent: () =>
        import('./components/authorization/authorization.component').then(
            (m) => m.AuthorizationComponent
        )},
    {path: 'trainings', loadComponent: () =>
        import('./components/trainings/trainings.component').then(
            (m) => m.TrainingsComponent
        )},
    {path: 'diets', loadComponent: () =>
        import('./components/diets/diets.component').then(
            (m) => m.DietsComponent)},
    {path: 'profile', loadComponent: () =>
        import('./components/profile/profile.component').then(
            (m) => m.ProfileComponent)},
];


