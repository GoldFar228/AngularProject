import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserInterface } from '../../../user.interface';
import { response } from 'express';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.css'
})
export class AuthorizationComponent {
  public redirect(): void{
    document.location.href="/home"
  }

  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmit(){
    this.http.post<{user: UserInterface}>('https://api.realworld.io/api/users', {user: this.form.getRawValue(), }
    ).subscribe(response => {
      console.log("response", response);
      localStorage.setItem('token', response.user.token);
      this.authService.currentUserSig.set(response.user);
      this.router.navigateByUrl('/home');
  });
  }
}
