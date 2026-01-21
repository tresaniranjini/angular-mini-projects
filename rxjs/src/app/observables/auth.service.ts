// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInSubject = new BehaviorSubject<boolean>(false); // To track login status
  private loginLogoutSubject = new Subject<void>(); // To notify about login/logout events

  // Observable for the current login status
  get loggedIn$() {
    return this.loggedInSubject.asObservable();
  }

  // Observable for login/logout events
  get loginLogout$() {
    return this.loginLogoutSubject.asObservable();
  }

  login(): void {
    this.loggedInSubject.next(true); // Set login status to true
    this.loginLogoutSubject.next(); // Emit a login event
  }

  logout(): void {
    this.loggedInSubject.next(false); // Set login status to false
    this.loginLogoutSubject.next(); // Emit a logout event
  }
}
