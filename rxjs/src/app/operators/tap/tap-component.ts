// src/app/observable/tap-component.ts
import { Component, OnInit } from '@angular/core';
import { DataService, User } from '../data.service';
import { tap } from 'rxjs/operators';
import { MatSpinner } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tap',
  standalone: true,
  templateUrl: './tap-component.html',
  imports: [MatSpinner, CommonModule],
})
export class TapComponent implements OnInit {
  users: User[] = [];
  isLoading: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getUserData()
      .pipe(
        tap((data) => console.log('Fetched User Data:', data)) // Log the fetched data
      )
      .subscribe({
        next: (data) => {
          this.users = data;
          this.isLoading = false;
        },
        error: (err) => console.error(err),
      });
  }
}
