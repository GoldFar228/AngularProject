import { Component, OnInit, inject } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/auth.service';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from './models/user.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, RouterLinkWithHref],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'TrainingApp';

  authService = inject(AuthService);
  http = inject(HttpClient)

  ngOnInit():void {
   this.authService.auth();
  }

  login(): void{
    this.authService.login();
  } 
  logout(): void{
    this.authService.logout();
  }
}
