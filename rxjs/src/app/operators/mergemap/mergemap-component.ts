// src/app/observable/mergemap-component.ts
import { Component, OnInit } from '@angular/core';
import { DataService, User } from '../data.service';
import { mergeMap } from 'rxjs/operators';
import { MatSpinner } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mergemap',
  standalone: true,
  templateUrl: './mergemap-component.html',
  imports: [MatSpinner, CommonModule],
})
export class MergeMapComponent implements OnInit {
  users: User[] = [];
  isLoading: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getUserData()
      .pipe(
        mergeMap((users) => {
          console.log('Merging the observables');
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
