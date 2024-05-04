import { Injectable, Signal, inject, signal } from "@angular/core";
import { UserInterface } from "../models/user.interface";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    currentUserSig = signal<UserInterface | undefined | null>(undefined);

    http = inject(HttpClient)

    auth(): void {
        this.http.get<{ user: UserInterface }>('https://api.realworld.io/api/user').subscribe({
            next: (response) => {
                this.currentUserSig.set(response.user);
            },
            error: () => {
                this.currentUserSig.set(null);
            }
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