import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authenticated = false;

  // Simulate authentication check
  get isAuthenticated(): boolean {
    return this.authenticated;
  }

  login(): void {
    this.authenticated = true;
  }

  logout(): void {
    this.authenticated = false;
  }
}
