import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { DietsComponent } from './components/diets/diets.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/authGuard.guard';

export const routes: Routes = [
    {path: '', component: AuthenticationComponent },
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'registration', component: AuthorizationComponent},
    {path: 'trainings', component: TrainingsComponent, canActivate: [AuthGuard]},
    {path: 'diets', component: DietsComponent, canActivate: [AuthGuard]},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
];
