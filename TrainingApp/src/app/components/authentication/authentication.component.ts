import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserInterface } from '../../models/user.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {
  
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService);
  router = inject(Router);
  
  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  onSubmit() {
    
    this.http.post<{user: UserInterface}>('https://api.realworld.io/api/users/login', {
      user: this.form.getRawValue(), 
    }
    ).subscribe(response => {
      localStorage.setItem('token', response.user.token);
      this.authService.currentUserSig.set(response.user);
      this.router.navigateByUrl('/home');
  });
  }
}
