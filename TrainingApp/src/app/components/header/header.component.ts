import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public header: {value: string, path: string}[] = [
    {value: "Home", path:""}, 
    {value: "Trainings", path:"/trainings"}, 
    {value: "Diets", path: "/diets"}, 
    {value: "Profile", path: "/profile"}, 
    {value: "Log out", path: "/login"}];
}
