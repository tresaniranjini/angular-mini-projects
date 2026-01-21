import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';

// Angular Material imports
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;  // Non-null assertion
  isLoggedIn = false;
  private loginStatusSubscription!: Subscription;
  private loginLogoutSubscription!: Subscription; 

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Initialize the form
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    // Subscribe to login status (BehaviorSubject)
    this.loginStatusSubscription = this.authService.loggedIn$.subscribe(
      (isLoggedIn) => {
        this.isLoggedIn = isLoggedIn;
      }
    );

    // Subscribe to login/logout events (Subject)
    this.loginLogoutSubscription = this.authService.loginLogout$.subscribe(() => {});
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authService.login(); // Trigger login
      this.loginForm.disable(); // Disable form after login
    }
  }

  logout(): void {
    this.authService.logout(); // Trigger logout
    this.loginForm.reset(); // Reset form after logout
    this.loginForm.enable(); // Enable form for new login
  }

  ngOnDestroy(): void {
    // Clean up subscriptions to avoid memory leaks
    if (this.loginStatusSubscription) {
      this.loginStatusSubscription.unsubscribe();
    }
    if (this.loginLogoutSubscription) {
      this.loginLogoutSubscription.unsubscribe();
    }
  }
}
