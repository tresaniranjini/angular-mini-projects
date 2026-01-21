// src/app/observable/map-component.ts
import { Component, OnInit } from '@angular/core';
import { DataService, User } from '../data.service';
import { map } from 'rxjs/operators';
import { MatSpinner } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map-component.html',
  imports: [MatSpinner, CommonModule], 
})
export class MapComponent implements OnInit {
  users: User[] = [];
  isLoading: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getUserData()
      .pipe(
        map((users) =>
          users.map((user) => ({
            ...user,
            name: user.name.toUpperCase(), // Convert names to uppercase using map
          }))
        )
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
