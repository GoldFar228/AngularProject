import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: AuthenticationComponent},
    {path: 'registration', component: AuthorizationComponent}
];


