import { Injectable, OnDestroy, Signal, inject, signal } from "@angular/core";
import { UserInterface } from "../models/user.interface";
import { HttpClient } from "@angular/common/http";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { Subject, interval, take, takeUntil } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    currentUserSig = signal<UserInterface | undefined | null>(undefined);

    http = inject(HttpClient);
    router = inject(Router);
    unsibscribe$ = new Subject<void>;

    loginAuth(form: FormGroup): void {
        this.http.post<{ user: UserInterface }>('https://api.realworld.io/api/users/login', {
            user: form.getRawValue(),
        }
        ).pipe(takeUntil(this.unsibscribe$)).subscribe(response => {
            localStorage.setItem('token', response.user.token);
            this.currentUserSig.set(response.user);
            this.router.navigateByUrl('/home');
        });
    }

    auth(): void {
        this.http.get<{ user: UserInterface }>('https://api.realworld.io/api/user')
            .pipe(takeUntil(this.unsibscribe$))
            .subscribe({
                next: (response) => {
                    this.currentUserSig.set(response.user);
                },
                error: () => {
                    this.currentUserSig.set(null);
                }
            });
    }

    registration(form: FormGroup): void {
        this.http.post<{ user: UserInterface }>('https://api.realworld.io/api/users', { user: form.getRawValue(), }
        )
            .pipe(takeUntil(this.unsibscribe$))
            .subscribe(response => {
                localStorage.setItem('token', response.user.token);
                this.currentUserSig.set(response.user);
                this.router.navigateByUrl('/home');
            });
    }
    login(): void {
        document.location.href = "/";
    }

    logout(): void {
        localStorage.setItem('token', '');
        this.currentUserSig.set(null);
    }
}