import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserStore } from './user.store';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient, private userStore: UserStore) {}

  loadUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  addUser(user: User) {
    this.userStore.add(user);
  }

  deleteUser(userId: number) {
    this.userStore.remove(userId);
  }

  updateUser(user: User) {
    this.userStore.update(user.id, user);
  }
}
