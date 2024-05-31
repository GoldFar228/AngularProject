import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserInterface } from '../../models/user.interface';
import { response } from 'express';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ValidatorMsgComponent } from '../../reusable/validator-msg/validator-msg.component';

@Component({
  selector: 'app-authorization',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, ValidatorMsgComponent],
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
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit(){
    this.authService.registration(this.form);
  }
}
