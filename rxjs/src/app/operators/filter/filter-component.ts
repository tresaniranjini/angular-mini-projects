// src/app/observable/filter-component.ts
import { Component, OnInit } from '@angular/core';
import { DataService, User } from '../data.service';
import { filter, map } from 'rxjs/operators';
import { MatSpinner } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  templateUrl: './filter-component.html',
  imports: [MatSpinner, CommonModule],
})
export class FilterComponent implements OnInit {
  users: User[] = [];
  isLoading: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getUserData()
      .pipe(
        // Flatten the array and then filter the individual user objects
        map((userArray: User[]) => userArray.filter((user) => user.email.includes('example.com')))
      )
      .subscribe({
        next: (filteredUsers) => {
          this.users = filteredUsers; // Update users with the filtered list
          this.isLoading = false;
        },
        error: (err) => console.error(err),
      });
  }
}
