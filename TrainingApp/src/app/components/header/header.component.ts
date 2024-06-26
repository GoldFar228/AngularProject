import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { of } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,  RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public header: {value: string, path: string}[] = [
    {value: "Home", path:"/home"}, 
    {value: "Trainings", path:"/trainings"}, 
    {value: "Diets", path: "/diets"}, 
  ];

  public header$ = of(this.header);
  
  public authService = inject(AuthService)
  

  public redirect(e: Event): void{
    if((e.target as HTMLInputElement).textContent === "Logout")
      document.location.href="/registration";
    else{
      document.location.href="/home";
    }
  }


  @Input()
  logout: Function;

  @Input()
  login: Function;
}
