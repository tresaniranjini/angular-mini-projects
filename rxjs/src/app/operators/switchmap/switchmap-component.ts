import { CommonModule } from '@angular/common';
// src/app/observable/switchmap-component.ts
import { Component, OnInit } from '@angular/core';
import { DataService, User } from '../data.service';
import { switchMap } from 'rxjs/operators';
import { MatSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-switchmap',
  standalone: true,
  templateUrl: './switchmap-component.html',
  imports: [MatSpinner, CommonModule],
})
export class SwitchMapComponent implements OnInit {
  users: User[] = [];
  isLoading: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getUserData()
      .pipe(
        switchMap((users) => {
          console.log('Switching to a new observable');
          // Simulating a second API call (e.g., fetching details of the first user)
          return this.dataService.postData(users[0]);
        })
      )
      .subscribe({
        next: (data) => {
          this.users = [data];
          this.isLoading = false;
        },
        error: (err) => console.error(err),
      });
  }
}
