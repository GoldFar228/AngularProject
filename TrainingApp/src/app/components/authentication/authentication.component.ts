import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { UserInterface } from '../../models/user.interface';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, delay, finalize, interval, of } from 'rxjs';
import { SetBackgroundDirective } from '../../CustomDirectives/set-background.directive';
import { ValidatorMsgComponent } from '../../reusable/validator-msg/validator-msg.component';

@Component({
    selector: 'app-authentication',
    standalone: true,
    templateUrl: './authentication.component.html',
    styleUrl: './authentication.component.css',
    imports: [ReactiveFormsModule, CommonModule, RouterModule, ValidatorMsgComponent, SetBackgroundDirective]
})
export class AuthenticationComponent implements OnDestroy{
  public fb = inject(FormBuilder);
  public http = inject(HttpClient);
  public authService = inject(AuthService);
  public router = inject(Router);
  public form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  onSubmit() {
    this.authService.loginAuth(this.form);
  }
  
  ngOnDestroy(): void {
    this.authService.unsibscribe$.next();
    this.authService.unsibscribe$.complete();
}
}
