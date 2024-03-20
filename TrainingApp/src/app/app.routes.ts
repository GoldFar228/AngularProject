import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { DietsComponent } from './components/diets/diets.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
    {path: '', component: AuthenticationComponent },
    {path: 'home', component: HomeComponent},
    {path: 'registration', component: AuthorizationComponent},
    {path: 'trainings', component: TrainingsComponent},
    {path: 'diets', component: DietsComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'calculator', component: CalculatorComponent}
];


