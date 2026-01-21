import { Component, OnInit } from '@angular/core';
import { DataService, User } from '../data.service';
import { forkJoin } from 'rxjs';
import { MatSpinner } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core'; // Import ChangeDetectorRef

@Component({
  selector: 'app-forkjoin',
  standalone: true,
  templateUrl: './forkjoin-component.html',
  imports: [MatSpinner, CommonModule],
})
export class ForkJoinComponent implements OnInit {
  users: User[] = [];
  postedUser?: User; // Separate property to hold the posted user data
  isLoading: boolean = true;

  constructor(private dataService: DataService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    forkJoin([
      this.dataService.getUserData(), // Fetch user data
      this.dataService.postData({ id: 0, name: 'Dummy User', email: 'dummy@example.com' }), // Simulate a POST request
    ]).subscribe({
      next: ([users, postedData]) => {
        console.log('ForkJoin results:', users, postedData);
        this.users = users;           // Set users data
        this.postedUser = postedData;  // Store the posted user data separately
        this.isLoading = false;        // Hide spinner

        // Explicitly trigger change detection
        this.cdr.detectChanges();
      },
      error: (err) => console.error(err),
    });
  }
}
