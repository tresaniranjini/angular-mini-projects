// src/app/observable/data.service.ts
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay, map, tap, filter, switchMap, mergeMap } from 'rxjs/operators';


export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getAdditionalUserInfo(id: number) {
    throw new Error('Method not implemented.');
  }
  constructor() {}

  // Simulate fetching user data
  getUserData(): Observable<User[]> {
    return of([
      { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
      { id: 3, name: 'Alice Johnson', email: 'alice.johnson@gmail.com' },
    ]).pipe(delay(1500));
  }

  // Simulate a POST request and log the response
  postData(user: User): Observable<User> {
    return of(user).pipe(
      tap(() => console.log('Data posted:', user)),
      delay(1000)
    );
  }
}
