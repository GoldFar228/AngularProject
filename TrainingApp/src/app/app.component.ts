import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from '../user.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TrainingApp';

  authService = inject(AuthService);
  http = inject(HttpClient)

  ngOnInit():void {
    this.http.get<{user: UserInterface}>('https://api.realworld.io/api/user').subscribe({
      next: (response) => {
        this.authService.currentUserSig.set(response.user);
      },
      error: () => {
        this.authService.currentUserSig.set(null);
      }
    }); 
  }

  login(): void{
    document.location.href = "/";
  }

  logout(): void{
    localStorage.setItem('token', '');
    this.authService.currentUserSig.set(null)
  }
}
