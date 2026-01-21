import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DataService, User } from '../data.service';
import { MatSpinner } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-of',
  standalone: true,
  templateUrl: './of-component.html',
  imports: [MatSpinner, CommonModule],
})
export class OfComponent implements OnInit {
  user: User | null = null;
  isLoading: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    of({ id: 1, name: 'Special User', email: 'special.user@example.com' }) // Emit single user
      .subscribe({
        next: (data) => {
          this.user = data;
          this.isLoading = false;
        },
        error: (err) => console.error(err),
      });
  }
}
