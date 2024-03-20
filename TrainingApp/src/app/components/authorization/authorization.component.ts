import { Component } from '@angular/core';

@Component({
  selector: 'app-authorization',
  standalone: true,
  imports: [],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.css'
})
export class AuthorizationComponent {
  public email: string = "";
  public password: string = "";
  public redirect(): void{
    document.location.href="/home"
  }
}
